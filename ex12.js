/**
@Ex07
 
@description

@tutorial (documentation)

@todo (Consignes de l'exercice) 
*/    
var tab =
{"stagiaires":[{"prenom":"Camille","nom":"Theil"},{"prenom":"Alex","nom":"Tuil"},
{"prenom":"Johanna","nom":"Bouzige"},{"prenom":"Christophe","nom":"Bello"},
{"prenom":"Abdelhakim","nom":"ElBaza"},{"prenom":"Nabil","nom":"Ghedjati"},
{"prenom":"Michael","nom":"Gable"},{"prenom":"Samir","nom":"BenSadi"},
{"prenom":"Sandrine","nom":"Roumejon"},{"prenom":"David","nom":"Longuet"
},{"prenom":"Éric","nom":"Guegan"},{"prenom":"Florian","nom":"Durano"
},{"prenom":"Jean-Charles","nom":"Kormann"},{"prenom":"Kévin","nom":"Forestier"}
,{"prenom":"Mathieu","nom":"Coynet"},{"prenom":"Régis","nom":"Sarrasin"},{"prenom":"Romain","nom":"Quet"},{"prenom":"Sylvain","nom":"Archilla" } ]};


let divStagiaires = document.getElementById('stagiaires');
var ul = document.createElement("ul");
tab.stagiaires.map((stagiaire) => {
    console.log(stagiaire);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(stagiaire.prenom + ' ' + stagiaire.nom));
    ul.appendChild(li);
})
divStagiaires.appendChild(ul);
