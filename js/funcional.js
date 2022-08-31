const funcional = [];

const url = '../js/db.json';

fetch(url)

.then( (respuesta) => respuesta.json())
.then( (resultado) => {
    
    entrenamientos = resultado.entrenamientos;

    actFuncional (resultado);
    
});


const actFuncional = () => {

entrenamientos.map((entrenamientos) => {
    entrenamientos.nombre == "Funcional" && funcional.push(new Actividad(entrenamientos)); 
});

funcional.map((actividad) => {
    const contenedor = document.getElementById("contenedor-funcional");
    const { image, nombre, planes, id} = actividad;
    contenedor.innerHTML = "";
	contenedor.innerHTML += `
                <div class="container">
                  <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <img src="../src/${image}">
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <h2>${nombre}</h2>
                        
                        <ul>

                          ${planes.map((plan) => {
									return `
                                    <li>
                                        <strong>${plan.nombreplan}</strong> <br> ${plan.detalle}<br> Precio: $ ${plan.precio}
                                    </li>`;
								})}
                        </ul>
                        
                        <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="formGroupExampleInput">Modalidad</label>
                                    <select class="form-select extreme" aria-label="Default select example">
                                        <option value="1">Presencial</option>
                                        <option value="2">Online</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="formGroupExampleInput">Plan</label>
                                    <select class="form-select extreme" aria-label="Default select example">
                                    ${planes.map((plan) => {
                                        return `
                                        <option value="${plan.id}">${plan.nombreplan}</option>`
                                    
                                    })}
                                    </select>
                                </div>
                        </div>
                        <button id="${id}" class="button button-filled extreme agregar">Agregar al carrito</a></button>
                    </div>
                  </div>
                </div>
                `;
});

const traerDeLocalStorage = (key) => {
    // console.log(localStorage.getItem('veamos-que-trae-si-la-key-no-existe'));
    let carrito = [];
    if (localStorage.getItem(key)) {
        carrito = JSON.parse(localStorage.getItem(key));
    }
    return carrito;
}

const guardarEnLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

//Retorna el producto de data.js que coincida con el argumento
const obtenerProducto = (id) => {
    return funcional.find(actividad => actividad.id == id);
}

const btnAgregar = document.querySelector(".agregar");
btnAgregar.addEventListener("click", e => {
    

    //Si la etiqueta donde hicimos clic tiene la clase 'agregar'
    if (e.target.classList.contains("agregar")) {
        //Traemos al carrito de localStorage y al producto de data.js y lo agregamos al primero
        const carrito = traerDeLocalStorage("carrito");
        const act = obtenerProducto(e.target.id);
        carrito.push(act);

        //Actualizamos localStorage
        guardarEnLocalStorage("carrito", carrito);
        //Mostramos un modal de producto agregado
        mostrarMensaje();
        
    }
});

const mostrarMensaje = () => {
    Toastify({
        text: "¡Agregamos la actividad al carrito!",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "#FFAD62",
            color: "#262626",
          },
    }).showToast();
}

}