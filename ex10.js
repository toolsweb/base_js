/**
@Ex07
 
@description

@tutorial (documentation)

@todo (Consignes de l'exercice)     
Nous récupérons une couleur au hasard
*/
const couleurs = ["rouge", "vert", "rose", "bleue", "jaune"];
const messageParCouleur = {
 "rouge": "une pomme rouge!",
 "vert": "un asticot vert!",
 "rose": "i'm a penguin!",
 "bleue": "mer",
 "jaune": "jaune d'oeuf"
};
const couleurAuHasard = couleurs[Math.floor(Math.random() * couleurs.length)];

/**
Continuer le code ci-dessous en suivant les consignes de l'exercice ci-dessus !
Affichez le message correspondant dans la console
*/
switch (couleurAuHasard) {
    case 'rouge': 
        console.log(messageParCouleur.rouge);
        break;
    case 'vert': 
        console.log(messageParCouleur.vert);
        break;
    case 'rose': 
        console.log(messageParCouleur.rose);
        break;
    case 'bleue': 
        console.log(messageParCouleur.bleue);
        break;
    case 'jaune': 
        console.log(messageParCouleur.jaune);
        break;
    default:
        console.log('Color not exit')
}

