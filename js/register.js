            
//gender
function validateForm() {
    // Get the gender radio buttons
    var maleRadio = document.getElementById("inlineRadio1");
    var femaleRadio = document.getElementById("inlineRadio2");
    var otherRadio = document.getElementById("inlineRadio3");
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var postCode=document.getElementById("postCode");
    var city=document.getElementById("city");
    var country=document.getElementById("country")
    var phoneNr=document.getElementById("phoneNr")
    var dateOfBirth=document.getElementById("dateOfBirth")
    var email=document.getElementById("email")

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
  //checked pstCode
  if (postCode.value.trim() == "") {
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
     }
     if (dateOfBirth.value.trim() == "") {
      alert("Please enter a Date of Birth");
      return false;
     }
     if (phoneNr.value.trim() == "") {
      alert("Please enter a Phone Number");
      return false;
     }
     if (email.value.trim() == "") {
      alert("Please enter an Email");
      return false;
     }

     return true;
} 
         

//Name variables
/*



var lname=document.getElementById("lname").value;
var street=document.getElementById("street").value;
var postCode=document.getElementById("postCode").value;
var city=document.getElementById("city").value;
var country=document.getElementById("country").value;
var phoneNr=document.getElementById("phoneNr").value;
var dateOfBirth=document.getElementById("dateOfBirth").value;
var email=document.getElementById("email").value;
//checkboxes variables
var english=document.getElementById("english").checked = true;
var russian = document.getElementById("russian").checked;
var german = document.getElementById("german").checked;
var greek = document.getElementById("greek").checked;
var french = document.getElementById("french").checked;
var dutch = document.getElementById("dutch").checked;
var spanish = document.getElementById("spanish").checked;
var hungarian = document.getElementById("hungarian").checked;
//billings variables
var bills = document.getElementById("bills");
var creditCard = document.getElementById("creditCard");
//Terms variables
var TnC = document.getElementsByClassName("termsAndConditions");
*/