function validateEmail() {
  const emailInput = document.querySelector('.email-input');
  const emailError = document.querySelector('.error-message');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput.value)) {
    
    emailError.innerHTML = ""; // Clear error message
  } else {
    emailError.innerHTML = "Please check your email";
  }
}

const btn = document.querySelector('.submit-btn');
btn.addEventListener('click', validateEmail)