const hiddenElement = document.querySelectorAll('.hidden');
const buttonModaleWindow = document.querySelector('.header__button');
const modal = document.querySelector('.languages__menu-modal');

buttonModaleWindow.addEventListener('click', (e) => {
  if (modal.classList.contains('modal__hidden')) {
    modal.classList.remove('modal__hidden');
  } else {
    modal.classList.add('modal__hidden');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

hiddenElement.forEach((el) => observer.observe(el));
