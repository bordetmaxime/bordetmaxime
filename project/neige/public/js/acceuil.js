
const lolo = document.querySelector(".main");
const nav = document.querySelector("nav");
var noti = document.querySelector('h1');
var btn = document.querySelector(".decouvrir");

/* Bouton ¨Principal------------------------------------------------------------------------------ */

btn.addEventListener('click', () => {
    lolo.classList.toggle('rendrevisible')
    nav.classList.toggle('rendrevisible')
})

/* Article 1 ------------------------------------------------------------------------------------ */

const carte1 = document.querySelector(".carte1");
const prix1 = document.querySelector(".prix1")
var panier1 = document.querySelector('.panier1');

panier1.addEventListener('click', () => {
            var add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', add +1);
    noti.classList.add('zero');
    

})

/* Article 2 ------------------------------------------------------------------------------------ */

const carte2 = document.querySelector(".carte2");
const prix2 = document.querySelector(".prix2")
const panier2 = document.querySelector('.panier2');

panier2.addEventListener('click', () => {
    var add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', add +1);
    noti.classList.add('zero')
})

carte2.addEventListener('click', () => {
    carte2.classList.toggle('selection')   
    })

/* Article 3 ------------------------------------------------------------------------------------ */

const carte3 = document.querySelector(".carte3");
const prix3 = document.querySelector(".prix3")
const panier3 = document.querySelector('.panier3');

panier3.addEventListener('click', () => {
    var add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', add +1);
    noti.classList.add('zero')
})

carte3.addEventListener('click', () => {
        carte3.classList.toggle('selection')
        })

/* Article 4 ------------------------------------------------------------------------------------ */

const carte4 = document.querySelector(".carte4");
const prix4 = document.querySelector(".prix4")
const panier4 = document.querySelector('.panier4');

panier4.addEventListener('click', () => {
    var add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', add +1);
    noti.classList.add('zero')
})

 carte4.addEventListener('click', () => {
            carte4.classList.toggle('selection')
            })
/* Article 5 ------------------------------------------------------------------------------------ */

const carte5 = document.querySelector(".carte5");
const prix5 = document.querySelector(".prix5")
const panier5 = document.querySelector('.panier5');

panier5.addEventListener('click', () => {
    var add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', add +1);
    noti.classList.add('zero')
})

carte5.addEventListener('click', () => {
                carte5.classList.toggle('selection')
                })

/* Article 6 ------------------------------------------------------------------------------------ */

const carte6 = document.querySelector(".carte6");
const prix6 = document.querySelector(".prix6")
const panier6 = document.querySelector('.panier6');

panier6.addEventListener('click', () => {
    var add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', add +1);
    noti.classList.add('zero')
})

carte6.addEventListener('click', () => {
                    carte6.classList.toggle('selection')
                    })

/* Article 7 ------------------------------------------------------------------------------------ */

const carte7 = document.querySelector(".carte7");
const prix7 = document.querySelector(".prix7")
const panier7 = document.querySelector('.panier7');

panier7.addEventListener('click', () => {
    var add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', add +1);
    noti.classList.add('zero')
})

carte7.addEventListener('click', () => {
                        carte7.classList.toggle('selection')
                        })

/* Article 8 ------------------------------------------------------------------------------------ */

const carte8 = document.querySelector(".carte8");
const prix8 = document.querySelector(".prix8")
const panier8 = document.querySelector('.panier8');

panier8.addEventListener('click', () => {
    var add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', add +1);
    noti.classList.add('zero')
}) 

carte8.addEventListener('click', () => {
                            carte8.classList.toggle('selection')
                            })









    

       

            
                
                    

                       

                            

         

