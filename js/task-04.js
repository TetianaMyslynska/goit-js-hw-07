/*const counterValue = document.querySelector("#value");

const increment = () => counterValue.textContent++;

const decrement = () => counterValue.textContent--;

const actions = document.querySelectorAll("#counter button");

actions[0].addEventListener("click", decrement);
actions[1].addEventListener("click", increment);
*/
const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector(
  'button[data-action = "decrement"]'
);
const incrementBtn = document.querySelector(
  'button[data-action = "increment"]'
);
const decrement = () => {
  counterValue.textContent--;
};
const increment = () => {
  counterValue.textContent++;
};
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
