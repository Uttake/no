import './scss/style.scss'
import Swiper from 'swiper/bundle';
// import swiperSlider from './js/swiper.js'
import '../node_modules/swiper/'
import 'swiper/swiper-bundle.css'

let autoPlayDelay = 3000;
let progressBar = document.querySelector('.progress')
let currentSlide = document.querySelector('.current')
let totalSlide = document.querySelector('.total')

const mainSwiper = new Swiper('.opt__slider', {
    direction: 'vertical',
    loop: true,
    speed: 600,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  totalSlide.innerHTML = mainSwiper.slides.length - 2
 
  progressBar.addEventListener('animationend', endAnimation)
  mainSwiper.on("slideChange", changeAnimation);
  function endAnimation() {
    mainSwiper.slideNext();
    progressBar.style.animation = "none";
    void progressBar.offsetWidth; 
    progressBar.style.animation = null;
  }
  function changeAnimation() {
    progressBar.style.animation = "none";
    void progressBar.offsetWidth; 
    progressBar.style.animation = null;
    progressBar.style.animationPlayState = "paused";
    currentSlide.textContent = mainSwiper.realIndex + 1
  }
  document.querySelectorAll(".opt__slider, .swiper__progressbar").forEach((item) => {
    item.addEventListener("mouseenter", function () {
      progressBar.style.animationPlayState = "paused";
    });
  });
  document.querySelectorAll(".opt__slider, .swiper__progressbar").forEach((item) => {
    item.addEventListener("mouseleave", function () {
      progressBar.style.animationPlayState = "running";
    });
  });


const aboutSlider = new Swiper('.about__slider', {
  speed: 600,
  grabCursor: true,
  spaceBetween: 20,
  // slideClass: 'slider-item',
  // slideActiveClass: 'slider-item--active',
  initialSlide: 0,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

let aboutTotal = document.querySelector('.total_about')
let currentAbout = document.querySelector('.about_current')
aboutTotal.textContent = aboutSlider.slides.length

aboutSlider.on("slideChange", () => {
  currentAbout.textContent = aboutSlider.realIndex + 1
});
