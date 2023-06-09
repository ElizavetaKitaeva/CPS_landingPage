import '../scss/style.scss'
import '../../node_modules/normalize.css/normalize.css';
import {Swiper, Pagination} from 'swiper';
import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/pagination/pagination.scss';
let checkClickBrands = false;
let checkClickTech = false;
let checkOpenMenu = false;
let checkOpenModalWindow = false;
let moreButtonBrands = document.querySelector('.brands__button');
let moreButtonTech = document.querySelector('.technique__button');
let sidebar = document.querySelector('.sidebar');
let mainWindow = document.querySelector('.main');
let footerBlock = document.querySelector('footer');
let menuOpenBtn = document.querySelector('.burger');
let blurredArea = document.querySelector('.blurred-area');
let menuExitBtn = document.querySelector('.sidebar__button--burger');
let BtnExit = document.querySelector('.modal-window__button--burger');
let messageBtn = document.querySelectorAll('.button-message');
let phoneBtn = document.querySelectorAll('.button-phone');
let borderNavigationLink = document.querySelectorAll('.navigation-block__menu--link');
let pseudoElementMainLink = document.querySelectorAll('.sidebar__link');
let infoContentBtn = document.querySelector('.info-block__content--button');
let swiper;

function swiperCard() {
  if (window.innerWidth < 768) {
      swiper = new Swiper('.swiper', {
        modules: [Pagination],
        direction: "horizontal",
        slidesPerView: "auto",
  
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
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

function resizeOpenMenu() {
  if (window.innerWidth < 1440) {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
}

window.addEventListener('resize', resizeOpenMenu)

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


infoContentBtn.addEventListener('click', function() {
  let infoContentText = document.querySelector('.info-block__content--text-block');
  let infoContentButton = document.querySelector('.info-block__content--button');
  infoContentText.style.height = 'auto';
  infoContentButton.style.display = 'none';
});

menuOpenBtn.addEventListener('click', function(){
  menuOpenFunction();
});

function deleteMainContent() {
  if (window.innerWidth < 768) {
    footerBlock.style.display = 'none';
    mainWindow.style.height = '550px';
    mainWindow.style.overflow = 'hidden';
  } else if (window.innerWidth < 1440 && window.innerWidth > 768) {
    footerBlock.style.display = 'none';
    mainWindow.style.height = '850px';
    mainWindow.style.overflow = 'hidden';
  }
}

function menuOpenFunction() {
  sidebar.style.display = 'block';
  blurredArea.style.display = 'block';
  deleteMainContent();
  checkOpenMenu = true;
}

menuExitBtn.addEventListener('click', function(){
  sidebar.style.display = 'none';
  blurredArea.style = 'display: none';
  mainWindow.style.height = 'auto';
  footerBlock.style = 'display: block';
  checkOpenMenu = false;
});

messageBtn.forEach(element => {
  element.addEventListener('click', function(){
    blurredArea.style = 'display: block';
    document.querySelector('.modal-window__title').textContent = 'Обратная связь';
    document.querySelector('.modal-window__form--calls').style = 'display: none';
    document.querySelector('.modal-window').style.display = 'block';
    deleteMainContent();
    if (checkOpenMenu == true) {
      sidebar.style.display = 'none';
      checkOpenModalWindow = true;
    } else {
      blurredArea.style = 'display: block';
    }
  });
})

phoneBtn.forEach(element => {
  element.addEventListener('click', function(){
    blurredArea.style = 'display: block';
    document.querySelector('.modal-window__title').textContent = 'Заказать звонок';
    document.querySelector('.modal-window').style.display = 'block';
    document.querySelector('.modal-window__form--messages').style = 'display: none';
    deleteMainContent();
    if (checkOpenMenu == true) {
      sidebar.style.display = 'none';
      checkOpenModalWindow = true;
    } else {
      blurredArea.style = 'display: block';
    }
  });
});

function exitClickBlurredArea () {
  document.querySelector('.modal-window').style.display = 'none';
  document.querySelector('.modal-window__form--messages').style.display = null;
  document.querySelector('.modal-window__form--calls').style.display = null;
  if (window.innerWidth < 1440) {
    blurredArea.style = 'display: none';
    sidebar.style.display = 'none';
    mainWindow.style.height = 'auto';
    footerBlock.style = 'display: block';
  } else {
    blurredArea.style = 'display: none';
    sidebar.style.display = 'block';
  }
}

blurredArea.addEventListener('click', exitClickBlurredArea);


function exitModalWindow() {
  document.querySelector('.modal-window').style.display = 'none';
  document.querySelector('.modal-window__form--messages').style.display = null;
  document.querySelector('.modal-window__form--calls').style.display = null;
  checkOpenModalWindow = false;
    blurredArea.style = 'display: none';
    mainWindow.style = 'display: block';
    footerBlock.style = 'display: block';
    if (window.innerWidth < 1440) {
      sidebar.style.display = 'none';
      mainWindow.style.height = 'auto';
      footerBlock.style = 'display: block';
    } else {
      sidebar.style.display = 'block';
    }
}

BtnExit.addEventListener('click', exitModalWindow);


  borderNavigationLink[0].style.border = '2px solid #b8ffec';
  borderNavigationLink[0].style.background = '#ffffff';

  borderNavigationLink.forEach(element => {
    element.addEventListener('click', function() {
      borderNavigationLink.forEach(element => {
        element.style.border = null;
        element.style.background = null;
      });
      element.style.border = '2px solid #b8ffec';
      element.style.background = '#ffffff';
    });
  });


  pseudoElementMainLink.forEach(element => {
    element.classList.remove('active');
  });
  pseudoElementMainLink[1].classList.add('active');
  pseudoElementMainLink.forEach(element => {
    element.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
      pseudoElementMainLink.forEach(element => {
        element.classList.remove('active');
      });
      element.classList.add('active');
    }
    });
    element.addEventListener('click', function(e) {
      pseudoElementMainLink.forEach(element => {
        element.classList.remove('active');
      });
      element.classList.add('active');
    });
  });

