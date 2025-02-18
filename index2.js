const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const formSubmit = document.querySelector(".formSubmit");

const nameField = document.getElementById("name");
const secondNameField = document.getElementById("secondName");
const emailField = document.getElementById("email");
const ageField = document.getElementById("age");
const schoolField = document.getElementById("school");

const nameError = document.getElementById("nameError");
const secondNameError = document.getElementById("secondNameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const schoolError = document.getElementById("schoolError");

const page1 = document.getElementById("page1");
const page2 = document.querySelector(".page2");


nextButton.addEventListener("click", function () {
  const name = nameField.value.trim();
  const secondName = secondNameField.value.trim();

  let isValid = true;


  if (name === "") {
    showError(nameError, "Name is required.");
    isValid = false;
  } else {
    clearError(nameError);
  }

  if (secondName === "") {
    showError(secondNameError, "Second Name is required.");
    isValid = false;
  } else {
    clearError(secondNameError);
  }


  if (isValid) {
    page1.style.display = "none"; 
    page2.style.display = "block"; 


    prevButton.style.display = "block";
  }
});


prevButton.addEventListener("click", function () {
  page2.style.display = "none";
  page1.style.display = "block"; 

 
  nextButton.style.display = "block";
  prevButton.style.display = "none"; 
});


formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailField.value.trim();
  const age = ageField.value.trim();
  const school = schoolField.value.trim();

  let isValid = true;


  if (email === "") {
    showError(emailError, "Email is required.");
    isValid = false;
  } else if (!validateEmail(email)) {
    showError(emailError, "Please enter a valid email address.");
    isValid = false;
  } else {
    clearError(emailError);
  }


  if (age === "" || isNaN(age) || age <= 0) {
    showError(ageError, "Please enter a valid age.");
    isValid = false;
  } else {
    clearError(ageError);
  }


  if (school === "") {
    showError(schoolError, "School name is required.");
    isValid = false;
  } else {
    clearError(schoolError);
  }


  if (isValid) {
    alert("Form submitted successfully!");
 
  }
});


function showError(element, message) {
  element.textContent = message;
  element.style.color = "red";
}


function clearError(element) {
  element.textContent = "";
}


function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}