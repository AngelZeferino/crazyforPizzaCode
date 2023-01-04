const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
btn.addEventListener('click',() => {
menu.classList.toggle("hidden");
});

const btn1= document.querySelector('.starters');
const menu1= document.querySelector('.salads');
btn.addEventListener('click',() => {
menu1.classList.toggle("hidden");
});
