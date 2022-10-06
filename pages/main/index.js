const burgerBtn = document.querySelector('.burger-block__button');
const burgerMenu = document.querySelector('.burger-block__burger-menu');
const navItems = document.querySelector('.nav-items');
const navItem = document.querySelector('.nav-item');
const logoLink = document.querySelector('.logo_link');
const logo = document.querySelector('.logo');
const burgerShadow = document.querySelector('.burger-shadow');

const toggleMenu = () => {
    if(burgerMenu.classList.contains('active')) {
        navItems.classList.remove('active')
        logoLink.classList.remove('logo_burger')
        logo.classList.remove('logo_border')
        burgerShadow.classList.remove('active')
        navItem.classList.remove('nav-item_black')
        burgerMenu.classList.remove('active')
        burgerBtn.classList.remove('active');
    } else {
    navItems.classList.add('active');
    logoLink.classList.add('logo_burger');
    logo.classList.add('logo_border');
    burgerShadow.classList.add('active');
    navItem.classList.add('nav-item_black');
    burgerMenu.classList.add('active');
    burgerBtn.classList.add('active');
}
};


burgerBtn.addEventListener('click', toggleMenu);
burgerShadow.addEventListener('click', toggleMenu)

