
// Funktion: Schlüssel und Wert in LocalStorage setzen.
function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

// Funktion: Wert zum Schlüssel aus LocalStorage auslesen.
function getLocalStorage(key) {
    return localStorage.getItem(key);
}

// Funktion: Bestätigung generieren
function writeConfirmation() {
    // Die Personalien werden in Variablen ausgelesen.
    let Gender = getLocalStorage('gender');
    let FirstName = getLocalStorage("fname");
    let LastName = getLocalStorage("lname");
    let StreetName = getLocalStorage("streetName");
    let PostCode = getLocalStorage("postCode");
    let City = getLocalStorage("city");
    let Country = getLocalStorage("country");
    let DateofBirth = getLocalStorage("DateOfBirth");
    let PhoneNr = getLocalStorage("phoneNr");
    let Email = getLocalStorage("email");
    let Language = getLocalStorage("language").split(",");
    let PayMent = getLocalStorage("payment");
    
   

    // alert(`firstName = ${firstName}`);

    /*
        Die Beschriftungen und Platzhalter für die obigen Variablen werden in ein 
        String Template eingetragen. Zur Gliederung und Gestaltung werden zudem 
        <p> und <span> Elemente verwendet.
    */
    let confirmation = `
        <p class="centered"><span class="confirmation-label centered">Gender:</span> ${Gender}</p>
        <p class="centered"><span class="confirmation-label centered">First Name:</span> ${FirstName}</p>
        <p class="centered"><span class="confirmation-label centered">Last Name:</span> ${LastName}</p>
        <p class="centered"><span class="confirmation-label centered">Street:</span> ${StreetName}</p>
        <p class="centered"><span class="confirmation-label centered">Post Code:</span> ${PostCode}</p>
        <p class="centered"><span class="confirmation-label centered">City:</span> ${City}</p>
        <p class="centered"><span class="confirmation-label centered">Country:</span> ${Country}</p>
        <p class="centered"><span class="confirmation-label centered">Date Of Birth:</span> ${DateofBirth}</p>
        <p class="centered"><span class="confirmation-label centered">Phone Nr:</span> ${PhoneNr}</p>
        <p class="centered"><span class="confirmation-label centered">Email:</span> ${Email}</p>
        <p class="centered"><span class="confirmation-label centered">Language</span> ${Language}</p>
        <p class="centered"><span class="confirmation-label centered">Payment Method:</span> ${PayMent}</p>
        
    `;

    // Die Bestätigung wird als innerHTML gesetzt.
    document.getElementById("confirmation-message").innerHTML = confirmation;
}