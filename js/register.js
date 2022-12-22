
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



    if (!maleRadio.checked && !femaleRadio.checked && !otherRadio.checked) {
        alert("Please select a gender");
        return false;
}

    let choice = document.getElementsByName("inlineRadioOptions");
    let value;

for (let i = 0; i < choice.length; i++) {
    let button = choice[i];
    if (button.checked) {
        value = button.value;
        break;
    }
    }

    localStorage.setItem("gender", value);
    return true;

}

//First Name Validation
function validateFirstName() {
    let inputElement = document.getElementById("fname");
    let value = inputElement.value;

    if (!value) {
        alert("Please enter a First Name");
        return false;
    }
    else {
        localStorage.setItem('fname', value);
        return true;
    }
}
//Last Name Validation
function validateLastName() {
    let inputElement = document.getElementById("lname");
    let value = inputElement.value;

    if (!value) {
        alert("Please enter a Last Name");
        return false;
    }
    else {
        localStorage.setItem('lname', value);
        return true;
    }
}
//Street Name Validation
function validateStreetName() {
    let inputElement = document.getElementById("streetName");
    let value = inputElement.value;
  
    if (!value) {
        alert("Please enter a Street Name");
        return false;
    }
    else {
        localStorage.setItem('streetName', value);
        return true;
    }
}
//Post Code Validation
function validatePostCode() {
    let inputElement = document.getElementById("postCode");
    let value = inputElement.value;

    if (!value) {
        alert("Please enter a Post Code");
        return false;
    }
    else {
        localStorage.setItem('postCode', value);
        return true;
    }
}
//City Validation
function validateCity() {
    let inputElement = document.getElementById("city");
    let value = inputElement.value;

    if (!value) {
        alert("Please enter a City");
        return false;
    }
    else {
        localStorage.setItem('city', value);
        return true;
    }
}
//Country Validation
function validatecountry() {
    let country = document.getElementById("country");
    let value = country.value;
    if (!value) {
        alert("Please enter a Country");
        return false;
    }
    else {
        localStorage.setItem('country', value);
        return true;
    }
}
//Date of Birth Validation
function validateDateOfBirth() {
    let inputElement = document.getElementById("DateOfBirth");
    let value = inputElement.value;

    if (!value) {
        alert("Please enter a Date of Birth");
        return false;
    }
    else {
        localStorage.setItem('DateOfBirth', value);
        return true;
    }
}
//Phone Number Validation
function validatePhoneNumber() {
    let inputElement = document.getElementById("phoneNr");
    let phoneNr = inputElement.value;

    if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNr)) {
        alert("Please enter a valid phone number");
        return false;
    }
    else {
        localStorage.setItem('phoneNr', phoneNr);
        return true;
    }
}
//Email Validation
function validateEmail() {
    let inputElement = document.getElementById("email");
    let value = inputElement.value;

    if (!value) {
        alert("Please enter an Email");
        return false;
    }
    else {
        localStorage.setItem('email', value);
        return true;
    }
}
//language Validation
function validateCheckboxes() {
    // Get all the checked checkboxes
    let checkedCheckboxes = document.querySelectorAll('input[name="language"]:checked');
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

    let boxes = Array.from(document.querySelectorAll('input[name="language"]:checked'));
    let value;

    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if (box.checked) {
        value = box.value;
        language = 'language'+ i;
        localStorage.setItem(language, value);
    }
    }
    // If the checks pass, return true
    
    return true;
  }
  
//payment Method Validation
  function validatepayment() {
    let paymentGroup = document.querySelectorAll('input[name="payment"]:checked');
    let psel = paymentGroup.length;
  
    if (psel == 0) {
      alert("Please select a payment method.");
      return false;
    } 
    if (psel > 1) {
        alert("Please select only one payment method.");
        return false;
      } 

      let pay = Array.from(document.querySelectorAll('input[name="payment"]:checked'));
      let value;
      
      for (var i = 0; i < pay.length; i++) {
        let payed = pay[i];
        if (payed.checked) {
            value = payed.value;
            paymentMethod = 'payment';

            localStorage.setItem("payment", value);
            
        }
      }
      return true;
  }

//Terms Validation
    function TnC() {
        var termsAndConditionsRadio = document.querySelector('#termsAndConditions');
      
        if (!termsAndConditionsRadio.checked) {
          alert("You must accept the terms and conditions to continue.");
          return false;
        }
      else {
        localStorage.setItem("tnc", value);
        alert("Thank you for signing up for a language class.");
        return true;
      }
        
      }
      

/* My first code form 
function validateForm() {
    // Get the gender radio buttons
    const maleRadio = document.getElementById("inlineRadio1");
    const femaleRadio = document.getElementById("inlineRadio2");
    const otherRadio = document.getElementById("inlineRadio3");

    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const streetName=document.getElementById("streetName");
    const postCode=document.getElementById("postCode");
    const city=document.getElementById("city");
    const country=document.getElementById("country");
    const phoneNr=document.getElementById("phoneNr");
    const dateOfBirth=document.getElementById("dateOfBirth");
    const email=document.getElementById("email");
//checkboxes 
const english=document.getElementById("english");
const russian = document.getElementById("russian");
const german = document.getElementById("german");
const greek = document.getElementById("greek");
const french = document.getElementById("french");
const dutch = document.getElementById("dutch");
const spanish = document.getElementById("spanish");
const hungarian = document.getElementById("hungarian");
//billings variables
const bills = document.getElementById("bills");
const creditCard = document.getElementById("creditCard");
//Terms 
const TnC = document.getElementsByClassName("termsAndConditions");

      if (!maleRadio.checked && !femaleRadio.checked && !otherRadio.checked) {
      alert("Please select a gender");
      return false;
    }
    // validate name
    if (fname.value.length == 0) {
    alert("Please enter a First Name");
    return false;
  }
  if (lname.value.length == 0) {
    alert("Please enter a Last Name");
    return false;
  }
  //streetName
if (streetName.value.length == 0) {
    alert("Please enter a Street Name");
        return false;
}
  //checked postCode
  if (postCode.value < 5000 || postCode.value > 9000) { 
    alert("Please enter a Post Code");
    return false;
     }
     if (city.value.trim() == "") {
      alert("Please enter a City");
      return false;
     }
     if (country.value.trim() == "") {
      alert("Please enter a Country");
      return false;

     if (dateOfBirth.value.trim() == "") { 
      alert("Please enter a Date of Birth");
      return false;
     }
     if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNr.value)) { 
        alert("Please enter a valid phone number");
        return false;
      }
     if (email.value.indexOf('@') === -1) {
      alert("Please enter an Email");
      return false;
     }

     return true;
} 
}

*/
