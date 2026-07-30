import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/inputmask.min.js";
import "./modules/bootstrap.bundle.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
  closeExisting: true, // Автоматически закроет старые окна при открытии нового
});

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask({
  mask: '+7 (999) 999-99-99',
  onBeforeWrite: function (event, buffer, caretPos, opts) {
    // console.log(caretPos);
    // Проверяем:
    // 1. Позиция каретки (caretPos) равна 5 (вторая цифра в "99")
    // 2. Нажата клавиша "8"
    if (caretPos === 5 && event.key === '8') {
      event.preventDefault(); // Запрещаем ввод     
      console.log("Ввод 8 в этой позиции запрещен!");
      return {
        refreshFromBuffer: true,
        buffer: [],
        caret: 4
      };
    }
  },
  onBeforePaste: function (pastedValue, opts) {
    // Удаляем всё, кроме цифр
    var processedValue = pastedValue.replace(/\D/g, "");

    // Если первая цифра 7 или 8 и в строке 11 цифр, убираем первую
    if (processedValue.length === 11 && (processedValue[0] === '7' || processedValue[0] === '8')) {
      return processedValue.substring(1);
    }

    return pastedValue;
  }

});

im.mask(inputs);

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// search clear
let searchInputArray = document.querySelectorAll('.formInput--search');
searchInputArray.forEach(el => {
  let clearValue = el.closest('.searchField').querySelector('.search-clear');
  // console.log(clearValue);
  el?.addEventListener('input', (event) => {
    clearValue.classList.add('active');
  });

  clearValue?.addEventListener('click', () => {
    el.value = '';
    el.focus();
    clearValue.classList.remove('active');
  });
});

const mediaQueryMax991 = window.matchMedia('(max-width: 991px)');
const mediaQueryMin992 = window.matchMedia('(min-width: 992px)');
if (mediaQueryMin992.matches) {
  // Инициализация слайдера introAdvSlider
  const introAdvSlider = document.querySelector('.introAdvSlider');
  var mySwiperIntroAdv = new Swiper(introAdvSlider, {
    slidesPerView: 3,
    speed: 600,
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false, // Не останавливать после клика
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}


// Инициализация слайдера introSlider
const introSlider = document.querySelector('.introSlider');
var mySwiperIntro = new Swiper(introSlider, {
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  pagination: {
    el: introSlider?.querySelector('.swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

// Инициализация слайдера catSlider
const catSlider = document.querySelector('.catSlider');
var mySwiperCat = new Swiper(catSlider, {
  slidesPerView: 2,
  speed: 600,
  spaceBetween: 20,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false, // Не останавливать после клика
  // },
  navigation: {
    prevEl: catSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: catSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    576: {
      spaceBetween: 10,
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      spaceBetween: 20,
    }
  },
});

// Инициализация слайдера catalogSlider
document.querySelectorAll('.catalogSlider').forEach(n => {
  const mySwiperServices = new Swiper(n, {
    slidesPerView: 5,
    spaceBetween: 24,
    speed: 600,
    autoplay: false,
    navigation: {
      prevEl: n?.closest('.sliderW').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.sliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });
});

// Инициализация слайдера aboutSlider
const aboutSlider = document.querySelector('.aboutSlider');
var mySwiperAbout = new Swiper(aboutSlider, {
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  pagination: {
    el: aboutSlider?.querySelector('.swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

// Инициализация слайдера reviewsSlider
const reviewsSlider = document.querySelector('.reviewsSlider');
var mySwiperReviews = new Swiper(reviewsSlider, {
  slidesPerView: 4,
  speed: 600,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  navigation: {
    prevEl: reviewsSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: reviewsSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Инициализация слайдера newsSlider
const newsSlider = document.querySelector('.newsSlider');
var mySwiperNews = new Swiper(newsSlider, {
  slidesPerView: 3,
  speed: 600,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  navigation: {
    prevEl: newsSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: newsSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Инициализация слайдера clientsSlider
const clientsSlider = document.querySelector('.clientsSlider');
var mySwiperClients = new Swiper(clientsSlider, {
  slidesPerView: 6,
  speed: 600,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  navigation: {
    prevEl: clientsSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: clientsSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
});

$('.filterItemHead').click(function () {
  $(this).toggleClass('active');
  $(this).siblings('.filterItemBody').slideToggle();
});

$('.modelItemHead').click(function () {
  $(this).toggleClass('active');
  $(this).siblings('.modelItemBody').slideToggle();
});


let detailNumArray = document.querySelectorAll('.detailNum');
let catalogCardRowDetail = document.querySelectorAll('.catalogCardRow--detail');

detailNumArray.forEach(el => {
  el.addEventListener('click', () => {
    detailNumArray.forEach(nums => {
      nums.classList.remove('active');
    });
    catalogCardRowDetail.forEach(cardRows => {
      cardRows.classList.remove('active');
    });
    catalogCardRowDetail.forEach(detailRow => {
      if (detailRow.dataset.count == el.dataset.count) {
        el.classList.add('active');
        detailRow.classList.add('active');
      }
    });
  });
});

let headerCartBtn = document.querySelector('.headerCartBtn');
let headerCartMenu = document.querySelector('.headerCartMenu');

headerCartBtn.addEventListener('click', () => {
  headerCartMenu.classList.toggle('active');
});


// catalog menu show
const navLinks = document.querySelectorAll('.headerCatalogNav--inner .headerCatalogNavLink');
const menuContents = document.querySelectorAll('.headerCatalogContent');
let headerCatalogClose = document.querySelector('.headerCatalogClose');

navLinks.forEach(link => {

  if (mediaQueryMin992.matches) {
    link.addEventListener('mouseenter', () => {
      const target = link.getAttribute('data-menu');

      // 1. Скрываем все контентные блоки
      menuContents.forEach(content => {
        content.style.display = 'none';
      });

      // 2. Находим и показываем нужный блок
      const activeMenu = document.querySelector(`.headerCatalogContent[data-menu="${target}"]`);
      if (activeMenu) {
        activeMenu.style.display = 'grid';
      }
    });
  }
  if (mediaQueryMax991.matches) {
    const target = link.getAttribute('data-menu');
    const activeMenu = document.querySelector(`.headerCatalogContent[data-menu="${target}"]`);
    const prevMenu = activeMenu.querySelector('.headerCatalogContentPrev');
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (activeMenu) {
        activeMenu.style.display = 'block';
      }
    });
    prevMenu?.addEventListener('click', (e) => {
      activeMenu.style.display = 'none';
    });
  }
});

// Опционально: скрыть меню, если мышь ушла из всей области навигации
// Добавьте класс-обертку вокруг nav и contents, например .catalog-wrapper
const headerCatalogMenu = document.querySelector('.headerCatalog');
if (mediaQueryMin992.matches) {
  if (headerCatalogMenu) {
    headerCatalogMenu.addEventListener('mouseleave', () => {
      menuContents.forEach(content => content.style.display = 'none');
    });
  }
}

const headerCatalogBtn = document.querySelector('.headerCatalogBtn');
const headerCatalogBtnSvg = document.querySelector('.headerCatalogBtn svg use');

const isVisible = headerCatalogBtn.classList.contains('active');
let timer;

// Функция открытия/закрытия
const toggleMenu = () => {
  headerCatalogBtn.classList.toggle('active');
  headerCatalogMenu.classList.toggle('active');
  if (headerCatalogBtn.classList.contains('active')) {
    headerCatalogBtnSvg.setAttribute('xlink:href', 'img/icons/icons.svg#close');
  } else {
    headerCatalogBtnSvg.setAttribute('xlink:href', 'img/icons/icons.svg#catalog');
  }
};

// Клик по кнопке
headerCatalogBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Чтобы клик не срабатывал сразу на документе
  toggleMenu();
});

if (mediaQueryMin992.matches) {
  // Уход мыши из меню
  headerCatalogMenu.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      headerCatalogBtn.classList.remove('active');
      headerCatalogMenu.classList.remove('active');
      headerCatalogBtnSvg.setAttribute('xlink:href', 'img/icons/icons.svg#catalog');
    }, 500); // Задержка 1 секунда
  });

  // Возврат мыши в меню (отмена скрытия)
  headerCatalogMenu.addEventListener('mouseenter', () => {
    clearTimeout(timer);
  });
}

let navBarCatalogBtn = document.querySelector('.navBarCatalogBtn');

navBarCatalogBtn.addEventListener('click', (e) => {
  e.preventDefault();
  headerCatalogMenu.classList.toggle('active');
  navBarCatalogBtn.closest('li').classList.toggle('active');
  bodyEl.classList.toggle('hidden');
});

headerCatalogClose?.addEventListener('click', () => {
  headerCatalogMenu.classList.remove('active');
  bodyEl.classList.remove('hidden');
  navBarCatalogBtn.closest('li').classList.remove('active');
});


// Burger
const btnMenu = document.querySelector('#toggle');
// const searchMenuBtnAll = document.querySelectorAll('.searchMobileAction');
const menu = document.querySelector('.headerMainMobile');
// const searchMenu = document.querySelector('.headerSearchMobile');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerMainMobileClose');
// const searchClose = document.querySelector('.headerSearchMobileClose');

const toggleMobileMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMobileMenu();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMobileMenu();
  toggleBurger();
  bodyOverflow();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});

let headerMobileSearchW = document.querySelector('.headerMobileSearchW');
let headerSearchBtn = document.querySelector('.headerSearchBtn');
let headerMainMobileSearchBtn = document.querySelector('.headerMainMobileSearchBtn');
let headerSearchBtnClose = document.querySelector('.headerMobileSearchBack');

const headerMobileSearchToggle = function () {
  headerMobileSearchW.classList.toggle('active');
}

headerSearchBtn?.addEventListener('click', () => {
  headerMobileSearchToggle();
  bodyOverflow();
});
headerMainMobileSearchBtn?.addEventListener('click', () => {
  headerMobileSearchToggle();
  bodyOverflow();
});

headerSearchBtnClose?.addEventListener('click', () => {
  headerMobileSearchToggle();
  bodyOverflow();
});


// mobile header
if (window.innerWidth < 992) {
  let lastScrollY = window.scrollY;
  const headerb = document.querySelector('.headerB');
  const scrollThreshold = 10; // порог, чтобы не дёргалось от мелких скроллов

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
      return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > headerb.offsetHeight) {
      // скролл вниз — прячем
      headerb.classList.add('header--hidden');
    } else {
      // скролл вверх — показываем
      headerb.classList.remove('header--hidden');
    }

    lastScrollY = currentScrollY;
  });
}

const loadMoreButtons = document.querySelectorAll('.catalogCatLoadMore');

loadMoreButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    // Находим родительский контейнер
    const parent = this.closest('.catalog-tags-action');
    if (!parent) return;

    // Находим список и span с текстом внутри этого родителя
    const tagsList = parent.querySelector('.catalog-tags');
    const btnSpan = this.querySelector('span');

    // Переключаем класс .active у списка
    tagsList.classList.toggle('active');

    // Меняем текст в зависимости от наличия класса
    if (tagsList.classList.contains('active')) {
      btnSpan.textContent = 'Свернуть';
    } else {
      btnSpan.textContent = 'Показать полностью';
    }
  });
});

// sidebar catalog show mobile
let catalogMobFilterBtn = document.querySelector('.catalogMobFilterBtn');
let catalogSidebar = document.querySelector('.catalog-sidebar');
let catalogSidebarClose = document.querySelector('.filterBtnClose');

catalogMobFilterBtn?.addEventListener('click', () => {
  catalogSidebar.classList.add('active');
  bodyEl.classList.add('hidden');
});

catalogSidebarClose?.addEventListener('click', () => {
  catalogSidebar.classList.remove('active');
  bodyEl.classList.remove('hidden');
});