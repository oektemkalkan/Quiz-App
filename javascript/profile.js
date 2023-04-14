const bodydark = document.querySelector('[data-js="body"]');
const toggleColorButton = document.querySelector('[data-js="toggle_js"]');
toggleColorButton.addEventListener("click", () => {
    bodydark.classList.toggle("dark");
});