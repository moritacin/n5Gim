let carrito       = [];

//Si hay algo guardado lo cargo y si no, no mostres nada
carrito = JSON.parse( localStorage.getItem('carrito') ) || [];

const addCarrito = (detalleActividad) => {

    const existe = carrito.some (actividad => actividad.id === detalleActividad.id);

    if (existe) {
        const acts = carrito.map ( actividad => {
            if (actividad.id === detalleActividad.id) {
                actividad.cantidad++
                return actividad;
            }else {
                return actividad;
            }

            carrito = acts;
        })
        Toastify({
            text: "Sumamos el plan al carrito",
            duration: 1000,
            gravity: 'bottom'

        }).showToast();
    }else 
    {
        // Como no existe lo agrego
        carrito.push(infoProducto);

        Toastify({
         text: "Se agrego la actividad",
         duration: 1000,
         gravity: 'bottom'

     }).showToast();

    }

}
 
     //Contabilizo las cantidad de productos
    const contarProductos = ()=> { 

        let contadorProductos = 0;

        carrito.forEach(( producto ) => {

            contadorProductos = contadorProductos + parseInt(producto.cantidad);
        })

        return contadorProductos;
    }

    //Actualizo el carrito
    const actualizarCarrito = () => {

        
        actualizarContador();

        
        guardarCarrito();
    }

    // Actualizar contador carrito
    const actualizarContador = ()=> { 

        let totalArticulos = this.contarProductos();

        let countCarrito = document.querySelector('#badgeCarrito');

        // Actualizar contador del carrito
        countCarrito.innerHTML = totalArticulos;

    }

   const eliminarArticulo = ( id ) => { 

        Swal.fire({
            title: '"Esta seguro de eliminar el producto ?"',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminarlo',
            cancelButtonText: `Cancelar`,
          }).then((result) => {
            
            if (result.isConfirmed) 
            {
                carrito = carrito.filter( articulo => articulo.id != id);
                this.actualizarCarrito();

                // Mostramos un msg con el resultado de la operacion
                Toastify({
                    text: "El articulo fue eliminado del carrito",
                    duration: 2000,
                    gravity: 'bottom'

                }).showToast();
            }            
          })         
          
    }
    
    // Guardar en Storage
    const guardarCarrito = () => { 
       
        localStorage.setItem(key_carrito, JSON.stringify( carrito ));
        const dt = DateTime.now();
       let date =  dt.toLocaleString();
        
        localStorage.setItem(key_actualizacion,date);
    }