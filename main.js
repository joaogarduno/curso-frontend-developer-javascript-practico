// EVENTOS
const menuEmail = document.querySelector('.navbar-email'); // Evento
const menuBurger = document.querySelector('.menuImgBurger'); // Evento
const menuShoppingCart = document.querySelector('.navbar-shopping-cart'); // Evento
const productDetailCloseIcon = document.querySelector('.product-detail-close'); // Evento

// Desktop & Mobile
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

// 
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');


// EVENTOS
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


// -------SOLUCION DE LA CLASE
// FUNCIONES
// Desktop Menu
// function toggleDesktopMenu(){
//     const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

//     if(!isAsideClosed){
//         shoppingCartContainer.classList.add('inactive');
//     }
//     desktopMenu.classList.toggle('inactive');
// }

// 
// function toggleMobileMenu(){
//     const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

//     if(!isAsideClosed){
//         shoppingCartContainer.classList.add('inactive')
//     }

//     // Mandamos a llamar a esta funcion
//     closeProductDetailAside()

//     // 
//     mobileMenu.classList.toggle('inactive');
// }

// 
// function toggleCarritoAside(){
//     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
//     const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

//     // 
//     if(!isMobileMenuClosed){
//         mobileMenu.classList.add('inactive');
//     }

//     // 
//     if(!isProductDetailClosed){
//         productDetailContainer.classList.add('inactive');
//     }

//     // 
//     shoppingCartContainer.classList.toggle('inactive');
// }

// 
// function openProductDetailAside(){
//     shoppingCartContainer.classList.add('inactive');
//     productDetailContainer.classList.remove('inactive');
// }

// 
// function closeProductDetailAside(){
//     productDetailContainer.classList.add('inactive');
// }

// ---------OTRA SOLUCION
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

// 
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

// 
function toggleCarritoAside(){
    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

// 
function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
}

// 
function closeProductDetailAside(){
    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive');
}

// ------ MI SOLUCION CON FUNCIONES ANONIMAS-----------------
// menuEmail.addEventListener('click', () => {
//     desktopMenu.classList.toggle('inactive');
// });

// -----
// Menu burger
// menuBurger.addEventListener('click', () => {
//     // Relacion con la funcion de abajo
//     const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

//     if(!isAsideClosed){
//         shoppingCartContainer.classList.add('inactive');
//     }

//     // 
//     productDetailCloseIcon;

//     // ya estaba
//     mobileMenu.classList.toggle('inactive');
// });

// ------
// Carrito de compras
// menuShoppingCart.addEventListener('click', () => {
//     // se guarda en una variable
//     // Preguntando si el menuMobile esta cerrado
//     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
//     // Cerrando productDetailContainer cuando se abra el mobileMenu
//     const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

//     // menu desktop si esta cerrado

//     // CONDITION - MOBILE
//     if(!isMobileMenuClosed){
//         mobileMenu.classList.add('inactive');
//         desktopMenu.classList.add('inactive');
//     }

//     // CONDITION -
//     if (!isProductDetailClosed){
//         productDetailContainer.classList.add('inactive');
//     }

//     shoppingCartContainer.classList.toggle('inactive');
// });

// Abriendo y cerrando el "productDetail"
// productDetailCloseIcon.addEventListener('click', () => {
//     productDetailContainer.classList.add('inactive');
// } );

// PRODUCT LIST
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'TV',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Ladder',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computer',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

// FUNCION PARA EL EJERCICIO
function renderProducts(arr){
    // insertando los articulos para que se vean y eso se hace recorriendo el array
    for(product of productList){

        // Creamos elemento div
        const productCard = document.createElement('div');
        // a productCard le agregamos una clase
        productCard.classList.add('product-card');

        // crear una imagen
        // product = {name, price, image}
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        // agregamos el evento clic en la imagen
        // ParA ABRIR
        productImg.addEventListener('click', openProductDetailAside);

        // 
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        // 
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');

        // productPrice.innerText = `$ ${product.price}`;
        productPrice.innerText = '$' + product.price;
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        // 
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');

        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        // ya se han creado pero es hora de insertar el contenido de cada elemento creado
        productInfoFigure.appendChild(productImgCart);

        // 
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild( productInfoFigure)

        // 
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        // 
        cardsContainer.appendChild(productCard);

    }
}

// llamdno a la funcion
renderProducts(productList);
