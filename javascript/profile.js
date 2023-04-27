const bodydark = document.querySelector('[data-js="body"]');
const toggleColorButton = document.querySelector('[data-js="toggle_js"]');
toggleColorButton.addEventListener("click", (e) => {
  e.preventDefault();
  bodydark.classList.toggle("dark");
});

/*
const index = document.querySelector('[data-js="index"]');
form.addEventListener("click", (e) => {
    e.preventDefault();
    location.replace('index.html');
});

const bookmark = document.querySelector('[data-js="bookmark"]');
form.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = 'bookmark.html';
});

const form = document.querySelector('[data-js="form"]');
form.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = 'form.html';
});

const indexPage = 'http://127.0.0.1:3000/index.html';
window.history.replace(indexPage);

function Test()
  {
    document.getElementById("test").href="index.html"; 
  }
*/
