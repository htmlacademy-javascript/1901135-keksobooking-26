const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const typesMatch = {
  flat:    'Квартира',
  bungalow:'Бунгало',
  house:   'Дом',
  palace:  'Дворец',
  hotel:   'Отель',
};

const createCard = (el) => {

  const cardElement = cardTemplate.cloneNode(true);
  const featuresList = cardElement.querySelectorAll('.popup__feature');
  const photoList = cardElement.querySelector('.popup__photos');
  const photoElements = photoList.querySelector('.popup__photo');

  cardElement.querySelector('.popup__avatar').src = el.author.avatar;
  cardElement.querySelector('.popup__title').textContent = el.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = el.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${el.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = typesMatch[el.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `Комнаты ${el.offer.rooms} для гостей ${el.offer.guests}`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${el.offer.checkin}, выезд до ${el.offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = el.offer.description;

  featuresList.forEach((featureItem) => {
    if (el.offer.features && !el.offer.features.some((feature) => featureItem.classList.contains(`popup__feature--${feature}`))) {
      featureItem.remove();
    }
  });

  photoList.innerHTML = '';

  if (el.offer.photos) {
    el.offer.photos.forEach((photo) => {
      const photoElement = photoElements.cloneNode(true);
      photoElement.src = photo;
      photoList.append(photoElement);
    });
  }

  return cardElement;
};

export {createCard};
