// Variables globales 

let carrito = [];
let actividades = [];
let gestor;

//Evento que dispara cuando se carga la pagina
document.addEventListener('DOMContentLoaded', () => {

    // Cargar el carrito con el localstorage, si no hay nada asignarle un array vacio
    carrito = JSON.parse( localStorage.getItem('carrito') ) || [];
    gestor = new GestionarActividad ();
    gestor.iniciar();
})

// Funcion para agregar al carrito un articulo
function addCarrito( id ) {
    
    const act = document.querySelector('#row_'+id);
    let actividad = new Actividad (   id,
                                );

   
    gestor.addCart( actividad );
}

// Eliminar un articulo del carrito
function eliminar( id ) {   
    gestor.eliminarArticulo( id );
}


