const menuEmail = document.querySelector('.navbar-right');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menuImgBurger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

// ------
menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
});

// -----
menuBurger.addEventListener('click', () => {
    // Relacion con la funcion de abajo
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    // ya estaba
    mobileMenu.classList.toggle('inactive');
});

// ------
menuShoppingCart.addEventListener('click', () => {
    // se guarda en una variable
    // Preguntando si el menuMobile esta cerrado
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    // menu desktop si esta cerrado    

    // CONDITION
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
});