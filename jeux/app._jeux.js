

var jeux = alert("Regle du jeux : Tu dois créer 60bulle en moins de 10secondes en appuyant sur le boutton click!" );



let temps = 10

const timerElement = document.getElementById("timer")

setInterval(() => {
 
  let secondes = parseInt(temps % 60, 10)

  
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${secondes}`
  temps = temps <= 0 ? 0 : temps - 1 ;
 if (secondes <= 0){alert("perdu! Retente ta chance!")
  if (true){window.location.reload()}};

  console.log(temps)

}, 1000 )


var boutton = document.querySelector(".boutton");

 var nbDeBulle = 0; 
 var resultat = document.querySelector(".resultat");


function creationDeBulle(nbDeBulle){

    divGeneral = document.querySelector(".divGeneral");
    var divCreation = document.createElement("div");
   divCreation.classList.add("divCreation");
    divGeneral.appendChild(divCreation);
   nbDeBulle++

    resultat.innerHTML = nbDeBulle;

    return nbDeBulle
   

    }

    let nombre = creationDeBulle()

    if (nombre == 60 ){alert("votre temps à gauche!")};

    boutton.addEventListener("click", creationDeBulle)



