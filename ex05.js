/**
@Ex05
 
@description
Conditions

@tutorial (documentation)
 
@todo (Consignes de l'exercice)     
Faire une fonction qui retourne true. 
Faire une fonction qui prend en paramètre une chaîne de caractères et qui retourne cette même 
chaîne. 
Faire une fonction qui prend en paramètre deux chaines de caractères et qui revoit la 
concaténation de ces deux chaînes 
Faire une fonction qui prend en paramètre deux nombres. 
La fonction doit retourner : 
Le premier nombre est plus grand si le premier nombre est plus grand que le deuxième 
Le premier nombre est plus petit si le premier nombre est plus petit que le deuxième 
Les deux nombres sont identiques si les deux nombres sont égaux  
    Dans le terminal executez votre script et observez :
    node ex05.js
 */

function myTrueFunction()
{
    return (true);
}
console.log(myTrueFunction());

function myString(tutu)
{
    return (tutu);
}
console.log(myString("ok !"));

function tutu()
{
    console.log('tutu');
    return 'je test';
}

let t = tutu();
console.log(t);

function myConcatenateStrings(string, string2)
{
    return (string + string2);
}
console.log(myConcatenateStrings("Hello ", "world!"));

function myNumberMax(myNumber, myNumber2)
{
    if (typeof myNumber != 'number' || typeof myNumber2 != 'number')
        return;
    if (myNumber > myNumber2)
        console.log("Le premier nombre est plus grand");
    else if (myNumber < myNumber2)
        console.log("Le premier nombre est plus petit");
    else
        console.log("Les deux nombres sont identiques");
    return; 
}
myNumberMax('k', 4);
myNumberMax(2, 4);
myNumberMax(4, 4);
myNumberMax(6, 4);