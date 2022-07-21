const slider = document.querySelector('.ad-form__slider');
const priceField = document.querySelector('#price');

const createSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 10000,
    },
    start: 0,
    step: 1,
    connect: 'lower',
    format: {
      to: (value) => value.toFixed(0),
      from: (value) => parseFloat(value),
    },
  });

  slider.noUiSlider.on('update', () => {
    priceField.value = slider.noUiSlider.get();
  });
};

export {createSlider};
