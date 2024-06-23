function setupModal(
  linkSelector,
  backdropSelector,
  closeBtnSelector,
  wrapperSelector
) {
  const link = document.querySelector(linkSelector);
  const backdrop = document.querySelector(backdropSelector);
  const closeBtn = document.querySelector(closeBtnSelector);

  function onLinkClick(event) {
    event.preventDefault();

    backdrop.classList.remove('is-hidden');
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
    if (event.target.closest(wrapperSelector)) {
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
    backdrop.addEventListener('click', onBackdropClick);
    closeBtn.addEventListener('click', onCloseBtnClick);
  }

  function closingModalStaff() {
    document.removeEventListener('keydown', onEscClick);
    backdrop.removeEventListener('click', onBackdropClick);
    closeBtn.removeEventListener('click', onCloseBtnClick);

    backdrop.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
  }

  link.addEventListener('click', onLinkClick);
}

setupModal(
  '.footer__link',
  '.team__backdrop',
  '.team__modal-close-btn',
  '.team__wrapper'
);

setupModal(
  '.footer__text--privacy',
  '.privacy__backdrop',
  '.privacy__modal-close-btn',
  '.privacy__wrapper'
);

setupModal(
  '.footer__text--terms',
  '.terms__backdrop',
  '.terms__modal-close-btn',
  '.terms__wrapper'
);
