const form = document.querySelector('.feedback-form');

const localStorageKey = "feedback-form-state";

const formData = { email: "", message: "" };

const saveToLocalStorage = () => {
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

document.addEventListener('DOMContentLoaded', () => {
  
  if (!form) return;
    
    const emailInput = form.elements.email;
    const messageInput = form.elements.message;
  
    const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    
    formData.email = savedData.email || '';
    formData.message = savedData.message || '';
    
    emailInput.value = formData.email;
    messageInput.value = formData.message;
});

form?.addEventListener('input', evt => {
    if (evt.target.name in formData) {
    formData[evt.target.name] = evt.target.value.trim();
    saveToLocalStorage();
  }
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log("Submitted data:", formData);

  localStorage.removeItem(localStorageKey);
  
  Object.keys(formData).forEach(key => formData[key] = "");

  form.reset(); 
});




