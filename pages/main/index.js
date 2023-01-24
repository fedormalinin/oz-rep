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




// PETS SLIDER

const nextBtn = document.querySelector('.btn-next')
const prevBtn = document.querySelector('.btn-prev')






let petsWrap = document.querySelector('.pets-wrap')

const favLinesContainer = document.querySelector('.fav-lines_container')

let origin = document.querySelectorAll('.fav-lines_container')

let petSlide = favLinesContainer.cloneNode(true)

let slider = []
for(let i=0; i <origin.length; i++) {
    slider[i] = origin[i]
}



let step = 0;


function draw(){
    let offset = 1;
    petSlide = slider[0].cloneNode(true)
    petSlide.style.left = offset*1160 + 'px'
    petsWrap.append(petSlide)

    if (step+1==slider.length) {
        step=0;
    } else {
        step++;
    }
    console.log('DRAW')

}
function moveRight() {
    nextBtn.onclick = null;
    let slides2 = document.querySelectorAll('.fav-lines_container')
    let offset2 = -1;
    for(let i=0; i<slides2.length; i++) {
        slides2[i].style.left= offset2*1160 - 1160 + 'px'
        offset2++;
    }
    setTimeout(function(){
        slides2[0].remove();
        draw();
        nextBtn.onclick = moveRight;
    }, 1000)
    fillCards()
}


function drawBack(){
    let offset = -1;

    petSlide = slider[1].cloneNode(true)

    petSlide.style.left = offset*1160 + 'px'

    petsWrap.prepend(petSlide)
    console.log('DRAWBACK')
}


function moveLeft() {
    
    prevBtn.onclick = null;

    let slides3 = document.querySelectorAll('.fav-lines_container')
    let offset3 = -1;
    for(let i=0; i<slides3.length; i++) {
        slides3[i].style.left= offset3*1160 + 1160 + 'px'
        offset3++;
    }
    setTimeout(function(){
        slides3[2].remove();
        drawBack();
        prevBtn.onclick = moveLeft;
    },1000)
    fillCards()
}



// FILLCARD

let card = 4;
let originBlocks = 1;
let numLine = 0;
let numCard = 1;

let petCards = [
    {
        img: '../../assets/images/giantpandas.jpg',
        alt: 'giantpandas',
        title: 'Giant Pandas<br>',
        subtitle: 'Native to Southwest China',
        desctitle: 'The giant panda',
        descsubtitle: 'Here we have a giant panda living on the shores of the Romanian Gulf',
    },
    {
        img: '../../assets/images/eagles.jpg',
        alt: 'eagles',
        title: 'Eagles<br>',
        subtitle: 'Native to South America',
        desctitle: 'Eagles',
        descsubtitle: 'Here we have Eagles living in South America',
    },
    {
        img: '../../assets/images/gorillas.jpg',
        alt: 'gorillas',
        title: 'Gorillas<br>',
        subtitle: 'Native to Congo',
        desctitle: 'Gorillas',
        descsubtitle: 'Here we have Gorillas living in Congo',
    },
    {
        img: '../../assets/images/twotoedsloth.jpg',
        alt: 'twotoedsloth',
        title: 'Two-toes sloth<br>',
        subtitle: 'Mesoamerica, South America',
        desctitle: 'Two-toed Sloth',
        descsubtitle: 'Here we have Two-toed Sloth living in South America',
    },
    {
        img: '../../assets/images/cheetahs.jpg',
        alt: 'cheetahs',
        title: 'Cheetahs<br>',
        subtitle: 'Native to Africa',
        desctitle: 'The cheetahs',
        descsubtitle: 'Here we have cheetahs living in Africa',
    },
    {
        img: '../../assets/images/penguins.jpg',
        alt: 'penguins',
        title: 'Penguins<br>',
        subtitle: 'Native to Antarctica',
        desctitle: 'The Penguins',
        descsubtitle: 'Here we have Penguins living in Antarctica',
    },
    {
        img: '../../assets/images/alligators.jpg',
        alt: 'alligators',
        title: 'Alligators<br>',
        subtitle: 'Native to Southeastern U.S.',
        desctitle: 'The alligators',
        descsubtitle: 'Here we have allligators living in Southeastern',
    },
    {
        img: '../../assets/images/lama.jpg',
        alt: 'lamas',
        title: 'Lamas<br>',
        subtitle: 'Native to South American',
        desctitle: 'The lamas',
        descsubtitle: 'Here we have lamas living in South American',
    },
    {
        img: '../../assets/images/turtles.jpg',
        alt: 'turtles',
        title: 'Turtles<br>',
        subtitle: 'Native to South American',
        desctitle: 'The turtles',
        descsubtitle: 'Southeastern North America and in South Asia.',
    },
    {
        img: '../../assets/images/giraffes.jpg',
        alt: 'giraffes',
        title: 'Giraffes<br>',
        subtitle: 'Native to South American hot',
        desctitle: 'The giraffes',
        descsubtitle: 'Southeastern South American.',
    },
    {
        img: '../../assets/images/fishes.jpg',
        alt: 'blob sculpin',
        title: 'Blob Sculpin<br>',
        subtitle: 'Native to northeastern Pacific Ocean',
        desctitle: 'The Blob Sculpin',
        descsubtitle: 'Northeastern Pacific Ocean.',
    },
]







function fillCard() {
    origin[originBlocks].children[numLine].children[numCard].children[0].children[0].attributes[1].nodeValue = petCards[card].img
    origin[originBlocks].children[numLine].children[numCard].children[0].children[0].attributes[2].nodeValue = petCards[card].alt
    origin[originBlocks].children[numLine].children[numCard].children[1].innerHTML = petCards[card].title
    origin[originBlocks].children[numLine].children[numCard].children[2].innerHTML = petCards[card].subtitle
    origin[originBlocks].children[numLine].children[numCard].children[0].children[1].children[0].innerHTML = petCards[card].desctitle
    origin[originBlocks].children[numLine].children[numCard].children[0].children[1].children[1].innerHTML = petCards[card].descsubtitle
}
// fillCard()




function fillCards(){
    let rndCards = [0,1,2,3,4,5,6,7,8,9,10];
    rndCards.sort(()=>Math.random()-0.5)

    originBlocks = 0;
    card = rndCards[0];
    numLine = 0;
    numCard = 0;
    fillCard()
    card = rndCards[1];
    numLine = 0;
    numCard = 1;
    fillCard()
    card = rndCards[2];
    numLine = 0;
    numCard = 2;
    fillCard()

    card = rndCards[3];
    numLine = 1;
    numCard = 0;
    fillCard()
    card = rndCards[4];
    numLine = 1;
    numCard = 1;
    fillCard()
    card = rndCards[5];
    numLine = 1;
    numCard = 2;
    fillCard()

    originBlocks = 1;
    card = rndCards[0];
    numLine = 0;
    numCard = 0;
    fillCard()
    card = rndCards[1];
    numLine = 0;
    numCard = 1;
    fillCard()
    card = rndCards[2];
    numLine = 0;
    numCard = 2;
    fillCard()

    card = rndCards[3];
    numLine = 1;
    numCard = 0;
    fillCard()
    card = rndCards[4];
    numLine = 1;
    numCard = 1;
    fillCard()
    card = rndCards[5];
    numLine = 1;
    numCard = 2;
    fillCard()
}
fillCards();fillCards();





// TESTIMONIALS START


const testimonialsLine = document.querySelector('.testimonials-line')
const testimonialsSlider = document.querySelector('.testimonials__range')
const testimonialsItem = document.querySelector('.item-testimonials')
const testimonialsPopup = document.querySelector('.testimonials-popup')
const popupBg = document.querySelector('.popup-bg')
const blockTestimonials = document.querySelector('.block-testimonials')

const allItems = document.querySelectorAll('.item-testimonials')

testimonialsSlider.oninput = function() {
    testimonialsLine.style.left = this.value * -14.7 + '%';
}



// MEDIA


const mediaQuery = window.matchMedia('(max-width: 1000px)')
function handleTabletChange(e) {
  if (e.matches) {
    console.log('1000')


    function moveLeft() {
    
        prevBtn.onclick = null;
    
        let slides3 = document.querySelectorAll('.fav-lines_container')
        let offset3 = -1;
        for(let i=0; i<slides3.length; i++) {
            slides3[i].style.left= offset3*940 + 940 + 'px'
            offset3++;
        }
        setTimeout(function(){
            slides3[2].remove();
            drawBack();
            prevBtn.onclick = moveLeft;
        },1000)
        fillCards()
    }

    testimonialsSlider.oninput = function() {
        testimonialsLine.style.left = this.value * -23.6 + '%';
    }
    


  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)


const mediaQuery2 = window.matchMedia('(max-width: 640px)')
function handleTabletChange2(e) {
    if (e.matches) {
      console.log('640')

      function showPopup() {
        testimonialsPopup.prepend(this.cloneNode(true))
        testimonialsPopup.classList.add('active')
        document.querySelector("div.testimonials-popup > div.item-testimonials").classList.add('popup')
        document.querySelector(".popup").addEventListener('click', closePopup)
      }
      for(i=0; i<allItems.length; i++){
        allItems[i].addEventListener('click', showPopup)
      }
      
      function closePopup() {
        testimonialsPopup.classList.remove('active')
        document.querySelector("div.testimonials-popup > div.item-testimonials").remove()
      }
    popupBg.addEventListener('click', closePopup)
    }
}
mediaQuery2.addListener(handleTabletChange2)
handleTabletChange2(mediaQuery2)
    



function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Viktor',
    age: 25,
    sayHello: hello
}





