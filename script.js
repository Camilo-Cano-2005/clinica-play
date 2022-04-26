let bandera = true;
let buscar = document.getElementById("buscar");
let boton = document.getElementById("boton");

boton.addEventListener("click", function(event) {
    event.preventDefault()

    if (bandera == true) {
        buscar.classList.remove("invisible")
    }else {
        buscar.classList.add("invisible")
    }
    //Boton toggle
    bandera = !bandera
})

let producto = {
    nombre: "PS4",
    capacidad: "1TB",
    foto: "Nan",
    estado: "Segunda",
    precio: 500000
}