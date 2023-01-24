const burgerBtn = document.querySelector('.burger-block__button');
const burgerMenu = document.querySelector('.burger-block__burger-menu');
const navItems = document.querySelector('.nav-items');
const navItem = document.querySelector('.nav-item');
const logoLink = document.querySelector('.logo_link');
const logo = document.querySelector('.logo');
const burgerShadow = document.querySelector('.burger-shadow');

const extraLi = document.createElement('li')

const toggleMenu = () => {
    if(burgerMenu.classList.contains('active')) {
        navItems.classList.remove('active')
        logoLink.classList.remove('logo_burger')
        logo.classList.remove('logo_border')
        burgerShadow.classList.remove('active')
        navItem.classList.remove('nav-item_black')
        burgerMenu.classList.remove('active')
        burgerBtn.classList.remove('active');

        // delete DesignBy
        if (document.querySelectorAll('.nav-item').length>5) {
            navItems.removeChild(navItems.lastChild)
        }
    } else {
    navItems.classList.add('active');
    logoLink.classList.add('logo_burger');
    logo.classList.add('logo_border');
    burgerShadow.classList.add('active');
    navItem.classList.add('nav-item_black');
    burgerMenu.classList.add('active');
    burgerBtn.classList.add('active');

    // add DesignBy
    navItems.innerHTML += `<li><a class="nav-item" href="https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online">Designed by ©</a></li>`
}
};




burgerBtn.addEventListener('click', toggleMenu);
burgerShadow.addEventListener('click', toggleMenu)



// DONATE PAGE

// AMOUNT

const amount = document.querySelectorAll('.amount-bar__item')

for (i=0; i<amount.length; i++) {
    amount[i].addEventListener('click', changeAmount)
}
let amountInput = document.querySelector(".another-amount")
function changeAmount() {
    let fixAmount = this.childNodes[3].innerHTML.slice(1)


    amountInput.childNodes[1].defaultValue = fixAmount
}



function amountChecker() {

}