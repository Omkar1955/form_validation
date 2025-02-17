document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get input values
  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Reset previous errors
  document.querySelectorAll(".text-danger").forEach(el => el.innerText = "");

  let valid = true;

  // Validate Full Name (At least 5 characters)
  if (fullName.length < 5) {
      document.getElementById("nameError").innerText = "Name must be at least 5 characters";
      valid = false;
  }

  // Validate Email (Must contain '@')
  if (!email.includes("@")) {
      document.getElementById("emailError").innerText = "Enter a valid email";
      valid = false;
  }

  // Validate Phone Number (Must be 10 digits & not '1234567890')
  if (phone.length !== 10 || phone === "1234567890" || isNaN(phone)) {
      document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number";
      valid = false;
  }

  // Validate Password (At least 8 characters, not 'password' or user's name)
  if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
      document.getElementById("passwordError").innerText = "Password must be at least 8 characters and should not be common";
      valid = false;
  }

  // Confirm Password (Must match Password)
  if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
      valid = false;
  }

  // If valid, show success message
  if (valid) {
      alert("Form submitted successfully!");
      document.getElementById("myForm").reset();
  }
});
