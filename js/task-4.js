const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputRefs = [...this.elements].filter(
    node => node.nodeName === 'INPUT'
  );

  const isValid = inputRefs.every(node => !!node.value.trim());

  if (!isValid) {
    return alert('All form fields must be filled in');
  }

  // not scalable solution
  // const formData = {
  //   email: this.elements.email.value.trim(),
  //   password: this.elements.password.value.trim(),
  // };

  const formData = inputRefs.reduce((acc, node) => {
    const name = node.name.trim();
    const value = node.value.trim();
    return { ...acc, [name]: value };
  }, {});

  console.log(formData);
  this.reset();
});
