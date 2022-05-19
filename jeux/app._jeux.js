

var jeux = alert("Règle du jeux : Les aliennes attaques la terre, appui sur le boutton click et envoie 60missile en moins de 10secondes pour les battres" );



let temps = 10


function confirmer()
{confirm('perdu retente ta chance')}

const timerElement = document.getElementById("timer")

let timer = setInterval(() => {
 
  let secondes = parseInt(temps % 60, 10)

  
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${secondes}`
  temps = temps <= 0 ? 0 : temps - 1 ;

  

 if (secondes <= 0){confirmer()
if( confirmer = true){window.location.reload()}
}



}, 1000 )



var boutton = document.querySelector(".boutton");
console.log(boutton)

 var nbDeBulle = 0; 
 var resultat = document.querySelector(".resultat");


function creationDeBulle(){

    divGeneral = document.querySelector(".divGeneral");
    var divCreation = document.createElement("div");
   divCreation.classList.add("divCreation");
    divGeneral.appendChild(divCreation);
   nbDeBulle++

    resultat.innerHTML = nbDeBulle;
    if (nbDeBulle == 60 ){alert("bravo tu as sauvé la planète terre!"), clearInterval(timer), window.location.reload() };
   
   

    }

    boutton.addEventListener("click", creationDeBulle)