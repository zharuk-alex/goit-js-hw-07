function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector('.change-color').addEventListener('click', () => {
  const { body: bodyEl } = document;
  const spanEl = document.querySelector('span.color');
  const colorHex = getRandomHexColor();

  bodyEl.style.backgroundColor = colorHex;
  spanEl.textContent = colorHex;
  spanEl.style.color = colorHex;
});
