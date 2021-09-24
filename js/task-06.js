const inputEl = document.querySelector("#validation-input");
const dataLength = document.querySelector('[data-length="6"]');

inputEl.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  if (event.target.value == dataLength) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
