const p= document.getElementById("numero")
const aumnetar = document.getElementById("aumentar")
const disminuir = document.getElementById("disminuir")
const restaurar = document.getElementById("resturar")
 let contador = 0 ;

 aumnetar.addEventListener("click",()=>{
    if (contador <10 ){
     contador ++;}    
    p.textContent= contador 
    if(contador > 0){ 
    p.style.color="black"
}
})


 disminuir.addEventListener('click',()=>{
    if (contador > 0 ){
    resta =contador --;
    p.textContent=resta
    }
    if( contador === 0 ){
    p.style.color="red"
    }
 })
 restaurar.addEventListener('click',()=>{
        contador = 0;
        p.textContent= contador
        p.style.color="red"
        
    })
// estilos en pagina principal con js
