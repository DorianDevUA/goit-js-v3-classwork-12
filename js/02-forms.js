/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 * - Клас FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

// Збираэмо значення полів форми за допомогою FormData при відправленні форми
function onFormSubmit(event) {
  event.preventDefault();

  // Для створення об'єкта FormDatа, що містить дані існуючої форми (<form>),
  // передайте форму як аргумент при створенні об'єкта FormData
  // Примітка: **FormData** буде використовувати лише поля введення, які використовують атрибут name.
  const formData = new FormData(event.currentTarget);
  console.log(formData); // FormData {}

  // Отриманий екземпляр класу FormData (спеціальний ітеруємий об'єкт formData)
  // можна 'розпилити(spread)' у новий масив (перетворюється на масив пар(ключ, значення))
  console.log([...formData]); // [['email', 'Alex@mail.com'], ['password', 'qwerty'], ['subscription', 'basic']];

  // Перетворюємо масив пар(ключ, значення) на звичайний об'єкт зі значеннями полів форми
  const obj = Object.fromEntries([...formData]);
  console.log(obj); // {email: 'Alex@mail.com', password: 'qwerty', subscription: 'basic'}

  // Також отриманий екземпляр класу FormData, можна перебрати за допомогою спеціального методу .forEach()
  // Важливо не плутати його з одноіменним методом масиву array.prototype.forEach(callback[, thisArg])
  const newObj = {};
  formData.forEach((value, name) => {
    console.log(`FormData.forEach((inputValue, inputName) => {}): ${name}: ${value}`);
    newObj[name] = value;
  });
  // email: Alex@mail.com
  // password: qwerty
  // subscription: basic
  console.log('newObj:', newObj); // {email: 'Alex@mail.com', password: 'qwerty', subscription: 'basic'}
}
