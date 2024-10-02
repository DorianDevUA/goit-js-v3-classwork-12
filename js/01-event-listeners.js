/*
 * Події.
 * - Створення та видалення слухачів
 * - Найменування колбеків для слухачів
 *    - handle*: handleEvent / handleSubjectEvent
 *    - *Handler: eventHandler / subjectEventHandler
 *    - on*: onEvent / onSubjectEvent
 * - Посилальна ідентичність колбеків
 * - Об'єкт події
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Вішаю слухача подій на цільову кнопку');

  targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Знімаю слухача подій з цільової кнопки');

  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log(event);
  console.log('Клік по цільовій кнопці');
}
