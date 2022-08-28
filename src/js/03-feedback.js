//Module import
import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const textAreaEl = document.querySelector('textarea');
const inputEl = document.querySelector('input');

const STORAGE_KEY = 'feedback-form-state';
//Initialisation of object for setting data to local storage
let formLocalData = {};
//Setting current (unsubmitted) data to form elements
setCurrentData();

//Addimg listeners
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));
// textAreaEl.addEventListener('input', throttle(onTextAreaInput, 500));

// Modifiying object to JSON forrmat
function toJSONStingify(objectToJSON) {
  let stingifiedFormLocalData = JSON.stringify(objectToJSON);
  localStorage.setItem(STORAGE_KEY, stingifiedFormLocalData);
}
//Adding email to object formLocalData
function onFormInput(event) {
  formLocalData[event.target.name] = event.target.value;
  toJSONStingify(formLocalData);
}

//Getting current data from local storage and setting it to form elements
function setCurrentData() {
  if (localStorage.getItem(STORAGE_KEY)) {
    formLocalData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(formLocalData.email);
    if (formLocalData.email) {
      formEl.email.value = formLocalData.email;
    }
    ('');
    if (formLocalData.message) {
      formEl.message.value = formLocalData.message;
    }
    ('');
  }
}
//Cleaning from after submit event
function onFormSubmit(event) {
  event.preventDefault();
  if (inputEl.value !== '' && textAreaEl.value !== '') {
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.clear();
    formLocalData = {};
  } else alert('Please, fill both fields');
}
