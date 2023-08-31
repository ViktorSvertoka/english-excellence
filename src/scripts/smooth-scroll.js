const anchors = document.querySelectorAll('a[href*="#"]');
const buttons = document.querySelectorAll('.scroll-button'); // Предположим, у вас есть кнопки с классом 'scroll-button'

function scrollToTarget(element, targetId) {
  element.preventDefault();

  document.getElementById(targetId).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

for (let anchor of anchors) {
  anchor.addEventListener('click', function (element) {
    const blockID = anchor.getAttribute('href').substr(1);
    scrollToTarget(element, blockID);
  });
}

for (let button of buttons) {
  button.addEventListener('click', function (element) {
    const targetId = button.getAttribute('data-target'); // Предположим, вы используете атрибут 'data-target' для указания целевого элемента
    scrollToTarget(element, targetId);
  });
}
