const Form = document.getElementById('registrationForm');



Form.addEventListener("submit", function (event) {
    event.preventDefault();
    const userInput = document.getElementById('userinput').value.trim();
    const usermail = document.getElementById('usermail').value.trim();
    const userpassword = document.getElementById('userpassword').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
    if(userInput === "" || usermail === "" || userpassword === ""){
        errorMessage.textContent = 'Merci de remplir tous les champs!';
    
    };

    if(userpassword.length < 8){
        errorMessage.textContent = 'Veuillez mettre un mot de passe de 8 caractères';
        event.preventDefault();
    }else if(!/[A-Z]/.test(userpassword)){
        errorMessage.textContent = 'Votre mot de passe doit contenir au moins une lettre majuscule'
    }else if(!/[0-9]/.test(userpassword)){
        errorMessage.textContent = 'Votre mot de passe doit contenir au moins un chiffre'
        event.preventDefault();
    }else if(!/[@~#$^!&*]/.test(userpassword)){
        errorMessage.textContent = 'Votre mot de passe doit contenir au moins un caractère spécial'
        event.preventDefault();
    }else{
        errorMessage.textContent = '';
        alert('Formulaire soumis avec succès !')
    }
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailPattern.test(usermail)){
        errorMessage.textContent = 'Veuillez saisir un email correcte';
        event.preventDefault(); //Empêche la soumission du formulaire
    }
    userInput.value = '';
    usermail.value = '';
    userpassword = '';

});