export {createCard};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const fragment = document.createDocumentFragment();
const cardListElement = document.querySelector('#map-canvas');
const typesMatch = {
                    flat:    'Квартира',
                    bungalow:'Бунгало',
                    house:   'Дом',
                    palace:  'Дворец',
                    hotel:   'Отель',
                  };               

function createCard(cardArr) {

  cardArr.forEach((el) => {
    const cardElement = cardTemplate.cloneNode(true);
    
    cardElement.querySelector('.popup__avatar').src = el.author.avatar;
    cardElement.querySelector('.popup__title').textContent = el.offer.title;
    cardElement.querySelector('.popup__text--address').textContent = el.offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${el.offer.price} ₽/ночь`;
    cardElement.querySelector('.popup__type').textContent = typesMatch[el.offer.type];
    cardElement.querySelector('.popup__text--capacity').textContent = `Комнаты ${el.offer.rooms} для гостей ${el.offer.guests}`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${el.offer.checkin}, выезд до ${el.offer.checkout}`;
    cardElement.querySelector('.popup__description').textContent = el.offer.description;

    const featuresList = cardElement.querySelectorAll('.popup__feature');

    featuresList.forEach((featureItem) => {
      if (!el.offer.features.some((feature) => featureItem.classList.contains(`popup__feature--${feature}`))) {
        featureItem.remove();
      }
    });

    const photoList = cardElement.querySelector('.popup__photos');
    const photoElements = photoList.querySelector('.popup__photo');
    photoList.innerHTML = ''; 
    el.offer.photos.forEach((photo) => {
      const photoElement = photoElements.cloneNode(true);
      photoElement.src = photo;
      photoList.append(photoElement);
    })

    fragment.append(cardElement);
  });

  return cardListElement.append(fragment.children[0]);
}
