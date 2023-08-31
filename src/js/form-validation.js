const form = document.getElementById('leaveForm');
const submitButton = document.getElementById('submitButton');
const inputs = form.querySelectorAll('.leave__form-input');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  // Действия при корректно заполненной форме
  // Например, отправка данных на сервер

  // Сбрасываем значения полей формы после успешной отправки
  form.reset();
  // Также сбрасываем стили ошибок и деактивируем кнопку
  inputs.forEach(input => {
    input.classList.remove('error');
  });
  submitButton.setAttribute('disabled', 'true');
});

inputs.forEach(input => {
  input.addEventListener('input', function () {
    if (!input.checkValidity() && input.value.trim() !== '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }

    // Проверяем все обязательные поля на валидность
    const allFieldsValid = Array.from(inputs).every(input =>
      input.checkValidity()
    );

    // Включаем/выключаем кнопку в зависимости от состояния
    if (allFieldsValid) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', 'true');
    }
  });
});
