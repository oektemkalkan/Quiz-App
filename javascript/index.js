const bodydark = document.querySelector('[data-js="body"]');
const toggleColorButton = document.querySelector('[data-js="toggle_js"]');
toggleColorButton.addEventListener("click", () => {
    bodydark.classList.toggle("dark");
});

const buttonGreen = document.querySelector('[data-js="flexbox_answer"]');
const showFirstAnswer = document.querySelector('[data-js="show_answer_button"]');
showFirstAnswer.addEventListener("click", () => {
    buttonGreen.classList.add("green");
});

function visible() {
    var unhide = document.getElementById("solution_1");
    if (unhide.style.display === "none") {
        unhide.style.display = "block";
    } else {
        unhide.style.display = "none";
    }
  }

  function visible2() {
    var unhide2 = document.getElementById("solution_2");
    if (unhide2.style.display === "none") {
        unhide2.style.display = "block";
    } else {
        unhide2.style.display = "none";
    }
  }

  function visible3() {
    var unhide3 = document.getElementById("solution_3");
    if (unhide3.style.display === "none") {
        unhide3.style.display = "block";
    } else {
        unhide3.style.display = "none";
    }
  }