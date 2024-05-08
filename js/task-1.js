const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ` + categoriesItems.length);

categoriesItems.forEach(item => {
  const titleEl = item.querySelector('h2');
  const itemsEl = item.querySelectorAll('li');
  console.log('Category: ' + titleEl.textContent);
  console.log('Elements: ' + itemsEl.length);
});
