// Успешная отправка формы
const successPopup = document.querySelector('#success').content.querySelector('.success');
const cardElementSuccess = successPopup.cloneNode(true);

const showSuccessPopup = () => {
  document.querySelector('body').append(cardElementSuccess);
  cardElementSuccess.onclick = () => cardElementSuccess.remove();
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      cardElementSuccess.remove();
    }
  });
  document.querySelector('.ad-form').reset();
  document.querySelector('.map__filters').reset();
}

// Ошибка отправки формы
const errorPopup = document.querySelector('#error').content.querySelector('.error');
const cardElementError = errorPopup.cloneNode(true);

const showErrorPopup = () => {
  document.querySelector('body').append(cardElementError);
  cardElementError.onclick = () => cardElementError.remove();
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      cardElementError.remove();
    }
  });
}

// Ошибка загрузки данных с сервера
const serverErrorPopup = document.querySelector('#server-error').content.querySelector('.error-server');
const cardElementServerError = serverErrorPopup.cloneNode(true);

const showErrorServerPopup = () => {
  document.querySelector('#map-canvas').append(cardElementServerError);
}

export {showSuccessPopup,showErrorPopup,showErrorServerPopup};
