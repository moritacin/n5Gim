const destacado = [];

entrenamientos.forEach((entrenamientos) => {
    if (entrenamientos.destacado == 1) {
        destacado.push(new Actividad (entrenamientos));
    }

});

destacado.forEach((actividad) => {
    const contenedor = document.querySelector("#actDestacadas");
    const contenedorActividad = document.createElement("div");

    contenedorActividad.classList.add('col-sm-12', 'col-md-4', 'card-proyecto');
                
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