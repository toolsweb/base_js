/**
@Ex07
 
@description
Strings

@tutorial (documentation)
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

@todo (Consignes de l'exercice)     
Amusez-vous avec les méthodes JavaScript d'une chaîne de caractères (string).
- Supprimer les espaces vides au début et à la fin de la chaîne de caractères "stringToManipulate".
- Séparer la chaîne en deux avec l'espace vide centrale en utilisant la méthode "split".
- Afficher le tableau retourné par la méthode .split() avec console.log
*/

let stringToManipulate = " Hello world! ";
stringToManipulate = stringToManipulate.trim();
console.log(stringToManipulate);
console.log(stringToManipulate.split(' '));

let str = "Marie, Lysa, Lucas, Tom";

str = str.split(',');
str.map((val, i)=> {
    console.log(val, i);
});


console.log(str);

