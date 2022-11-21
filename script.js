//FONCTIONNALITE 1
let footer = document.getElementsByTagName('footer')[0]; //Je récupère l'element dont le TagName est footer du document relié à mon JS et je l'appelle footer
console.log(footer); // J'affiche tous les éléments contenu contenu dans ma variable footer
let footer1 = document.querySelector('footer');
console.log(footer1);

footer.addEventListener('click', function() { // J'ajoute un évenemnt à mon footer : Lorsque l'utilisateur clique sur mon footer il se passe..
    console.log('clique'); // .. que clique s'affiche dans ma console à chaque que l'utilisateur clique sur mon footer.
});

//FONCTIONNALITE 1 bis
let clic = 0
footer.addEventListener('click', function() {
    clic += 1;
    console.log('clic numéro : ' + clic);
});

//FONCTIONNALITE 2
let navbarHeader = document.getElementById('navbarHeader');
console.log(navbarHeader);
let buttonHamburger = document.querySelector('button.navbar-toggler');
console.log(buttonHamburger);

buttonHamburger.addEventListener('click', function() {
    navbarHeader.classList.toggle("collapse");
});

//FONCTIONNALITE 3
//let firstCard = document.querySelector('div.col-md-4');
let buttonEdit = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];
let cardText = document.getElementsByClassName('card-text')[0];

buttonEdit.addEventListener('click', function() {
    cardText.style.color = 'red';
});

//FONCTIONNALITE 4
//let secondCard = document.querySelector('div.col-md-4');
let secondButtonEdit = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[1];
let secondCardText = document.getElementsByClassName('card-text')[1];

secondButtonEdit.addEventListener('click', function() {
    if (secondCardText.style.color === 'green'){
         secondCardText.style.color = ''}
    else if (secondCardText.style.color === ''){
         secondCardText.style.color = 'green'}
    // secondCardText.style.color.toggle('green');
});

//FONCTIONNALITE 5
//NON MERCI

//FONCTIONNALITE 6
//NON MERCI

//FONCTIONNALITE 7
let rightArrow = document.getElementsByClassName('btn btn-secondary my-2')[0];
let allCards = document.getElementsByClassName('row')[1];
// let firstFirstCard = document.getElementsByClassName('col-md-4')[0];
// let lastCard = document.getElementsByClassName('col-md-4')[5];
let papaCards = document.getElementsByClassName('col-md-4');

rightArrow.addEventListener('click', function() {
    allCards.insertBefore(papaCards[5], papaCards[0]);
});

//FONCTIONNALITE 8 (Fonctionne pas!) Il parrait qu'il faut utiliser ".appendChild" et "lastCard.nextSibling"
let leftArrow = document.getElementsByClassName('btn btn-primary my-2')[0];
let allAllCards = document.getElementsByClassName('row')[1];
let mamaCards = document.getElementsByClassName('col-md-4');

leftArrow.preventDefault() = leftArrow;

leftArrow.addEventListener('click', function() {
    allAllCards.insertBefore(mamaCards[0], mamaCards[5]);
});

//FONCTIONNALITE 9
//NON MERCI