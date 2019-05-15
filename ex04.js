/**
@Ex04
 
@description
Conditions

@tutorial (documentation)
 
@todo (Consignes de l'exercice)     
Créer une variable et l'initialiser à 0.  
Tant que cette variable n'atteint pas 10, il faut : 
L 'afficher 
L’'incrementer 
 
En allant de 1 à 15 avec un pas de 1, afficher le message On y arrive presque. 
En allant de 20 à 0 avec un pas de 1, afficher le message C'est presque bon. 
En allant de 1 à 100 avec un pas de 15, afficher le message On tient le bon bout. 
En allant de 200 à 0 avec un pas de 12, afficher le message Enfin !!!!. 
- Si a vaut 1, je lui ajoute 2, sinon je lui ajoute 3 
    Dans le terminal executez votre script et observez :
    node ex04.js
 */

let a = 0;
for (a; a < 10; a++)
{
    console.log(a);
}

a = 1;
for (a; a < 15; a++)
{
    console.log("On y arrive presque");
}

a = 20;
for (a; a > 0; a--)
{
    console.log("C'est presque bon");
}

a = 1;
for (a; a < 100; a+=15)
{
    console.log("On tient le bon bout");
}

a = 200;
for (a; a > 0; a-=12)
{
    console.log("Enfin");
}
