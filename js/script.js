let input = document.querySelector('.search-input')
let inputParent = document.querySelector('.search-block')
document.addEventListener('click', function(e) {
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    const html = document.documentElement;
    if(e.target.closest('.menu-btn') || e.target.closest('.menu-close')) {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        html.classList.toggle('_overflow');
    }
    let search = document.querySelector('.search');
    if(e.target.closest('.search-open')) {
      search.classList.toggle('search-active');
      html.classList.toggle('_overflow');
      input.value = ''
      inputParent.classList.remove('search-visible')
    } else if (search.closest('.search') && !e.target.closest('.search-block') && search.closest('.search-active')) {
      console.log(input);
      search.classList.remove('search-active');
      html.classList.remove('_overflow');
      input.value = ''
      inputParent.classList.remove('search-visible')
    }
    if(e.target.closest('.search-clear')) {
      inputParent.classList.remove('search-visible')
      input.value = ''
    }
})
input.addEventListener('input', function(e) {
  if(!inputParent.closest('.search-visible')) {
    inputParent.classList.add('search-visible')
  }
})
let inputFocus = document.querySelector('.header-end-input');
let inputLupa = document.querySelector('.header-lupa')
inputFocus.addEventListener('focus', function(e) {
  inputLupa.classList.add('header-lupa-active')
})
inputFocus.addEventListener('blur', function(e) {
  inputLupa.classList.remove('header-lupa-active')
})

const swiperIntro = new Swiper('.intro-sliders', {
  speed: 400,
  pagination: {
    el: '.intro-pagination',
    clickable: 'true',
  },
});
const swiperNew = new Swiper('.new-sliders', {
  speed: 400,
  slidesPerView: 3,
  pagination: {
    el: '.new-pagination',
    type: "progressbar",
  },
  navigation: {
    nextEl: '.new-button-next',
    prevEl: '.new-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  }
});