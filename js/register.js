            
//gender
function validateForm() {
    // Get the gender radio buttons
    var maleRadio = document.getElementById("inlineRadio1");
    var femaleRadio = document.getElementById("inlineRadio2");
    var otherRadio = document.getElementById("inlineRadio3");
    //Name variables
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var postCode=document.getElementById("postCode");
    var city=document.getElementById("city");
    var country=document.getElementById("country");
    var phoneNr=document.getElementById("phoneNr");
    var dateOfBirth=document.getElementById("dateOfBirth");
    var email=document.getElementById("email");
//checkboxes variables
var english=document.getElementById("english");
var russian = document.getElementById("russian");
var german = document.getElementById("german");
var greek = document.getElementById("greek");
var french = document.getElementById("french");
var dutch = document.getElementById("dutch");
var spanish = document.getElementById("spanish");
var hungarian = document.getElementById("hungarian");
//billings variables
var bills = document.getElementById("bills");
var creditCard = document.getElementById("creditCard");
//Terms variables
var TnC = document.getElementsByClassName("termsAndConditions");

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
  if (postCode.value < 5000 || value > 9000) { 
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
     if (dateOfBirth.value < 1940 || value > 2008) { 
      alert("Please enter a Date of Birth");
      return false;
     }
     if (phoneNr.value < 0440000000 || value > 0449999999) { 
      alert("Please enter a Phone Number");
      return false;
     }
     if (email.value.indexOf('@') === -1) {
      alert("Please enter an Email");
      return false;
     }

     return true;
} 
         

//Name variables
/*    <script src="scripts/script.js"></script>
</head>
<body> 
    <h1 id="app">Bitte trage deinen vollständigen Namen ein!</h1>

    <div class="alert alert-success" role="alert">
            

        <form onsubmit="return validateForm();">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" value=""><br><br>
            <label for="age">Alter:</label><br>
            <input type="number" id="age" name="age" value=""><br><br>

            <input type="submit" value="validieren">
            <!-- <input type="submit" value="Submit"> -->
        </form>

        <!-- <button onclick="validateFirstName();validateLastName();validateAge();">Validieren</button> -->

        <p id="message-1"></p>
        <p id="message-2"></p>
        <p id="message-3"></p>
    </div>

</body>
</html>


----------------------------------------------------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script> -->

    
    
    <script src="scripts/script.js">

        /* 
                Vorbereitungen: 
                    !) Lege die neue Datei my-2nd-form-validation.html an 
                       (Kopie von my-1st-form-validation.html, weiterhin 
                       ohne Bootstrap; leere <form>, die setMessage Funktionen
                       belassen)
                    b) Ins bestehende Formular füge zwei Radio-buttons mit 
                       den Beschriftungen "Ja" und "Nein" ein.
                    c) Darunter füge noch drei Checkboxen ein, mit den
                       Beschriftungen "rot", "gelb", "blau", "weiss".

                Validierungen mit JavaScript (inkl. Fehlermeldung): 
                    1) Genau ein Radio-Button muss ausgewählt sein.
                    2) Nur genau "rot" und "weiss" dürfen ausgewählt sein.

                https://www.w3schools.com/html/html_form_input_types.asp

                document.getElementById('blah');
                document.querySelectorAll('input[type="text"]');
                forEach(myFunction);
            
                </script>
                </head>
                <body> 
                    <h1 id="app">Bitte wähle!</h1>
                
                    <div class="alert alert-success" role="alert">
                            
                
                        <form onsubmit="return validateAnswers();">
                
                            <input type="radio" id="yes" name="radio-mood" value="ja"><label for="yes">Ja</label>
                            <input type="radio" id="no" name="radio-mood" value="nein"><label for="no">Nein</label><br><br>
                            <input type="checkbox" id="color1" name="color-red" value="rot"><label for="color1" style="color: red;"> Rot</label>
                            <input type="checkbox" id="color2" name="color-yellow" value="gelb"><label for="color2" style="color: yellow;"> Gelb</label>
                            <input type="checkbox" id="color3" name="color-blue" value="blau"><label for="color3" style="color: blue;"> Blau</label>
                            <input type="checkbox" id="color4" name="color-white" value="weiss"><label for="color4" style="color: white;"> Weiss</label><br><br>
                
                            <input type="submit" value="Prüfen & abschicken">
                            <!-- <input type="submit" value="Submit"> -->
                        </form>
                
                        <!-- <button onclick="validateFirstName();validateLastName();validateAge();">Validieren</button> -->
                
                        <p id="message-1"></p>
                        <p id="message-2"></p>
                        <p id="message-3"></p>
                    </div>
                
                </body>
                </html>
                
                ---------------------------------------------------
                            /* 
                                Vorbereitungen: 
                                    !) Neue Datei my-first-form-validation.html (ohne Bootstrap)
                                    a) <form> mit zwei input Feldern vom Typ 'text'.
                                    b) Ein input Feld vom Typ 'number'
                                    c) <button> mit der Beschriftung "Validieren" ausserhalb <form>
                                    d) <p> für eine Fehlermeldung unterhalb dem Button
                
                                Validierungen mit JavaScript (inkl. Fehlermeldung): 
                                    1) das erste input Feld darf nicht leer sein
                                    2) beide input Felder dürfen nicht leer sein
                                    3) das zweite input Feld muss ein '@' enthalten
                                    4) der Wert n im Nummernfeld erfüllt 0 <= n <= 10
                
                                https://www.w3schools.com/html/html_form_input_types.asp
                
                                document.getElementById('blah');
                                document.querySelectorAll('input[type="text"]');
                                forEach(myFunction);
                            
                
                                
                            function validateForm() {
                            if (!validateFirstName()) return false;
                            if (!validateLastName()) return false;
                            if (!validateAge()) return false;
                            return true;
                                    }
                
                            
                            function validateFirstName() {
                                let inputElement = document.getElementById("fname");
                                let value = inputElement.value;
                
                                if (!value) { 
                                    // Bsp. '', null, undefined
                                    setMessage1('Bitte den Vornamen eingeben.');
                                    return false;
                                }
                                // Ab hier enthält value einen nicht leeren String.
                                // indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf?retiredLocale=de
                                else if (value.indexOf('@') === -1) { 
                                    // value enthält KEIN '@' Symbol.
                                    setMessage1('Bitte im Vornamen ein "@" einfügen.');
                                    return false;
                                }
                                else {
                                    setMessage1(value); 
                                    return true;
                                }
                            }
                
                            function validateLastName() {
                                let inputElement = document.getElementById("lname");
                                let value = inputElement.value;
                
                                if (!value) { 
                                    // Bsp. '', null, undefined
                                    setMessage2('Bitte den Nachnamen eingeben.');
                                    return false;
                                }
                                else {
                                    setMessage2(value); 
                                    return true;
                                }
                            }
                
                            function validateAge() {
                                let inputElement = document.getElementById("age");
                                let value = inputElement.value;
                
                                if (!value) { 
                                    // Bsp. '', null, undefined
                                    setMessage3('Bitte das Alter eingeben.');
                                    return false;
                                }
                                else if (value < 0 || value > 10) { // NOT (0 <= n <= 10)
                                    // Entweder ist die Zahl kleiner Null oder grösser 10.
                                    setMessage3('Entweder ist die Zahl kleiner Null oder grösser 10.');
                                    return false;
                                }
                                else {
                                    setMessage3(value); 
                                    return true;
                                }
                            }
                
                            function setMessage1(value) {
                
                                document.getElementById("message-1").innerText = value;
                            }
                
                            function setMessage2(value) {
                                document.getElementById("message-2").innerText = value;
                            }
                
                            function setMessage3(value) {
                                document.getElementById("message-3").innerText = value;
                            }
                
                            function validateAnswers() {
                    
                                if (!checkRadio()) return false;
                                if (!validateCheckboxes()) return false;
                                alert ('Good!');
                                return true;
                            }
                
                          
                
                            function checkRadio() {
                                
                                let radioElementYes = document.getElementById('yes');
                                let radioElementNo = document.getElementById('no');
                
                
                            if (!(radioElementYes.checked || radioElementNo.checked)) {
                                setMessage1 ('Bitte wähle!');
                                return false;
                            }
                            else {
                                let radioButtons = document.getElementsByName("radio-mood");
                                let value;
                                for (let b = 0; b < radioButtons.length; ++b) {
                                    let button = radioButtons[b];
                                    if (button.checked) {
                                        value = button.value;
                                        break;
                                    }
                                }
                              
                                setMessage1('Du hast "' + value + '" ausgewählt' );
                                return true;
                            }
                        } 
                
                        function validateCheckboxes() {
                                let checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
                                
                                console.log('checkedCheckboxes =', checkedCheckboxes);
                
                                let redSelected = false;
                                let whiteSelected = false;
                                let wrongColorSelected = false;
                
                            
                
                            for (let c = 0; c < checkedCheckboxes.length; ++c) {
                                let checkbox = checkedCheckboxes[c];
                
                                if (checkbox.value === 'rot') redSelected = true;
                                else if (checkbox.value === 'weiss') whiteSelected = true;
                                else wrongColorSelected = true;
                            }
                
                console.log('redSelected=', redSelected);
                console.log('whiteSelected=', whiteSelected);
                console.log('wrongColorSelected =', wrongColorSelected);
                
                                    if (!(redSelected && whiteSelected && ! wrongColorSelected) ) {
                                        // Fehlerfall
                                        setMessage2('Try harder!')
                                    
                                    return false;
                                }
                                else {
                                    // Erfolgsfall
                                    setMessage2('Gut!')
                                    return true;
                                }
                            }
                        
                        
                
*/