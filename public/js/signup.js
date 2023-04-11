const button = document.getElementById("signup");
const form = document.querySelector('form');
const signupSchema = require('../../server/utils/validation/signupSchema')

signupSchema.with('password', 'confirmPassword');

button.addEventListener("click", e => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const { error } = schema.validate(data);
  if (error) {
    console.log(error.details);
    return;
  }

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const role = document.getElementById("role").value;
  const mobile = document.getElementById("mobile").value;



  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      username,
      email,
      password,
      confirmPassword,
      role,
      mobile
    })
  })
    .then(response => response.json())
    .then(res => console.log("response", res))
    .catch(err => console.log(err));
});


form.addEventListener('submit', e => {
  e.preventDefault();
});