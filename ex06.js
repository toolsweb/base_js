/**
@Ex06
 
@description
Conditions

@tutorial (documentation)
 
@todo (Consignes de l'exercice)     
Créez une fonction addition() qui cette fois ci retourne directement l'addition du nombre + 10.
Créez une deuxième fonction qui multiplie un nombre qu'on lui donne par 2 et qui renvoie le résultat.
Faites en sorte, lors de l'appel des fonctions que lorsque je donne un nombre à la fonction addition, le
résultat soit donné à la fonction multiplication et que le résultat final soit affiché dans la console
    Dans le terminal executez votre script et observez :
    node ex06.js
 */

function addition(nombre)
{
    return (nombre + 10);
}

function multiplication(nombre)
{
    return (nombre * 2);
}

console.log(multiplication(addition(10)));
