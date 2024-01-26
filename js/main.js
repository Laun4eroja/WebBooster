$(".header__intup-tel").mask("+7(999)999-9999");

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    spaceBetween: 18,

    // Navigation arrows
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });