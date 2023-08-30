const useElement = document.querySelector('.menu-open__use');

// Функция для обработки изменения медиа-запроса
function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    useElement.setAttribute('xlink:href', './sprite.svg#icon-menu');
  } else {
    useElement.setAttribute('xlink:href', './sprite.svg#icon-menu-mini');
  }
}

// Создаем медиа-запрос для разрешения более 768px
const mediaQuery = window.matchMedia('(min-width: 768px)');

// Изменяем ссылку при загрузке страницы и при изменении размера окна
handleMediaChange(mediaQuery);
mediaQuery.addEventListener('change', handleMediaChange);
