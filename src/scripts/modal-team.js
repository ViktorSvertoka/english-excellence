const teamLink = document.querySelector('.footer__link');
const teamBackdrop = document.querySelector('.team__backdrop');
const teamCloseBtn = document.querySelector('.team__modal-close-btn');

function onLinkClick(event) {
  event.preventDefault();

  teamBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');

  addAllEventListeners();
}

function onEscClick(event) {
  event.preventDefault();

  if (event.code !== 'Escape') {
    return;
  }

  closingModalStaff();
}

function onBackdropClick(event) {
  if (event.target.closest('.team__wrapper')) {
    return;
  }

  closingModalStaff();
}

function onCloseBtnClick(event) {
  event.preventDefault();

  closingModalStaff();
}

function addAllEventListeners() {
  document.addEventListener('keydown', onEscClick);
  teamBackdrop.addEventListener('click', onBackdropClick);
  teamCloseBtn.addEventListener('click', onCloseBtnClick);
}

function closingModalStaff() {
  document.removeEventListener('keydown', onEscClick);
  teamBackdrop.removeEventListener('click', onBackdropClick);
  teamCloseBtn.removeEventListener('click', onCloseBtnClick);

  teamBackdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}

teamLink.addEventListener('click', onLinkClick);
