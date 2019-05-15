/**
@Ex08
 
@description
Strings

@tutorial (documentation)
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

@todo (Consignes de l'exercice)     
Création d'une boucle for pour itérer sur toutes les valeurs du tableau "prenoms".

1. Supprimer les doublons du tableau "valeurs"
2. Faite une concaténation du tableau "valeurs" en chaîne de caractères avec le séparateur suivant ", "
3. Afficher le résultat dans la console!
En JavaScript moderne, il est possible de réaliser cet exercice avec une Structure Set:
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Set

*/

const prenoms = ["Thomas", "Alexandre", "Irvin", "Jonathan"];
console.log(`Taille du tableau prenoms: ${prenoms.length}`);

prenoms.map((val)  =>
{
    console.log(val);
});

let valeurs = ["rouge", "vert", "bleue", "rouge", "rose", "vert", "violet", "jaune"];
let mewVal = Array.from(new Set(valeurs));
console.log(mewVal);
let uniqueValeurs = new Set(valeurs);

console.log(uniqueValeurs);
valeurs = [...uniqueValeurs];
console.log(valeurs);

const concatValeurs = valeurs.join(', ');
console.log(concatValeurs);





