// const article = document.getElementsByTagName('article')[0];
// const p = article.children[1]
// const h1 = p.previousElementSibling
// h1.style.color = 'red';
// const aOld = article.lastElementChild

// const a = document.createElement ('a');
// a.href = 'test.html';
// a.textContent = "Mon super Lien";
// article.insertBefore(a, article.firstChild)
// article.replaceChild(a, aOld)
// const text = document.createTextNode('Bonjour à tous !')
// article.appendChild(text)

// const mailInput = document.getElementById('mailinput');
// const mailError = document.getElementById('mailerror');

// mailInput.addEventListener('input', function(){
//     let mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
//     if(mailPattern.test(mailInput.value)){
//         mailError.style.visibility = 'hidden';
//     }else{
//         mailError.style.visibility = 'visible'
//     }
// });


let plat = document.getElementById('plat');

let plats = ["Mafé", "Ceeb", "Soulouhou"];
for (i=0; i<plats.length; i++){
    let newElement = document.createElement('li')
    newElement.textContent = plats[i];
    plat.appendChild(newElement);
};