/**
@Ex07
 
@description

@tutorial (documentation)

@todo (Consignes de l'exercice)     
1. Multiplier toutes les valeurs du tableau "tableauDeNumbers" par deux.
2. Filtrer le tableau pour ne récupérer que les valeurs supérieures à vingt.
3. Afficher le résultat dans un console.log
N'hésitez pas à refaire l'exercice avec une boucle "for" classique pour vous entraîner.
*/

const valeurs = [10, 20].map(function diviserParDeux(entier) {
 return entier / 2;
 });
console.log(valeurs); // [5, 10];
let tableauDeNumbers = [2, 5, 10, 15, 20, 40];

tableauDeNumbers = tableauDeNumbers.map(function(val) {
    return (val * 2);
})
console.log(tableauDeNumbers);

function filterUpTweenty(age)
{
    return (age > 20);
}
tableauDeNumbers = tableauDeNumbers.filter(filterUpTweenty);
console.log(tableauDeNumbers);
