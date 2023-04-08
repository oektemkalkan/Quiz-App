const bodydark = document.querySelector('[data-js="body"]')
const togglebutton = document.querySelector('[data-js="toggle_js"]');
toggleColorbutton.addEventListener("click", () => {
    bodydark.classList.toggle("dark");
});