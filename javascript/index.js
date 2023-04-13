const bodydark = document.querySelector('[data-js="body"]');
const toggleColorButton = document.querySelector('[data-js="toggle_js"]');
toggleColorButton.addEventListener("click", () => {
    bodydark.classList.toggle("dark");
});


/*const buttonGreen = document.querySelector('[data-js="section_1"]');*/
const showFirstAnswer = document.querySelector('[data-js="first_answer_1"]');
showFirstAnswer.addEventListener("click", () => {
    /*buttonGreen.classList.add("green");*/
    bodydark.classList.toggle("dark");
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
 