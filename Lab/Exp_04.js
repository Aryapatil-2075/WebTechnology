function SubmitButton() {
  //get value using DOM
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("psd").value;

  //   document.getElementById("name").innerHTML = "";
  document.getElementById("NameError").innerHTML = "";
  //   document.getElementById("email").innerHTML = "";
  document.getElementById("EmailError").innerHTML = "";
  //   document.getElementById("password").innerHTML = "";
  document.getElementById("PasswordError").innerHTML = "";

  let isValid = true;
  if (name == " ") {
    document.getElementById("NameError").innerHTML = "Name field is required";
    isValid = false;
  }
     else if(email=="")
    {
        document.getElementById("EmailError").innerHTML = "Email field is required";
        isValid = false;
    }
    else if(password=="")
    {
        document.getElementById("PasswordError").innerHTML = "Password field is required";
        isValid = false;
    }
  }
}
