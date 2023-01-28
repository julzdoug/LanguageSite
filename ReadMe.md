Figma Link:https://www.figma.com/file/tu0azq00c4gvai5MAmDqFq/langugaesite?t=5HTZT2E5kv07Awfp-0
Trello Link:https://trello.com/invite/b/MQ040m5d/ATTI8b2331f801217126d37336708cec12deA578A48B/languagesite





1.I searched for an example page and inspiration
link:https://www.zhaw.ch/de/linguistik/institute-zentren/ilc/weiterbildung/sprachkurse/anmeldung-sprachkurse/

2.Created my respository from VCS

3.Created 2 branches developer and Starting

4. make a trello set up create my schedule link:https://trello.com/invite/b/MQ040m5d/ATTI8b2331f801217126d37336708cec12deA578A48B/languagesite

5. making a figma Link:https://www.figma.com/file/tu0azq00c4gvai5MAmDqFq/langugaesite?t=WhV3SGm6rCs79j14-1
got a backgorund image link:https://wallpaperaccess.com/world-language

6.Starting Prototype with 5 Pages

7. Adding a Background image
 
8.creating a Logo and add to img folder link:https://www.freelogodesign.org/

9.Center the Items

10. made footer having problem with center the logo

11.connected all page and update them
//finally i can work on the seperate pages and start with a form prototype.

12.change the Img folder name to image

13.Starting with Radio Buttons link:https://getbootstrap.com/docs/5.2/forms/checks-radios/

14.Change the Header and the Footer with a better understandeble code. re-wrote the html file.selfmade.

15.Clear the Footer border and added language on the index page

16.update all pages

17.Starting with position radio buttons.

18.Add Street

19.add Post code on contact form

20.add City contact Form

21. add country place of birth Email phone number

22.starting with checkboxes and english

23.added other languages place still nedd to be mess with plus responsive problem. after prototype try to fix

24.Payments method added and terms and conditions

25.Add onSubmit name for function an button pluss message field ready

26. made variable with all the IDs

27. script radio button response check. Continue with name field validations

28.First name and last name

29.PostCode

30.City

31. i had to change the type for the number field and email.

32. Correcte the input type and the java script forgot the street.

33. Run the code thru java and html validation Link:
https://appdevtools.com/html-validator
https://validatejavascript.com/

34.change the var to const

35.rewriting in seperate function.

36.starting checkboxe REAL link:
https://www.the-art-of-web.com/html/html5-checkbox-required/

36.checkbox blackout. found a link and try to write over.... link:
https://www.plus2net.com/javascript_tutorial/checkbox-limit.php

37: Heading to the payment section to validate this...
help from link:
https://www.quizcure.com/javascript/single-multiple-checkbox-validation-in-javascript
change ita bit

38. Trying to finish the radio button terms n condition...
repeat from the gender. ( i had to use the query get not the document.)

39.comment the Javascript nice...

40.Clean up the bootstrap code..change some div made it responsive but problem with picture!!

41.align css to all pages

42.Working on local storage to save data..
checkboxes and radio challengs occur.

43. Save storage malfunction Email Phone Number and Checboxes not working worik on Output.

44. I have found some syntax and misstake and invalid outputs but it works. I will try to finish waht i can.

45.made some change will try to add them to the register field

46.80% now the javascript issue with writing the right code for the field and output...

47.Fields having output most syntax and miss spelling fails....

48. back to checkboxes

49.checkboxes language solve next check box and radio buttons.

50.copy the language box system to payment boxes.

51. finish the term button with the same code as gender buttons.

52. I would like to insert a total cost nr to output. But the css has some bugs i need to take car of

53.Update all pages. Issues with Javascript boxes.... and some other things like cost.


Update

// it checked everything 2 times because the submit button had onclick="validateForm(),validateCheckboxes(); Like it is already in the from

// The problem with the checkboxes is that it doesnt store the 2 language right in the local storage.
I try multiple ways and after many attempts i played around with these method 
Link:https://stackoverflow.com/questions/590018/getting-all-selected-checkboxes-in-an-array

going back on the checkboxes
// I had the problems withou the display of the checkboxes same way here multiple try and
could do something with this solutionslink:https://stackoverflow.com/questions/58940331/retrieve-multiple-values-local-storage-and-show-within-div-element

// the phone number problem
if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNr))
it is use full for the phone nr but for this a let it
this code requires that the phone number must have 10 number to be valid i 
took this out and change it with (!value) also i had to change the var phoneNR to value.
and made the html only accept number with type "number" and added value
<input class="form-control py-1" id="phoneNr" type="number" placeholder="Phone Number"
          data-sb-validations="required" />

Javascript schould be on point 

working on the responsive layout.





<!-- My first code form 
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

 -->