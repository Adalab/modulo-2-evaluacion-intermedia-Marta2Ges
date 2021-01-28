'use strict';

const number = document.querySelector('.js-number');
const button = document.querySelector('.js-button');
const track = document.querySelector('.js-pista');



let max = 100; 

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
    let random = getRandomNumber (100);
    console.log (random);

    const result = getRandomNumber(max); 



    function ContainerElements (index, message){
        index.innerHTML = message;
    }
   

    function Message () {
    
        if (number.value <= 0 || number.value > max) {
            ContainerElements(track, 'El número debe estar entre 1 y 100');
          } else if (number.value < result) {
            ContainerElements(track,'Demasiado bajo');
          } else if (number.value > result) {
            ContainerElements(track, 'Demasiado alto');
          } else {
            ContainerElements(track, '¡Good job!');
          }
    
        }

        const tries = document.querySelector('.js-intentos');
   
     
 
let click = 0;
function Counter() {
  click++;
  if (click >= 1) {
      tries.innerHTML = `Número de intentos: ${click}`;
}
}
   function numbers (){
    Message ();
    Counter ();

   }    
button.addEventListener('click', numbers);