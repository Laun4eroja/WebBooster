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

const accordeon = document.querySelectorAll('.accordeon');
const accordeonTitles = document.querySelectorAll('.accordeon__item-title');

accordeonTitles.forEach.call(accordeonTitles, function(accordeonTitle) {
  accordeonTitle.addEventListener('click', function() {
      const currentText = accordeonTitle.parentElement.querySelector('.accordeon__item-text');

      accordeonTitle.classList.toggle('accordeon__item-title--active');
      currentText.classList.toggle('accordeon__item-text--visible');

      if(currentText.classList.contains('accordeon__item-text--visible')) {
        currentText.style.maxHeight = currentText.scrollHeight + 55 + 'px'
      } else {
        currentText.style.maxHeight = null
      }

  });
});