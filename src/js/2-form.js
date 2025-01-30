const form = document.querySelector('.feedback-form');

const formData = { email: "", message: "" };

const localStorageKey = "feedback-form-state";

document.addEventListener('DOMContentLoaded', () => {
  const savedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (savedData) {
    document.getElementById('email').value = formData.email;
    document.getElementById('message').value = formData.message;
      formData.email = savedData.email || '';
      formData.message = savedData.message || '';
  }
});

form.addEventListener('input', evt => {
    const emailInput = document.getElementById('email').value 
    formData.email = emailInput;
    
    const messageInput = document.getElementById('message').value 
    formData.message = messageInput;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
  } else {
    console.log(formData);

    localStorage.removeItem(localStorageKey);

    formData.email = "";
    formData.message = "";

    form.reset();
  }
});




