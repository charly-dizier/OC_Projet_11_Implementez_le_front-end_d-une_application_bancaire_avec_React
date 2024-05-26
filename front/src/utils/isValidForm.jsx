// Fonction de validation d'une adresses email
function isValidEmail(value) {
    // Création d'un RegExp pour vérifier le format de l'email
    const regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
    // Test de vérification retournant true ou false en fonction de la valeur tester
    if (regEmail.test(value)){
        return true;
    } return false;
}

// Fonction de validation d'un nom
function isValideName(value) {
    // Supprime les espaces au début et à la fin de la valeur
    value=value.trim();
    // Vérification que la valeur ne soit ni vide ni null et qu'elle possède minimum 2 caractères
    if (value !== "" && value.length >= 2 && value !== null) {
        return true;
    } return false;
}

// Fonction de validation d'un mot de passe
function isValidPassword(value) {
    // Supprime les espaces au début et à la fin de la valeur
    value = value.trim();
    // Vérification que la valeur ne soit ni vide ni null et qu'elle possède minimum 5 caractères
    if (value !== "" && value.length >= 5 && value !== null) {
        return true;
    } return false;
}

export {isValidEmail, isValideName, isValidPassword}