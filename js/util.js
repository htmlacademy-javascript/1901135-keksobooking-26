const getGuestsCountName = (val) => {
  const names = ['гостя','гостей','гостей'];
  return names[+val - 1];
}

const setFilterChange = (cb) => {
  const filter = document.querySelector('.map__filters');
  filter.addEventListener('change', () => {
    cb();
  });
}

const debounce = (callback) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), 100);
  };
}

const clearForm = () => {
  document.querySelector('.ad-form').reset();
  document.querySelector('.map__filters').reset();
}

export {getGuestsCountName,setFilterChange,debounce,clearForm};
