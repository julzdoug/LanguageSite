
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
    let Language = getLocalStorage("language");
    let PayMent = getLocalStorage("payment");
    let TermNCondition = getLocalStorage("tnc");
    // alert(`firstName = ${firstName}`);

    /*
        Die Beschriftungen und Platzhalter für die obigen Variablen werden in ein 
        String Template eingetragen. Zur Gliederung und Gestaltung werden zudem 
        <p> und <span> Elemente verwendet.
    */
    let confirmation = `
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">Gender:</span> ${Gender}</p>
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">First Name:</span> ${FirstName}</p>
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">Last Name:</span> ${LastName}</p>
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">Street:</span> ${StreetName}</p>
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">Post Code:</span> ${PostCode}</p>
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">City:</span> ${City}</p>
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">Country:</span> ${Country}</p>
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">Date Of Birth:</span> ${DateofBirth}</p>
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">Phone Nr:</span> ${PhoneNr}</p>
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">Email:</span> ${Email}</p>
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">Language:</span> ${Language}</p>
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">Payment Method:</span> ${PayMent}</p>
        <p class="text-center fs-3 fw-bold"><span class="confirmation-label">Terms and Condition:</span> ${TermNCondition class="text-center fs-3 fw-bold"}</p>
    `;

    // Die Bestätigung wird als innerHTML gesetzt.
    document.getElementById("confirmation-message").innerHTML = confirmation;
}