const termsLink = document.querySelector('.footer__text--terms');
const termsBackdrop = document.querySelector('.terms__backdrop');
const termsCloseBtn = document.querySelector('.terms__modal-close-btn');

function onLinkClick(event) {
  event.preventDefault();

  termsBackdrop.classList.remove('is-hidden');
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
  if (event.target.closest('.terms__wrapper')) {
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
  termsBackdrop.addEventListener('click', onBackdropClick);
  termsCloseBtn.addEventListener('click', onCloseBtnClick);
}

function closingModalStaff() {
  document.removeEventListener('keydown', onEscClick);
  termsBackdrop.removeEventListener('click', onBackdropClick);
  termsCloseBtn.removeEventListener('click', onCloseBtnClick);

  termsBackdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}

termsLink.addEventListener('click', onLinkClick);
