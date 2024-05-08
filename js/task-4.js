const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputRefs = [...this.elements].filter(
    node => node.nodeName === 'INPUT'
  );

  const isValid = inputRefs.every(node => !!node.value);

  if (!isValid) {
    return alert('All form fields must be filled in');
  }

  // not scalable solution
  // const formData = {
  //   email: this.elements.email.value,
  //   password: this.elements.password.value,
  // };

  const formData = inputRefs.reduce(
    (acc, node) => ({ ...acc, [node.name]: node.value }),
    {}
  );

  console.log(formData);
  this.reset();
});
