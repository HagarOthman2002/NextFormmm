console.log("hello");
document.querySelector(".page2").style.display = "none";


document.getElementById("nextButton").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "") {
    showError("nameError", "Name is required.");
    return;
  } else {
    clearError("nameError");
  }

  if (email === "") {
    showError("emailError", "Email is required.");
    return;
  } else if (!validateEmail(email)) {
    showError("emailError", "Please enter a valid email address.");
    return;
  } else {
    clearError("emailError");
  }


  document.getElementById("page1").style.display = "none";
  document.querySelector(".page2").style.display = "block";
});


document.getElementById("previousButton").addEventListener("click", function () {
  document.querySelector(".page2").style.display = "none";
  document.getElementById("page1").style.display = "block";
});


document.querySelector(".formSubmit").addEventListener("submit", function (event) {
  event.preventDefault(); 
  const age = document.getElementById("age").value.trim();
  const school = document.getElementById("school").value.trim();

  let isValid = true;

  if (age === "" || isNaN(age) || age <= 0) {
    showError("ageError", "Please enter a valid age.");
    isValid = false;
  } else {
    clearError("ageError");
  }


  if (school === "") {
    showError("schoolError", "School name is required.");
    isValid = false;
  } else {
    clearError("schoolError");
  }


  if (isValid) {
    alert("Form submitted successfully!");

  }
});


document.getElementById("age").addEventListener("blur", function () {
  if (this.value.trim() !== "" && !isNaN(this.value.trim()) && this.value.trim() > 0) {
    clearError("ageError");
    this.style.border = "1px solid green";
  } else {
    showError("ageError", "Please enter a valid age.");
    this.style.border = "1px solid red";
  }
});

document.getElementById("school").addEventListener("blur", function () {
  if (this.value.trim() !== "") {
    clearError("schoolError");
    this.style.border = "1px solid green";
  } else {
    showError("schoolError", "School name is required.");
    this.style.border = "1px solid red";
  }
});


function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.color = "red";
}

function clearError(elementId) {
  document.getElementById(elementId).textContent = "";
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
