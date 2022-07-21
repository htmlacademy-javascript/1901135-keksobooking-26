const addressForGet = 'https://26.javascript.pages.academy/keksobooking/data';
const addressForPost = 'https://26.javascript.pages.academy/keksobooking';

const getData = (resolve,reject) => {
  fetch(addressForGet)
    .then((res) => {
      if (!res.ok) {
        reject();
      }
      return res.json();
    })
    .then((res) => {
      resolve(res);
    });
};

const sendData = (resolve, reject, data) => {
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
    });
};

export {getData,sendData};
