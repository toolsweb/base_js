/**
@Ex07
 
@description
Strings

@tutorial (documentation)

@todo (Consignes de l'exercice)     
1. Filtrer le tableau "payload" par la propriété "active" égal à true à l'aide de la méthode filter
2. Additionner la propriété "value" du résultat précédemment filtré.
3. Afficher la valeur total des "value" dans la console.
*/
const payload = [
 { active: true, value: 10 },
 { active: true, value: 20 },
 { active: false, value: 15 },
 { active: true, value: 5 },
 { active: false, value: null },
 { active: true, value: 6.5 }
];


let payloadFilterByActive = payload.filter((val) => {
    return val.active;
});

console.log(payloadFilterByActive);

let total = 0;
payloadFilterByActive.map((val) => {
    total += val.value;
    return total;
});

console.log(total);