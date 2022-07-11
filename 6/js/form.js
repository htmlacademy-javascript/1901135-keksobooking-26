export {toggleFormStatus}

const form = document.querySelector('.ad-form');
const formFieldsetsList = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.querySelectorAll('select, fieldset');

function toggleActiv(arr, status) {
  arr.forEach(el => el.disabled = status)
}

function toggleFormStatus(status) {
  status ? form.classList.add(`${form.classList[0]}--disabled`) : form.classList.remove(`${form.classList[0]}--disabled`)
  status ? mapFilters.classList.add(`${mapFilters.classList[0]}--disabled`) : mapFilters.classList.remove(`${mapFilters.classList[0]}--disabled`)
  toggleActiv(formFieldsetsList, status);
  toggleActiv(mapFiltersList, status);
};
