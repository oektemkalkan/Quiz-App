const buttonGreen = document.querySelector('[data-js="section_1"]');
const showFirstAnswer = document.querySelector('[data-js="real_answer_1"]');
showFirstAnswer.addEventListener("click", () => {
    buttonGreen.classList.add("green");
});

const buttonRed = document.querySelector('[data-js="section_1"]');
const showFirstFalse = document.querySelector('[data-js="wrong_1"]');
showFirstFalse.addEventListener("click", () => {
    buttonRed.classList.add("red");
});

const buttonRed1 = document.querySelector('[data-js="section_1"]');
const showFirstFalse1 = document.querySelector('[data-js="wrong_1.1"]');
showFirstFalse1.addEventListener("click", () => {
    buttonRed1.classList.add("red");
});
/*
function visible() {
    var unhide = document.getElementById("solution");
    if (unhide.style.display === "none") {
        unhide.style.display = "block";
    } else {
        unhide.style.display = "none";
    }
  }
  */
 