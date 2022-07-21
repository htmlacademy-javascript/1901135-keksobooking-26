import {showOfferPopup} from './map.js';
import {showErrorServerPopup} from './user_modals.js';
import {getData} from './fetch.js';
import {setFilterChange,debounce} from './util.js';
import {filterMap} from './filter.js';
import './upload-file.js';

// Получение и отрисовка обьявлений с сервера
getData((data) => {
  showOfferPopup(data);
  setFilterChange(debounce(() => filterMap(data)));
},showErrorServerPopup);
