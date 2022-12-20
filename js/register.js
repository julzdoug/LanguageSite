            
//gender

function validateForm() {
    // Get the gender radio buttons
    const maleRadio = document.getElementById("inlineRadio1");
    const femaleRadio = document.getElementById("inlineRadio2");
    const otherRadio = document.getElementById("inlineRadio3");
    //Name 
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
