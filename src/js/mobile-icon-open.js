const useElement = document.querySelector('.menu-open__use');

// Функція для обробки зміни медіа-запиту
function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    useElement.setAttribute('xlink:href', './sprite.svg#icon-menu');
  } else {
    useElement.setAttribute('xlink:href', './sprite.svg#icon-menu-mini');
  }
}

// Створюємо медіа-запит для дозволу більше 768px
const mediaQuery = window.matchMedia('(min-width: 768px)');

// Змінюємо посилання при завантаженні сторінки та зміні розміру вікна
handleMediaChange(mediaQuery);
mediaQuery.addEventListener('change', handleMediaChange);
