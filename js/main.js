import {showOfferPopup} from './map.js';
import {showErrorServerPopup} from './user_modals.js';
import {getData} from './fetch.js';
import {setFilterChange,debounce,clearForm} from './util.js';
import {filterMap} from './filter.js';
import './upload-file.js';

const clearButton = document.querySelector('.ad-form__reset');

// Получение и отрисовка обьявлений с сервера
const showData = () => {
  getData((data) => {
    showOfferPopup(data);
    setFilterChange(debounce(() => filterMap(data)));
  },showErrorServerPopup);
}

showData()

// Функционал кнопки очистить

clearButton.onclick = () => {
  clearForm();
  showData();
}


