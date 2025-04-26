const titulo = document.getElementById("titulo")
const boton = document.getElementById("boton")
const regreso = document.getElementById("regreso")

boton.addEventListener('click',()=>{
    titulo.textContent="nuevo titulo"
    titulo.style.color="red"
    titulo.style.fontSize="200px"
})
regreso.addEventListener('click',()=>{
    titulo.textContent="nuevo exto "
    titulo.style.color="blue"
    titulo.style.fontSize="20px"
})