export {getData,sendData};

const addressForGet = 'https://26.javascript.pages.academy/keksobooking/data';
const addressForPost = 'https://26.javascript.pages.academy/keksobooking';

const getData = (resolve,reject) => {
  fetch(addressForGet)
    .then(res => {
      if (!res.ok) {
        reject();
      }
      return res.json();
    })
    .then(ads => {
      resolve(ads)
    }
  );
};

const sendData = (resolve, reject, data) => {
  const sendButton = document.querySelector('.ad-form__submit')
  fetch(addressForPost,
    {
      method: 'POST',
      body: data,
    })
    .then((res) => {
      if (!res.ok) {
        reject();
      } else {
        resolve();
      }
    }
  )
};
