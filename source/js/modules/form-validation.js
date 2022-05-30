const inputFields = document.querySelectorAll('input:not(input[type="checkbox"])');
const inputTel = document.querySelector('input[type="tel"]');

// local storage

inputFields.forEach((inputField) => {
  const key = inputField.id;
  inputField.value = localStorage.getItem(key);
  inputField.addEventListener('input', () => {
    localStorage.setItem(key, inputField.value);
  });
});

// only number tel input

inputTel.addEventListener('input', () => {
  inputTel.value = inputTel.value.replace(/[^\d\+]/g, '');
});
