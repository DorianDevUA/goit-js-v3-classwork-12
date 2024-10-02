/*
 * Події миші
 * - mouseenter и mouseleave (це ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - балакуча подія)
 * - Додаткові матеріали по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хороша задача - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box--active');
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('box--active');
}

function onMouseMove(event) {
  console.log(event);
}
