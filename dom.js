// TODO : Recupération des éléments du dom
const userInput = document.getElementById('userinput');
const addButton = document.getElementById('addbutton');
const itemList = document.getElementById('itemlist');

// TODO : Ajout des noms quand l'utilisateur entre son nom dans le champ input et qu'il clique sur le boutton 'Ajouter à la liste des nom'
addButton.addEventListener('click', function(event){
    event.preventDefault();
    let inputValue = userInput.value;
    if(inputValue.trim() !== ""){
        let newElement = document.createElement('li');
        newElement.textContent = inputValue;

        // TODO : Ajout d'un boutton "Supprimer" à chaque nom ajouter
        let removeButtom = document.createElement('button');
        removeButtom.textContent = 'Supprimer';
        removeButtom.style.marginleft = '10px';
        // TODO : Quand l'utilisateur clique sur le boutton supprimer le nom est supprimé de la liste
        removeButtom.addEventListener('click', function(){
            itemList.removeChild(newElement);
       })
        newElement.appendChild(removeButtom);
        itemList.appendChild(newElement);
        itemList.appendChild(newElement);
        // TODO : Vider le champ input après que l'utilisateur ait cliqué sur le boutton "Ajoutez..."
        userInput.value = "";
        removeButtom.value = "";

    }else{
        alert('Veuillez entre un nom valide !');
    };
});