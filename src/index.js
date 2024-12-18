import { saveFormData } from './formHandler.js';

const form = document.querySelector("#feedback-form");
const successMessage = document.querySelector("#success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const formData = {
    name: event.target.name.value,
    email: event.target.email.value,
    message: event.target.message.value,
  };

  saveFormData(formData);

  successMessage.classList.remove("hidden");

  form.reset();

  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 3000);
});