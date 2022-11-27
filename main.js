const menuEmail = document.querySelector('.navbar-right');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
})