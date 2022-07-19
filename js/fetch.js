export {getData,sendData};

const addressForGet = 'https://26.javascript.pages.academy/keksobooking/data';
const addressForPost = 'https://26.javascript.pages.academy/keksobooking';

const getData = (resolve) => {
  fetch(addressForGet)
    .then(res => {
      if (!res.ok) {
        throw new Error('error');
      }
      return res.json();
    })
    .then(ads => {
      resolve(ads)
    }
  );
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
    }
  )
};
