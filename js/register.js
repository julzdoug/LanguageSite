//This is the Validation Form
function validateForm() {
  if (!Gender()) return false;
  if (!validateFirstName()) return false;
  if (!validateLastName()) return false;
  if (!validateStreetName()) return false;
  if (!validatePostCode()) return false;
  if (!validateCity()) return false;
  if (!validatecountry()) return false;
  if (!validateDateOfBirth()) return false;
  if (!validatePhoneNumber()) return false;
  if (!validateEmail()) return false;
  if (!validateCheckboxes()) return false;
  if (!validatepayment()) return false;
  if (!TnC()) return false;

  return true;
}
//Gender Validation
function Gender() {
  const maleRadio = document.getElementById("inlineRadio1");
  const femaleRadio = document.getElementById("inlineRadio2");
  const otherRadio = document.getElementById("inlineRadio3");

  //Checks if a button is selected and make sure it is selected
  if (!maleRadio.checked && !femaleRadio.checked && !otherRadio.checked) {
    alert("Please select a gender");
    return false;
  }
  //Getting the information about wich one is selected
  let choice = document.getElementsByName("inlineRadioOptions");
  let value;

  for (let i = 0; i < choice.length; i++) {
    let button = choice[i];
    if (button.checked) {
      value = button.value;
      break;
    }
  }
  //save on the local storage
  localStorage.setItem("gender", value);
  return true;
}

//First Name Validation
function validateFirstName() {
  let inputElement = document.getElementById("fname");
  let value = inputElement.value;
  //checks if the field got input
  if (!value) {
    alert("Please enter a First Name");
    return false;
  }
  //send the input to the local storage
  else {
    localStorage.setItem("fname", value);
    return true;
  }
}
//Last Name Validation
function validateLastName() {
  let inputElement = document.getElementById("lname");
  let value = inputElement.value;
  //checks if the field got input
  if (!value) {
    alert("Please enter a Last Name");
    return false;
  }
  //send the input to the local storage
  else {
    localStorage.setItem("lname", value);
    return true;
  }
}
//Street Name Validation
function validateStreetName() {
  let inputElement = document.getElementById("streetName");
  let value = inputElement.value;
  //checks if the field got input
  if (!value) {
    alert("Please enter a Street Name");
    return false;
  }
  //send the input to the local storage
  else {
    localStorage.setItem("streetName", value);
    return true;
  }
}
//Post Code Validation
function validatePostCode() {
  let inputElement = document.getElementById("postCode");
  let value = inputElement.value;
  //checks if the field got input
  if (!value) {
    alert("Please enter a Post Code");
    return false;
  }
  //send the input to the local storage
  else {
    localStorage.setItem("postCode", value);
    return true;
  }
}
//City Validation
function validateCity() {
  let inputElement = document.getElementById("city");
  let value = inputElement.value;
  //checks if the field got input
  if (!value) {
    alert("Please enter a City");
    return false;
  }
  //send the input to the local storage
  else {
    localStorage.setItem("city", value);
    return true;
  }
}
//Country Validation
function validatecountry() {
  let country = document.getElementById("country");
  let value = country.value;
  //checks if the field got input
  if (!value) {
    alert("Please enter a Country");
    return false;
  }
  //send the input to the local storage
  else {
    localStorage.setItem("country", value);
    return true;
  }
}
//Date of Birth Validation
function validateDateOfBirth() {
  let inputElement = document.getElementById("DateOfBirth");
  let value = inputElement.value;
  //checks if the field got input
  if (!value) {
    alert("Please enter a Date of Birth");
    return false;
  }
  //send the input to the local storage
  else {
    localStorage.setItem("DateOfBirth", value);
    return true;
  }
}
//Phone Number Validation
function validatePhoneNumber() {
  let inputElement = document.getElementById("phoneNr");
  let value = inputElement.value;
  //checks if the field got input
  if (!value) {
    alert("Please enter a valid phone number");
    return false;
  }
  //send the input to the local storage
  else {
    localStorage.setItem("phoneNr", value);
    return true;
  }
}
//Email Validation
function validateEmail() {
  let inputElement = document.getElementById("email");
  let value = inputElement.value;
  //checks if the field got input
  if (!value) {
    alert("Please enter an Email");
    return false;
  }
  //send the input to the local storage
  else {
    localStorage.setItem("email", value);
    return true;
  }
}

function validateCheckboxes() {
  // Get all the checked checkboxes
  let checkedCheckboxes = document.querySelectorAll(
    'input[name="language"]:checked'
  );
  let total = checkedCheckboxes.length;

  // Check if no checkboxes are selected
  if (total == 0) {
    alert("Please select at least one checkbox");
    return false;
  }

  // Check if more than 2 checkboxes are selected
  if (total > 2) {
    alert("Please select no more than 2 checkboxes");
    return false;
  }
  handleCheckboxSelection();
  return true;
}

function handleCheckboxSelection() {
  // Get all the checked checkboxes
  let checkedCheckboxes = document.querySelectorAll(
    'input[name="language"]:checked'
  );
  let value = [];

  // Loop through the checked checkboxes and add their values to an array
  for (i = 0; i < checkedCheckboxes.length; i++) {
    let checks = checkedCheckboxes[i];
    if (checks.checked) {
      value.push(checks.value);
    }
  }
  // Store the selected languages in localStorage
  localStorage.setItem("language", value);
  return true;
}

//payment Method Validation
function validatepayment() {
  let paymentGroup = document.querySelectorAll('input[name="payment"]:checked');
  let psel = paymentGroup.length;
  // Check if no checkboxes are selected
  if (psel == 0) {
    alert("Please select a payment method.");
    return false;
  }
  // Check if 1 checkboxes are selected
  if (psel > 1) {
    alert("Please select only one payment method.");
    return false;
  }
  // Get all the checked checkboxes
  let pay = Array.from(
    document.querySelectorAll('input[name="payment"]:checked')
  );
  let value;
  // Loop through the checked checkboxes and add their values to an array
  for (i = 0; i < pay.length; i++) {
    let payed = pay[i];
    if (payed.checked) {
      value = payed.value;
      paymentMethod = "payment";
      // Store the selected languages in localStorage
      localStorage.setItem("payment", value);
    }
  }
  return true;
}

//Terms Validation
function TnC() {
  const termsAndConditionsRadio = document.getElementById("termsAndConditions");

  //Checks if a button is selected and make sure it is selected
  if (!termsAndConditionsRadio.checked) {
    alert("You must accept the terms and conditions to continue.");
    return false;
  }
  //save on the local storage
  let terms = document.getElementById("termsAndConditions");
  let value = terms.value;

  for (let i = 0; i < terms.length; i++) {
    let term = terms[i];
    if (term.checked) {
      value = term.value;
      break;
    }
  }
  //Getting the information about wich one is selected
  alert("Thank you for Signing Up.");
  localStorage.setItem("termsAndConditions", value);
  return true;
}
