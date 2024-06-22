const privacyLink = document.querySelector('.footer-text__privacy');
const privacyBackdrop = document.querySelector('.privacy__backdrop');
const privacyCloseBtn = document.querySelector('.privacy__modal-close-btn');

function onLinkClick(event) {
  event.preventDefault();

  privacyBackdrop.classList.remove('is-hidden');
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
  if (event.target.closest('.privacy__wrapper')) {
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
  privacyBackdrop.addEventListener('click', onBackdropClick);
  privacyCloseBtn.addEventListener('click', onCloseBtnClick);
}

function closingModalStaff() {
  document.removeEventListener('keydown', onEscClick);
  privacyBackdrop.removeEventListener('click', onBackdropClick);
  privacyCloseBtn.removeEventListener('click', onCloseBtnClick);

  privacyBackdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}

privacyLink.addEventListener('click', onLinkClick);
