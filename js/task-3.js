const inputEl = document.getElementById('name-input');
const msgContainer = document.getElementById('name-output');
const msgDefault = msgContainer.textContent;

inputEl.addEventListener('input', function () {
  this.value = this.value.trim();
  msgContainer.textContent = !!this.value ? this.value : msgDefault;
});

// without change input value
// inputEl.addEventListener('input', e => {
//   const value = e.target.value.trim();
//   msgContainer.textContent = !!value ? value : msgDefault;
// });
