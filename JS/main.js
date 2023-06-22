// PRODUCTOS


const productos = [
    //CAMPERAS
    {
        id: "campera-01",
        titulo: "Campera 01",
        imagen: "./IMG/Camperas/campera-1.jpg",
        categoria: {
            nombre: "Camperas",
            id: "Camperas"
        },
        precio: 1000
    },
    {
        id: "campera-02",
        titulo: "Campera 01",
        imagen: "./IMG/Camperas/campera-2.jpeg",
        categoria: {
            nombre: "Camperas",
            id: "Camperas"
        },
        precio: 1000
    },
    {
        id: "campera-03",
        titulo: "Campera 03",
        imagen: "./IMG/Camperas/campera-3.jpeg",
        categoria: {
            nombre: "Camperas",
            id: "Camperas"
        },
        precio: 1000
    },
    {
        id: "campera-04",
        titulo: "Campera 04",
        imagen: "./IMG/Camperas/campera-4.jpeg",
        categoria: {
            nombre: "Camperas",
            id: "Camperas"
        },
        precio: 1000
    },
    {
        id: "campera-05",
        titulo: "Campera 05",
        imagen: "./IMG/Camperas/campera-5.jpg",
        categoria: {
            nombre: "Camperas",
            id: "Camperas"
        },
        precio: 1000
    },
    // BUZOS
    {
        id: "buzo-01",
        titulo: "Buzo 01",
        imagen: "./IMG/Buzos/buzo-1.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-02",
        titulo: "Buzo 02",
        imagen: "./IMG/Buzos/buzo-2.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-03",
        titulo: "Buzo 03",
        imagen: "./IMG/Buzos/buzo-3.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-04",
        titulo: "Buzo 04",
        imagen: "./IMG/Buzos/buzo-4.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-05",
        titulo: "Buzo 05",
        imagen: "./IMG/Buzos/buzo-5.jpeg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    
    // PANTALONES
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./IMG/Pantalones/pantalon-1.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./IMG/Pantalones/pantalon-2.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-01",
        titulo: "Pantalón 03",
        imagen: "./IMG/Pantalones/pantalon-3.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./IMG/Pantalones/pantalon-4.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./IMG/Pantalones/pantalon-5.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "calzado-01",
        titulo: "Calzado 01",
        imagen: "./IMG/Calzado/calzado-1.jpeg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: 1000
    },
    {
        id: "calzado-02",
        titulo: "Calzado 02",
        imagen: "./IMG/Calzado/calzado-2.jpeg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: 1000
    },
    {
        id: "calzado-03",
        titulo: "Calzado 03",
        imagen: "./IMG/Calzado/calzado-3.jpeg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: 1000
    },
    {
        id: "calzado-04",
        titulo: "Calzado 04",
        imagen: "./IMG/Calzado/calzado-4.jpeg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: 1000
    },
    {
        id: "calzado-05",
        titulo: "Calzado 05",
        imagen: "./IMG/Calzado/calzado-5.jpeg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");

const botonesCategorias = document.querySelector(".boton-categoria");

function cargarProductos(){

    productos.forEach(producto=>{
    
    const div = document.createElement("div");   
    div.classList.add("producto");
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">   
    <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
    </div>
    `;
    
    contenedorProductos.append(div);
    })
}

cargarProductos();
/*PROBLEMA CON BOTON-CATEGORIA 1:12:19*/
botonesCategorias.forEach(boton => {
    boton.addEventListener("Click", (e)=> {
    e.currentTarget.classList.add("active");
    })
})


