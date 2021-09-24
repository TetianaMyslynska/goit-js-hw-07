/*elem.style.backgroundColor = `#${Math.random().toString(16).slice(3, 9)}`;
 */
const inputEl = document.querySelector('input["number"]');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxDiv = document.querySelector('#boxes');
const boxesArray = [];

renderBtn.addEventListener('click', onRenderBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);
function onRenderBtnClick((event) => {
  if (event.target.value = boxesArray.length) {
    boxDiv.innerHTML = 'width = 30px height = 30px';
    boxesArray.fill(boxDiv, 1, boxesArray.length);
    boxesArray.forEach((box) => {
      box.reduce()
    }
    }
})

function onDestroyBtnClick(event) {
  event.target.value = '';
}