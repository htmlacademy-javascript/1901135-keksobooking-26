export {showSuccessPopup,showErrorPopup}


// Успешная отправка формы
const successPopup = document.querySelector('#success').content.querySelector('.success');
const cardElementSuccess = successPopup.cloneNode(true);

function showSuccessPopup() {
  document.querySelector('body').append(cardElementSuccess);
  cardElementSuccess.onclick = () => cardElementSuccess.remove()
  document.addEventListener("keydown", function (e) {
    if (e.code === 'Escape') {
      cardElementSuccess.remove()
    }
  })
}

// Ошибка отправки формы
const errorPopup = document.querySelector('#error').content.querySelector('.error');
const cardElementError = errorPopup.cloneNode(true);

function showErrorPopup() {
  document.querySelector('body').append(cardElementError);
  cardElementError.onclick = () => cardElementError.remove()
  document.addEventListener("keydown", function (e) {
    if (e.code === 'Escape') {
      cardElementError.remove()
    }
  })
}

