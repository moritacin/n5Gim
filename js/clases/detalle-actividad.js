//Creo arrays en donde voy a guardar cada actividad
const kangooJumps = [];
const trampolines = [];
const x55 = [];
const funcional = [];
const crossFit = [];
const musculacion = [];
const fightDo = [];
const zumba = [];
const streching = [];
const yoga = [];

//Creo variables para los contenedores de cada página donde voy a guardar la info de cada actividad
const contenedorKangooJumps = document.querySelector("#contenedor-kangooJumps");
const contenedorTrampolines = document.querySelector("#contenedor-trampolines");
const contenedorX55 = document.querySelector("#contenedor-x55");
const contenedorFuncional = document.querySelector("#contenedor-funcional");
const contenedorCrossFit = document.querySelector("#contenedor-crossFit");
const contenedorMusculacion = document.querySelector("#contenedor-musculacion");
const contenedorFightDo = document.querySelector("#contenedor-fightDo");
const contenedorZumba = document.querySelector("#contenedor-zumba");
const contenedorStreching = document.querySelector("#contenedor-streching");
const contenedorYoga = document.querySelector("#contenedor-yoga");

const url = '../js/db.json';

fetch(url)

.then( (respuesta) => respuesta.json())
.then( (resultado) => {
    
    entrenamientos = resultado.entrenamientos;

    actividadDetalle (resultado);
    
});

//Recorro mi objeto entrenamientos y dependiendo del dato que necesite lo llamo y lo ubico en su contenedr
const actividadDetalle = () => {
    entrenamientos.forEach((entrenamientos) => {
        
        if (contenedorKangooJumps) {
            entrenamientos.nombre == "Kangoo Jumps" && kangooJumps.push(new Actividad (entrenamientos));
            kangooJumps.forEach((actividad) =>{
                mostrarAct(actividad);
                contenedorKangooJumps.appendChild(contenedor);
            })
        }
        
        if (contenedorTrampolines) {
            entrenamientos.nombre == "Trampolines" && trampolines.push(new Actividad (entrenamientos));
            trampolines.forEach((actividad) =>{
                mostrarAct(actividad);
                contenedorTrampolines.appendChild(contenedor);
            })
        }

        if (contenedorX55) {
            entrenamientos.nombre == "X55" && x55.push(new Actividad (entrenamientos));
            x55.forEach((actividad) =>{
                mostrarAct(actividad);
                contenedorX55.appendChild(contenedor);
            })
        }

        if (contenedorFuncional) {
            entrenamientos.nombre == "Funcional" && funcional.push(new Actividad (entrenamientos));
            funcional.forEach((actividad) =>{
                mostrarAct(actividad);
                contenedorFuncional.appendChild(contenedor);
            })
        }

        if (contenedorCrossFit) {
            entrenamientos.nombre == "Cross Fit" && crossFit.push(new Actividad (entrenamientos));
            crossFit.forEach((actividad) =>{
                mostrarAct(actividad);
                contenedorCrossFit.appendChild(contenedor);
            })
        }

        if (contenedorMusculacion) {
            entrenamientos.nombre == "Musculación" && musculacion.push(new Actividad (entrenamientos));
            musculacion.forEach((actividad) =>{
                mostrarAct(actividad);
                contenedorMusculacion.appendChild(contenedor);
            })
        }

        if (contenedorFightDo) {
            entrenamientos.nombre == "Fight Do" && fightDo.push(new Actividad (entrenamientos));
            fightDo.forEach((actividad) =>{
                mostrarAct(actividad);
                contenedorFightDo.appendChild(contenedor);
            })
        }

        if (contenedorZumba) {
            entrenamientos.nombre == "Zumba" && zumba.push(new Actividad (entrenamientos));
            zumba.forEach((actividad) =>{
                mostrarAct(actividad);
                contenedorZumba.appendChild(contenedor);
            })
        }

        if (contenedorStreching) {
            entrenamientos.nombre == "Streching" && streching.push(new Actividad (entrenamientos));
            streching.forEach((actividad) =>{
                mostrarAct(actividad);
                contenedorStreching.appendChild(contenedor);
            })
        }

        if (contenedorYoga) {
            entrenamientos.nombre == "Yoga" && yoga.push(new Actividad (entrenamientos));
            yoga.forEach((actividad) =>{
                mostrarAct(actividad);
                contenedorYoga.appendChild(contenedor);
            })
            
        }
         
    });
        

}

//Creo un solo contenedor en donde voy a ir llamando al contenido de cada Array

const contenedor = document.createElement("div");

const mostrarAct = (actividad) => {
    const { image, nombre, planes, id} = actividad;
    contenedor.classList.add('container');
    contenedor.innerHTML = "";
    contenedor.innerHTML += `
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
}

//Traigo el dato de local storage

const traerDeLocalStorage = (key) => {
    let carrito = [];
    if (localStorage.getItem(key)) {
        carrito = JSON.parse(localStorage.getItem(key));
    }
    return carrito;
}

//Guardo en local storage
const guardarEnLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

//Retorna el producto de data.js que coincida con el id
const obtenerActividad = (id) => {
    return entrenamientos.find(actividad => actividad.id == id);
}

contenedor.addEventListener("click", e => {

    //Si la etiqueta donde hicimos clic tiene la clase 'agregar'
    if (e.target.classList.contains("agregar")) {
        //Traemos al carrito de localStorage y al producto de data.js y lo agregamos al primero
        const carrito = traerDeLocalStorage("carrito");
        const act = obtenerActividad(e.target.id);
        carrito.push(act);
        
        contarActividades++;
    
        //Actualizamos localStorage
        guardarEnLocalStorage("carrito", carrito);
        //Mostramos un modal de actividad agregada
        mostrarMensaje();
    }
});

//Muestro el mensaje cada vez que agrego una actividad
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

//Esto intente hacer para mostrar el contador en la badge del carrito pero no me salió
let contarActividades = 0;
const contarActs = () => {
    carrito.forEach((actividad) => {
        contarActividades = contarActividades + parseInt(actividad.cantidad);
    })
    return contarActividades;
}

const actualizarContador = () => {
    let totalActs = contarActs();
    let countCarrito = document.querySelector("#badgeCarrito");
    countCarrito.innerHTML = totalActs;
}

const actualizarCarrito = () => {
    actualizarContador();
    mostrarAct();
    guardarEnLocalStorage();
}