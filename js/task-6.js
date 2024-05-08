function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlEl = document.getElementById('controls');
const boxesWrapper = document.getElementById('boxes');
const inputEl = controlEl.querySelector('input[type="number"]');
const minVal = Number(inputEl.getAttribute('min'));
const maxVal = Number(inputEl.getAttribute('max'));

const renderBoxes = amount => {
  const initialBoxSize = 30;
  const boxStepSize = 10;

  let boxesEl = ``;
  for (let index = 0; index < amount; index++) {
    const currentSize = initialBoxSize + index * boxStepSize;
    const color = getRandomHexColor();
    boxesEl += `<div style="width: ${currentSize}px; height: ${currentSize}px; background-color: ${color}"></div>`;
  }

  boxesWrapper.insertAdjacentHTML('afterbegin', boxesEl);
};

const clearResult = () => {
  boxesWrapper.innerHTML = '';
  inputEl.value = null;
};

controlEl.querySelector('button[data-create]').addEventListener('click', () => {
  const { value } = inputEl;
  if (value < minVal || value > maxVal) {
    return;
  }

  clearResult();
  renderBoxes(value);
});

controlEl
  .querySelector('button[data-destroy]')
  .addEventListener('click', clearResult);
