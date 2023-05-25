import '../scss/style.scss'
import '../../node_modules/normalize.css/normalize.css';
import {Swiper, Pagination} from 'swiper';
import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/pagination/pagination.scss';

let checkClickBrands = false;
let checkClickTech = false;
let checkOpenMenu = false;
let moreButtonBrands = document.querySelector('.brands__button');
let moreButtonTech = document.querySelector('.technique__button');
let sidebar = document.querySelector('.sidebar');
let mainWindow = document.querySelector('.main');
let footerBlock = document.querySelector('footer');
let blurredArea = document.querySelector('.blurred-area');
let swiper;


function swiperCard() {
  if (window.innerWidth < 768) {
        swiper = new Swiper(".swiper", {
        modules: [Pagination],
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 8,

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      });
      checkClickBrands = true;
      openBrandsGrid(moreButtonBrands);  
  }
}

swiperCard();


function openBrandsGrid(moreButtonBrands) {
  let textButtonMore = moreButtonBrands.querySelector('.brands__button__text');
  let swiperHeight = document.querySelector('.swiper');
  let cardView = document.querySelectorAll('.swiper-slide');
  let imgButtonMore = moreButtonBrands.querySelector('.brands__button__img');

    switch (checkClickBrands) {

      case false:
        checkClickBrands = true;
        swiperHeight.style.height = 'auto';
        textButtonMore.textContent = 'Скрыть';
        imgButtonMore.style.transform = 'rotate(180deg)';
        cardView.forEach(element => {
          element.style.display = 'block';
        });
        break;

      case true:
        checkClickBrands = false;
        swiperHeight.style.height = "";
        textButtonMore.textContent = 'Показать все';
        imgButtonMore.style.transform = null;
        cardView.forEach(element => {
          element.style.display = "";
        });
        break;

      default:
        checkClickBrands = true;
        break;
    }
}

moreButtonBrands.addEventListener('click', function() {
  openBrandsGrid(moreButtonBrands);
});

function openTechGrid(moreButtonTech) {
  let techBlock = document.querySelector('.technique');
  let textButtonMore = moreButtonTech.querySelector('.technique__button__text');
  let swiperHeight = techBlock.querySelector('.swiper');
  let cardView = techBlock.querySelectorAll('.swiper-slide');
  let imgButtonMore = moreButtonTech.querySelector('.technique__button__img');

    switch (checkClickTech) {

      case false:
        checkClickTech = true;
        swiperHeight.style.height = 'auto';
        textButtonMore.textContent = 'Скрыть';
        imgButtonMore.style.transform = 'rotate(180deg)';
        cardView.forEach(element => {
          element.style.display = 'block';
        });
        break;

      case true:
        checkClickTech = false;
        swiperHeight.style.height = "";
        textButtonMore.textContent = 'Показать все';
        imgButtonMore.style.transform = null;
        cardView.forEach(element => {
          element.style.display = "";
        });
        break;

      default:
        checkClickTech = true;
        break;
    }
}

moreButtonTech.addEventListener('click', function() {
  openTechGrid(moreButtonTech);
});



let infoContentBtn = document.querySelector('.info-block__content--button');

infoContentBtn.addEventListener('click', function() {
  let infoContentText = document.querySelector('.info-block__content--text-block');
  let infoContentButton = document.querySelector('.info-block__content--button');
  infoContentText.style.height = 'auto';
  infoContentButton.style.display = 'none';
});



let menuOpenBtn = document.querySelector('.burger');
menuOpenBtn.addEventListener('click', function(){
  menuOpenFunction();
});

function menuOpenFunction() {
  sidebar.style.display = 'block';
  if (window.innerWidth < 768) {
    mainWindow.style = 'display: none';
  } else {
    blurredArea.style.display = 'block';
    mainWindow.style = 'overflow: hidden';
    mainWindow.style.height = '800px';
    footerBlock.style = 'display: none';
  }
  checkOpenMenu = true;
}

let menuExitBtn = document.querySelector('.sidebar__burger');
menuExitBtn.addEventListener('click', function(){
  sidebar.style.display = 'none';
  mainWindow.style = 'display: block';
  blurredArea.style = 'display: none';
  footerBlock.style = 'display: block';
  checkOpenMenu = false;
});

let messageBtn = document.querySelectorAll('.message');
let phoneBtn = document.querySelectorAll('.phone');

messageBtn.forEach(element => {
  element.addEventListener('click', function(){
    blurredArea.style = 'display: block';
    document.querySelector('.modal-window__title').textContent = 'Обратная связь';
    document.querySelector('.calls').style = 'display: none';
    document.querySelector('.modal-window').style.display = 'block';
    if (checkOpenMenu == true) {
      sidebar.style.display = 'none';
    } else {
      blurredArea.style = 'display: block';
      mainWindow.style = 'overflow: hidden';
      mainWindow.style.height = '800px';
      footerBlock.style = 'display: none';
    }
  });
})

phoneBtn.forEach(element => {
  element.addEventListener('click', function(){
    blurredArea.style = 'display: block';
    document.querySelector('.modal-window__title').textContent = 'Заказать звонок';
    document.querySelector('.modal-window').style.display = 'block';
    document.querySelector('.messages').style = 'display: none';
    if (checkOpenMenu == true) {
      sidebar.style.display = 'none';
    } else {
      blurredArea.style = 'display: block';
      mainWindow.style = 'overflow: hidden';
      mainWindow.style.height = '800px';
      footerBlock.style = 'display: none';
    }
  });
});

blurredArea.addEventListener('click', function() {
  document.querySelector('.modal-window').style.display = 'none';
  blurredArea.style = 'display: none';
  mainWindow.style = 'display: block';
  footerBlock.style = 'display: block';
  if (window.innerWidth < 1200) {
    sidebar.style.display = 'none';
    document.querySelector('.messages').style.display = null;
    document.querySelector('.calls').style.display = null;
  }
});

let BtnExit = document.querySelector('.modal-window__burger');
BtnExit.addEventListener('click', function(){
  document.querySelector('.modal-window').style.display = 'none';
  document.querySelector('.messages').style.display = null;
  document.querySelector('.calls').style.display = null;
  if (checkOpenMenu == true) {
    sidebar.style.display = 'block';
  } else {
    blurredArea.style = 'display: none';
    mainWindow.style = 'display: block';
    footerBlock.style = 'display: block';
  }
});


let borderNavigationLink = document.querySelectorAll('.navigation-block__menu--link');
borderNavigationLink.forEach(element => {
  element.style.border = 'none';
});
borderNavigationLink[0].style.border = null;

borderNavigationLink.forEach(element => {
  element.addEventListener('click', function() {
    borderNavigationLink.forEach(element => {
      element.style.border = 'none';
    });
    element.style.border = null;
  });
});


let pseudoElementMainLink = document.querySelectorAll('.sidebar__main__link');
pseudoElementMainLink.forEach(element => {
  element.style.border= 'transparent';
});
pseudoElementMainLink[1].style.border = null;


pseudoElementMainLink.forEach(element => {
  element.addEventListener('click', function() {
    pseudoElementMainLink.forEach(element => {
      element.style.border = 'transparent';
    });
    element.style.border = null;
    element.style.color = '$title-color';
  });
});

