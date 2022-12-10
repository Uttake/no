
import Swiper from 'swiper/bundle';
const swiperSlider = (() => {
  const accountantInit = new Swiper('.opt__slider', {
    direction: 'vertical',
    loop: true,
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const init = () => {};

  return {
    init,
  };
})();

export default swiperSlider;



  