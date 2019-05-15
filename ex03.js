/**
@Ex03
 
@description
Conditions

@tutorial (documentation)
 
@todo (Consignes de l'exercice)     
Écrivez en Javascript :
- J’initialise a à 8  
- Je stocke a + 1 dans b  
- J’ajoute 1 à a  
- Je multiplie a par 2  
- Je retranche 5 à b  
- Je multiplie b par lui-même 
- J’ajoute 3 à a 
- Si a vaut 1, je lui ajoute 2, sinon je lui ajoute 3 
    Dans le terminal executez votre script et observez :
    node ex03.js
 */

let a = 8;
let b = a + 1;
a += 1;
a *= 2;
b -= 5;
b *= b;
a += 3;

if (a === 1)
{
    a += 2;
}
else {
    a += 3;
}

console.log(a);
console.log(b);
