let bandera = true;
let buscar = document.getElementById("buscar");
let boton = document.getElementById("boton");

boton.addEventListener("click", function (event) {
    event.preventDefault()

    if (bandera == true) {
        buscar.classList.remove("invisible")
    } else {
        buscar.classList.add("invisible")
    }
    //Boton toggle
    bandera = !bandera
})

let producto1 = {
    nombre: "PS4",
    capacidad: "1TB",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/ps4.jpg?alt=media&token=e39b48b0-6ea1-4882-91d8-2d2758b061b5",
    estado: "Primera",
    precio: 1500000
}

let producto2 = {
    nombre: "Nintendo Switch",
    capacidad: "32GB",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/nswitch.jpg?alt=media&token=9742ab8b-c90d-49f4-bffe-79fbcb260696",
    estado: "Primera",
    precio: 2000000
}

let producto3 = {
    nombre: "PS5",
    capacidad: "1TB",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/ps5.jpg?alt=media&token=e0e3a1ba-a9f1-4fbb-9ef5-307c3bca5e2c",
    estado: "Primera",
    precio: 2500000
}

let producto4 = {
    nombre: "Xbox One",
    capacidad: "1TB",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/xbox1.jpg?alt=media&token=b385efc7-301f-49f9-b1b1-1bf78a58c63f",
    estado: "Primera",
    precio: 2000000
}

let producto5 = {
    nombre: "Joycon Nintendo Switch",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/joycon-nswitch.jpg?alt=media&token=5bcfc6be-8249-45d5-adc0-dee6ad9d314a",
    estado: "Primera",
    precio: 200000
}

let producto6 = {
    nombre: "Estuche Nintendo Switch",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/estuche-nintendo.jpg?alt=media&token=130c96e4-9e40-4d94-ac8d-6beae9f5a670",
    estado: "Primera",
    precio: 500000
}

let producto7 = {
    nombre: "HDMI",
    foto: "Nahttps://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/hdmi.jpg?alt=media&token=907c158c-d8eb-46ef-bc6a-e02b933b9742n",
    estado: "Primera",
    precio: 50000
}

let producto8 = {
    nombre: "Control Xbox One",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/control-xbox1.jpg?alt=media&token=8b639c0a-b631-4e46-826a-05e3c8a5d861",
    estado: "Primera",
    precio: 200000
}

let producto9 = {
    nombre: "Control PS4",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/control-ps4.jfif?alt=media&token=a67c8bd9-7d81-4713-aaed-3c5be106ac87",
    estado: "Primera",
    precio: 200000
}

let producto10 = {
    nombre: "Control Pro Nintendo Switch",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/control-pro-nswitch.jpg?alt=media&token=ebb302e7-ac10-4a0f-86f3-192cad32d0e5",
    estado: "Primera",
    precio: 25000
}

let producto11 = {
    nombre: "Control Pro Pirata Nintendo Switch",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/control-chibi-switch.jpg?alt=media&token=63c4c5a6-77d6-4327-ad12-ec03f363f3ea",
    estado: "Primera",
    precio: 150000
}

let producto12 = {
    nombre: "Audifonos Inalambricos",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/cascos-in.jpg?alt=media&token=b54bcac1-2641-49fe-a77b-f01e53c8dc23",
    estado: "Primera",
    precio: 90000
}

let producto13 = {
    nombre: "Carga y Juega Xbox One",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/carga-juega-xbox1.jpg?alt=media&token=41a95a9c-b47f-44b6-992f-bb0db97111e2",
    estado: "Primera",
    precio: 50000
}

let producto14 = {
    nombre: "Base de Carga Controles PS4",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/base-carga-ps4.jpg?alt=media&token=4038b3bc-755f-4cb9-a6df-1337ee0e42fa",
    estado: "Primera",
    precio: 80 | 1000
}
let producto15 = {
    nombre: "Mouse y Teclado",
    foto: "https://firebasestorage.googleapis.com/v0/b/clinica-del-play-5d2c8.appspot.com/o/mouse-teclado.png?alt=media&token=f6620091-f8c8-43b4-a81b-21888a508a9f",
    estado: "Primera",
    precio: 100000
}

let Productos = Array(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15
)

console.log(Productos)

Productos.forEach(function(producto) {
    console.log(producto.nombre)
});
