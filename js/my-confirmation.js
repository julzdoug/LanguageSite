
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
    let firstName = getLocalStorage("fname");
    let lastName = getLocalStorage("lname");
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
        <p><span class="confirmation-label">Vorname:</span> ${firstName}</p>
        <p><span class="confirmation-label">Nachname:</span> ${lastName}</p>
    `;

    // Die Bestätigung wird als innerHTML gesetzt.
    document.getElementById("confirmation-message").innerHTML = confirmation;
}