const inputEl = document.querySelector("#validation-input");
const dataLength = document.querySelector('[data-length="6"]');

inputEl.addEventListener("blur", onInputBlur);

function addClassInput(a, r) {
  inputEl.classList.add(a);
  inputEl.classList.remove(r);
}
function onInputBlur(event) {
  const inputText = event.target.value;
  if (inputText.length == dataLength) {
    addClassInput("valid", "invalid");
  } else {
    addClassInput("invalid", "valid");
  }
}
