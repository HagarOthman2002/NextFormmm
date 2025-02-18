const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const formSubmit = document.querySelector(".formSubmit");

const nameField = document.getElementById("name");
const secondNameField = document.getElementById("secondName");
const emailField = document.getElementById("email");
const ageField = document.getElementById("age");
const schoolField = document.getElementById("school");
const idField = document.getElementById("id");

const nameError = document.getElementById("nameError");
const secondNameError = document.getElementById("secondNameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const schoolError = document.getElementById("schoolError");
const idError = document.getElementById("idError");

const page1 = document.getElementById("page1");
const page2 = document.querySelectorAll(".page2");

let currentPage = 1;

nextButton.addEventListener("click", function () {
  if (currentPage === 1) {
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
      page2[0].style.display = "block"; 
      currentPage = 2;
      prevButton.style.display = "block";
    }
  } else if (currentPage === 2) {
    const email = emailField.value.trim();
    const age = ageField.value.trim();

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

    if (isValid) {
      page2[0].style.display = "none";
      page2[1].style.display = "block"; 
      currentPage = 3;
    }
  } else if (currentPage === 3) {
    const school = schoolField.value.trim();
    const id = idField.value.trim();

    let isValid = true;

    if (school === "") {
      showError(schoolError, "School name is required.");
      isValid = false;
    } else {
      clearError(schoolError);
    }

    if (id === "" || isNaN(id) || id <= 0) {
      showError(idError, "Please enter a valid ID.");
      isValid = false;
    } else {
      clearError(idError);
    }

    if (isValid) {
      alert("Form submitted successfully!");
      formSubmit.submit();
    }
  }
});

prevButton.addEventListener("click", function () {
  if (currentPage === 2) {
    // Go back to Page 1
    page2[0].style.display = "none";
    page1.style.display = "block";
    currentPage = 1;
    prevButton.style.display = "none"; 
  } else if (currentPage === 3) {
    // Go back to Page 2
    page2[1].style.display = "none";
    page2[0].style.display = "block";
    currentPage = 2;
  }
});

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault(); 
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