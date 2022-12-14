
const url = './js/db.json';

const destacado = [];

fetch(url)

.then( (respuesta) => respuesta.json())
.then( (resultado) => {
    
    entrenamientos = resultado.entrenamientos;

    mostrarDestacados (resultado);

});


//Muestro solo las actividades destacadas en la home
const mostrarDestacados = () => {

    entrenamientos.forEach((entrenamientos) => {
        entrenamientos.destacado == 1 && destacado.push(new Actividad(entrenamientos)); 
    
    });

    destacado.forEach((actividad) => {
        const contenedor = document.querySelector("#actDestacadas");
        const divCards = document.createElement("div");
        divCards.classList.add('col-xs-12', 'col-md-4', 'card-proyecto')
        divCards.innerHTML="";
    
        divCards.innerHTML= `<img src="src/${actividad.image}" class="img-fluid animate__animated animate__fadeIn">
                              <a href="pages/${actividad.enlace}">${actividad.nombre}</a>`
        
        contenedor.appendChild(divCards);
    
    });

};




