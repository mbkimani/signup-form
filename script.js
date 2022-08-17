const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");
  if (password.value !== confirmPassword.value) {
    password.className = "error";
    confirmPassword.className = "error";
    console.log(password.value, confirmPassword.value);
  }
});
