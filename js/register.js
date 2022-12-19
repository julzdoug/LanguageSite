            
//gender
 /*       alert eingestellt        
var Male = document.getElementById("inlineRadio1");
var Female = document.getElementById("inlineRadio2");
var Other = document.getElementById("inlineRadio3");
payment()
language()
*/

function validateGender() {          
    var Male = document.getElementById("inlineRadio1");
    var Female = document.getElementById("inlineRadio2");
    var Other = document.getElementById("inlineRadio3");
if (!(Male.checked || Female.checked || Other.checked)) {
    alert("Please select a gender.");
      return false;
}
else {
    let radioButtons = document.getElementsByName("inlineRadioOptions");
    let value;
    for (let b = 0; b < radioButtons.length; ++b) {
        let button = radioButtons[b];
        if (button.checked) {
            value = button.value;
            break;
        }
    }
    alert('Du hast "' + value + '" ausgewählt' );
    return true;
}
}
//checking Name
function validateForm() {
    if (!validateFirstName()) return false;
    if (!validateLastName()) return false;
    return true;
            }
            function validateFirstName() {
                let firstName = document.getElementById("firstName");
                let value = firstName.value;
                if (!value) {
                    alert("Please enter a first name.");
                                        return false;
                }
                else {
                    alert(`First Name: ${value}" ausgewählt`);
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
var TnC = document.getElementsByClassName("termsAndConditions");*/
