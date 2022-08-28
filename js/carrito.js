//Se llama al contenedor donde esta el carrito
const contenedor = document.querySelector("#carrito");

//Retorna el dato cuyo nombre pasamos por parámetro key, o un array vacío si no existe
const traerDeLocalStorage = (key) => {
    let carrito = [];
    if (localStorage.getItem(key)) {
        carrito = JSON.parse(localStorage.getItem(key));
    }
    return carrito;
}

//Guarda value en el localStorage bajo el nombre que pasemos en el key
const guardarEnLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

//Función para mostrar el carrito
const mostrarCarrito = () => {
    //Traemos el carrito del localStorage
    const carrito = traerDeLocalStorage("carrito");
    //Si no había nada nos dice que está vacío
    if (carrito.length == 0) {
        contenedor.innerHTML = `
                <div class="container">
                    <div class="row">
                        <h2>Tu carrito está vacío</h2>
                    </div>
                </div>
        `;
    } else {
        //Si había productos guardados agrega al contenedor un 'ul' con el listado de todos los productos
        const div = document.createElement('div');
        div.classList.add('container');
        div.setAttribute('id', 'space');
        contenedor.innerHTML = '';
        carrito.forEach(actividad => {

            div.innerHTML += `
                            <div id="${actividad.id}" class="row carritoItem">
                                <div class="col-xs-12 col-md-6 ">
                                    <img src="../src/${actividad.image}" class="img-fluid animate__animated animate__fadeIn" alt="Hero home">
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <h2>
                                        ${actividad.nombre}
                                    </h2>
                                        <p>
                                            Actividades online y presenciales, instalaciones modernas y el mejor acompañamiento profesional.
                                        </p>
                                    <button class="button button-outlined remove">Eliminar</button>
                                </div>
                            </div>
            `;
        });
        contenedor.appendChild(div);
    }
}

//Al hacer click llamamos a un evento que manda el id de la actividad al local storage

contenedor.addEventListener("click", e => {
    //Si donde hacen clic es sobre el botón de eliminar
    if (e.target.classList.contains("remove")) {
        //Guardamos el id del producto
        const id = e.target.parentNode.parentNode.id;
        //Traemos el carrito de localStorage
        let carrito = traerDeLocalStorage("carrito");
        //Eliminamos el producto que coincida con el id
        carrito = carrito.filter(actividad => actividad.id != id);
        //Guardamos el carrito en localStorage
        guardarEnLocalStorage("carrito", carrito);
        //Actualizamos la vista del carrito
        mostrarCarrito();
    }
});

//Mostramos el carrito apenas se carga la página
mostrarCarrito();


