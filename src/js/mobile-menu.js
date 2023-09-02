// Отримуємо посилання на елементи DOM
const openMenuButton = document.querySelector('.js-open-menu');
const closeMenuButton = document.querySelector('.js-close-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const backdrop = document.querySelector('[data-menu-backdrop]');
const menuNavLinks = document.querySelectorAll('.menu__nav-link');

// Функція для відкриття мобільного меню
function openMobileMenu() {
  mobileMenu.classList.add('is-open');
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll'); // Додаємо клас, щоб запобігти скролінгу фону
}

// Функція для закриття мобільного меню
function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll'); // Видаляємо клас, дозволяючи скролінг тла
}

// Обробник кліку на кнопку відкриття меню
openMenuButton.addEventListener('click', () => {
  openMobileMenu();
});

// Обробник кліку на кнопку закриття меню
closeMenuButton.addEventListener('click', () => {
  closeMobileMenu();
});

// Обробник кліка на бекдроп для закриття меню
backdrop.addEventListener('click', () => {
  closeMobileMenu();
});

// Обробник кліку на елементи меню для переходу до відповідної секції та закриття меню
menuNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Прокручуємо до цільової секції
      targetSection.scrollIntoView({ behavior: 'smooth' });
      // Закриваємо меню
      closeMobileMenu();
    }
  });
});
