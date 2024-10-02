/*
 * Паттерн «Об'єкт посилань»
 *
 * Події
 * - focus та blur
 * - input та change, властивість value
 * - Чекбокси та властивість checked
 * - Баттон та властивість disabled
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('input', onInputChange);
// refs.input.addEventListener('change', onInputChange);
// Подію 'change' не використовують для текстових інпутів,
// він використовується для селектів, чекбоксів та радіобаттонів

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('Інпут отримав фокус - подія focus');
}

function onInputBlur() {
  console.log('Інпут втратив фокус - подія blur');
}

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  refs.btn.disabled = !event.currentTarget.checked;
}
