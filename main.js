const menuEmail = document.querySelector('.navbar-right');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menuImgBurger');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
});

menuBurger.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
});