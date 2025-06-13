const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePass = document.querySelector('.toggle-pass');
const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('login-form');
const alertBox = document.getElementById('alert');

togglePass.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
});

function validate() {
  const emailValid = emailInput.validity.valid;
  const passwordValid = passwordInput.value.length >= 8;
  submitBtn.disabled = !(emailValid && passwordValid);
}

emailInput.addEventListener('input', validate);
passwordInput.addEventListener('input', validate);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log({ email: emailInput.value, password: passwordInput.value });
  showAlert('Logged in!');
  form.reset();
  validate();
});

function showAlert(msg) {
  alertBox.textContent = msg;
  alertBox.hidden = false;
  requestAnimationFrame(() => alertBox.classList.add('visible'));
  setTimeout(() => {
    alertBox.classList.remove('visible');
    alertBox.addEventListener('transitionend', () => alertBox.hidden = true, { once: true });
  }, 2000);
}

document.querySelector('.google-btn').addEventListener('click', () => {
  console.log('Google');
});

document.querySelector('.github-btn').addEventListener('click', () => {
  console.log('GitHub');
});
