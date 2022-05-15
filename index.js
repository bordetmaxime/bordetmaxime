let backgroundColor = document.querySelector(".container")
let navItem = document.querySelector(".navItem")
let titreP = document.querySelector(".titreP")


function backgroundCouleur (){titreP.innerHTML = "Maxime Bordet";
}


 titreP.addEventListener("mouseover", backgroundCouleur);


 function backgroundtitre (){

    titreP.innerHTML = "M B";
     }


 titreP.addEventListener("mouseout", backgroundtitre);
 


//  caroussel

document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });

  
  const buttons = document.querySelectorAll(".carousel__button");
  let fleche1 = document.querySelector(".fleche_droite_first1"); 
  const items = document.querySelectorAll(".carousel__item");

// first block 


fleche1.addEventListener("click", adios)

  function adios (){
    items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
    items[1].classList.add("carousel__item--selected");
    buttons[1].classList.add("carousel__button--selected");
     }


// second block gauche 


  let fleche2 = document.querySelector(".fleche_gauche_second");

     fleche2.addEventListener("click", fleche2Event)

  function fleche2Event (){
    items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
     }

     let fleche3 = document.querySelector(".fleche_droite_second");

// second block droite


     fleche3.addEventListener("click", fleche3Event)

  function fleche3Event (){
    items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
    items[2].classList.add("carousel__item--selected");
    buttons[2].classList.add("carousel__button--selected");
     }

// thirdly block 

     let fleche4 = document.querySelector(".fleche_gauche_thirdly");

     fleche4.addEventListener("click", fleche4Event)

  function fleche4Event (){
    items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
    items[1].classList.add("carousel__item--selected");
    buttons[1].classList.add("carousel__button--selected");
     }











     

  
  

