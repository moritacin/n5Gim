const resistencia = [];
const fuerza = [];
const pesoCorporal = [];
const calma = [];

//el array actividades ahora tiene objetos de la clase Actividad.
//Es de una forma fácil para no tener que estar pasando propiedades
entrenamientos.forEach((entrenamientos) => {
    if (entrenamientos.tipo == "resistencia") {
        resistencia.push(new Actividad(entrenamientos));
    }
    if (entrenamientos.tipo == "fuerza") {
        fuerza.push(new Actividad(entrenamientos));
    }
    if (entrenamientos.tipo == "pesoCorporal") {
        pesoCorporal.push(new Actividad(entrenamientos));
    }
    if(entrenamientos.tipo == "calma") {
        calma.push(new Actividad(entrenamientos));
    }

});

resistencia.forEach((actividad) => {
    const contenedor = document.querySelector("#actResistencia");
    const contenedorActividad = document.createElement("div");

    contenedorActividad.classList.add('col-sm-12', 'col-md-6', 'card-proyecto');
                
    const imageActividad = document.createElement("img");
    imageActividad.setAttribute("src", actividad.image);
        
    //Le doy estilo a las imagenes
    imageActividad.classList.add('img-fluid');
        
    const nombreActividad = document.createElement("a");
    nombreActividad.textContent = actividad.actividad;
    nombreActividad.setAttribute("href", actividad.enlace);
        
    contenedorActividad.appendChild(nombreActividad);
    contenedorActividad.appendChild(imageActividad);
    contenedor.appendChild(contenedorActividad);
});



fuerza.forEach((actividad) => {
    const contenedor = document.querySelector("#actFuerza");
    const contenedorActividad = document.createElement("div");

    contenedorActividad.classList.add('col-sm-12', 'col-md-6', 'card-proyecto');
                
    const imageActividad = document.createElement("img");
    imageActividad.setAttribute("src", actividad.image);
        
    //Le doy estilo a las imagenes
    imageActividad.classList.add('img-fluid');
        
    const nombreActividad = document.createElement("a");
    nombreActividad.textContent = actividad.actividad;
    nombreActividad.setAttribute("href", actividad.enlace);
        
    contenedorActividad.appendChild(nombreActividad);
    contenedorActividad.appendChild(imageActividad);
    contenedor.appendChild(contenedorActividad);
});

pesoCorporal.forEach((actividad) => {
    const contenedor = document.querySelector("#actPesoCorporal");
    const contenedorActividad = document.createElement("div");

    contenedorActividad.classList.add('col-sm-12', 'col-md-6', 'card-proyecto');
                
    const imageActividad = document.createElement("img");
    imageActividad.setAttribute("src", actividad.image);
        
    //Le doy estilo a las imagenes
    imageActividad.classList.add('img-fluid');
        
    const nombreActividad = document.createElement("a");
    nombreActividad.textContent = actividad.actividad;
    nombreActividad.setAttribute("href", actividad.enlace);
        
    contenedorActividad.appendChild(nombreActividad);
    contenedorActividad.appendChild(imageActividad);
    contenedor.appendChild(contenedorActividad);
});

calma.forEach((actividad) => {
    const contenedor = document.querySelector("#actCalma");
    const contenedorActividad = document.createElement("div");

    contenedorActividad.classList.add('col-sm-12', 'col-md-6', 'card-proyecto');
                
    const imageActividad = document.createElement("img");
    imageActividad.setAttribute("src", actividad.image);
        
    //Le doy estilo a las imagenes
    imageActividad.classList.add('img-fluid');
        
    const nombreActividad = document.createElement("a");
    nombreActividad.textContent = actividad.actividad;
    nombreActividad.setAttribute("href", actividad.enlace);
        
    contenedorActividad.appendChild(nombreActividad);
    contenedorActividad.appendChild(imageActividad);
    contenedor.appendChild(contenedorActividad);
});

