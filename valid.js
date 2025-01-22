const Form = document.getElementById('registrationForm');



Form.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO : Recupéré les éléments du html
    const userInputElement = document.getElementById('userinput')
    const usermailElement = document.getElementById('usermail')
    const userpasswordElement = document.getElementById('userpassword')

    // TODO: Obtenir les valeurs entréés
    const userInput = document.getElementById('userinput').value.trim();
    const usermail = document.getElementById('usermail').value.trim();
    const userpassword = document.getElementById('userpassword').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    // TODO : Initialisé le message d'erreur
    errorMessage.textContent = '';
        // TODO : Les conditions imposées pour valider le formulaire
    if(userInput === "" || usermail === "" || userpassword === ""){
        errorMessage.textContent = 'Merci de remplir tous les champs!';
        return;
    };

    if(userpassword.length < 8){
        errorMessage.textContent = 'Veuillez mettre un mot de passe de 8 caractères';
        return;
    }else if(!/[A-Z]/.test(userpassword)){
        errorMessage.textContent = 'Votre mot de passe doit contenir au moins une lettre majuscule'
    }else if(!/[a-z]/.test(userpassword)){
        errorMessage.textContent = 'Votre mot de passe doit contenir au moins une lettre minuscule'
    }else if(!/[0-9]/.test(userpassword)){
        errorMessage.textContent = 'Votre mot de passe doit contenir au moins un chiffre'
        return;
    }else if(!/[@~#$^!&*]/.test(userpassword)){
        errorMessage.textContent = 'Votre mot de passe doit contenir au moins un caractère spécial'
        return;
    }else{
        errorMessage.textContent = '';
        alert('Formulaire soumis avec succès !')
    }
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailPattern.test(usermail)){
        errorMessage.textContent = 'Veuillez saisir un email correcte';
        event.preventDefault(); //Empêche la soumission du formulaire
    }
    // TODO: Vider les champs

    userInputElement.value = "";
    usermailElement.value = "";
    userpasswordElement.value = "";
});