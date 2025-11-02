const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObj = {};

    formData.forEach((value, key) => formObj[key] = value);

    console.log(formObj);
})