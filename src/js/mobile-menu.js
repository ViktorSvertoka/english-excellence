// Получаем ссылки на элементы DOM
const openMenuButton = document.querySelector('.js-open-menu');
const closeMenuButton = document.querySelector('.js-close-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const backdrop = document.querySelector('[data-menu-backdrop]');
const menuNavLinks = document.querySelectorAll('.menu__nav-link');

// Функция для открытия мобильного меню
function openMobileMenu() {
  mobileMenu.classList.add('is-open');
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll'); // Добавляем класс, чтобы предотвратить скроллинг фона
}

// Функция для закрытия мобильного меню
function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll'); // Удаляем класс, разрешая скроллинг фона
}

// Обработчик клика на кнопку открытия меню
openMenuButton.addEventListener('click', () => {
  openMobileMenu();
});

// Обработчик клика на кнопку закрытия меню
closeMenuButton.addEventListener('click', () => {
  closeMobileMenu();
});

// Обработчик клика на бекдроп для закрытия меню
backdrop.addEventListener('click', () => {
  closeMobileMenu();
});

// Обработчик клика на элементы меню для перехода к соответствующей секции и закрытия меню
menuNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Прокручиваем к целевой секции
      targetSection.scrollIntoView({ behavior: 'smooth' });
      // Закрываем меню
      closeMobileMenu();
    }
  });
});
