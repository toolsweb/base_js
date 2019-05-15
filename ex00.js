/**
@Ex00
 
@description
Dans javascript vous pouvez créer un grand nombre de variables qui sont chacune d'un certain type .
 
@tutorial (documentation)
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_typeof
 
@todo (Consignes de l'exercice)
    Dans cet exercice vous allez créer des variables de types : 
    - numérique (positifs, négatifs ou à virgule) 
    - chaînes de caractères 
    - booléens 
    - objects
    Dans le terminal executez votre script et observez :
    node ex00.js
 */

let myNumber = 8;
let myString = 'hello';
let is = true;
let obj = {
   name: 'luna',
   age: 20
}


obj.name = 'toto';
console.log(obj);

class Person
{
   constructor(name)
   {
      this.name = name;
   }

   presentation()
   {
      return 'I am ' + this.name;
   }
}

let person = new Person('Luc');
console.log(person.presentation());


console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof is);
console.log(typeof obj);


console.log(typeof person.presentation);


