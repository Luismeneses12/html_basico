const p= document.getElementById("numero")
const aumnetar = document.getElementById("aumentar")
const disminuir = document.getElementById("disminuir")
const restaurar = document.getElementById("restaurar")
// sonidos 
const sonidoAumnetar = new Audio("aumentar.mp3") 
const sonidoDisminuir = new Audio("disminuir.mp3")
const sonidoRestaurar = new Audio("restaurar.mp3")
let contador = 0 ;

 aumnetar.addEventListener("click",()=>{
    if (contador <10 ){
     contador ++;
     sonidoAumnetar.play()  }
     
    p.textContent= contador 
    if(contador > 0){ 
    p.style.color="black"
}
})


 disminuir.addEventListener('click',()=>{
    if (contador > 0 ){
    resta =contador --;
    p.textContent=resta
    sonidoDisminuir.play()
    }
    if( contador === 0 ){
    p.style.color="red"
    }
 })
 restaurar.addEventListener('click',()=>{
        contador = 0;
        p.textContent= contador
        p.style.color="red"
        sonidoRestaurar.play()
        
    })
// estilos en pagina principal con js
