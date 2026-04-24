document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("passError").innerHTML = "";
  document.getElementById("message").innerHTML = "";

  let valid = true;

  if (name === "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    valid = false;
  }

  if (email === "" || email.indexOf("@") === -1) {
    document.getElementById("emailError").innerHTML = "Enter valid email";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passError").innerHTML =
      "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    document.getElementById("message").innerHTML =
      "Form submitted successfully!";
    document.getElementById("myForm").reset(); // optional: clears form
  }
});
