/**
@Ex01
 
@description
Conditions

@tutorial (documentation)
 
@todo (Consignes de l'exercice)
    Afficher le message "C’est vrai" si la valeur de "valeurRandom" est vraie (true). 
    Afficher le message "C’est faux" si la valeur de "valeurRandom" est fausse (false). 
    Dans le terminal executez votre script et observez :
    node ex01.js
 */

const valeurRandom = Math.random();

console.log(valeurRandom > 0.5);

if (valeurRandom)
{
    console.log("c'est vrai");
}
else
{
    console.log("c'est faux");
}

// Ternaire (option 2)

valeurRandom ? console.log("c'est vrai") : console.log("c'est faux");




