const questionToggles = document.querySelectorAll(".question-toggle");
questionToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const questionAnswer = toggle.parentElement;
    const icon = toggle.querySelector(".icon");
    questionAnswer.classList.toggle("active");
    icon.classList.toggle("active");
    if (icon.src.includes("icon-plus.svg")) {
      icon.src = "./assets/images/icon-minus.svg";
    } else {
      icon.src = "./assets/images/icon-plus.svg";
    }
  });
});
