const url = '../js/db.json';
const resistencia = [];
const fuerza = [];
const pesoCorporal = [];
const calma = [];


fetch(url)

.then( (respuesta) => respuesta.json())
.then( (resultado) => {
    
    entrenamientos = resultado.entrenamientos;
    actividades(resultado);
    
});


//Quise unificar esta page con la de detalle-actividades pero no pude. Queda independiente
const actividades = () => { 
    entrenamientos.forEach((entrenamientos) => {
        entrenamientos.tipo == "resistencia" && resistencia.push(new Actividad(entrenamientos)); 
        entrenamientos.tipo == "fuerza" && fuerza.push(new Actividad(entrenamientos)); 
        entrenamientos.tipo == "pesoCorporal" && pesoCorporal.push(new Actividad(entrenamientos)); 
        entrenamientos.tipo == "calma" && calma.push(new Actividad(entrenamientos)); 
    
    });

    resistencia.forEach((actividad) => {
        const contenedor = document.querySelector("#actResistencia");
        const {image, enlace, nombre } = actividad;
        const divCards = document.createElement("div");
        divCards.classList.add('col-xs-12', 'col-md-6', 'card-proyecto')
        divCards.innerHTML="";
    
        divCards.innerHTML= `<img src="../src/${image}" class="img-fluid animate__animated animate__fadeIn">
                              <a href="${enlace}">${nombre}</a>`
        
        contenedor.appendChild(divCards);
    });
    
    fuerza.forEach((actividad) => {
        const contenedor = document.querySelector("#actFuerza");
        const {image, enlace, nombre } = actividad;
        const divCards = document.createElement("div");
        divCards.classList.add('col-xs-12', 'col-md-6', 'card-proyecto')
        divCards.innerHTML="";
    
        divCards.innerHTML= `<img src="../src/${image}" class="img-fluid animate__animated animate__fadeIn">
                              <a href="${enlace}">${nombre}</a>`
        
        contenedor.appendChild(divCards);
    });
    
    pesoCorporal.forEach((actividad) => {
        const contenedor = document.querySelector("#actPesoCorporal");
        const {image, enlace, nombre } = actividad;
        const divCards = document.createElement("div");
        divCards.classList.add('col-xs-12', 'col-md-6', 'card-proyecto')
        divCards.innerHTML="";
    
        divCards.innerHTML= `<img src="../src/${image}" class="img-fluid animate__animated animate__fadeIn">
                              <a href="${enlace}">${nombre}</a>`
        
        contenedor.appendChild(divCards);
    });
    
    calma.forEach((actividad) => {
        const contenedor = document.querySelector("#actCalma");
        const {image, enlace, nombre } = actividad;
        const divCards = document.createElement("div");
        divCards.classList.add('col-xs-12', 'col-md-6', 'card-proyecto')
        divCards.innerHTML="";
    
        divCards.innerHTML= `<img src="../src/${image}" class="img-fluid animate__animated animate__fadeIn">
                              <a href="${enlace}">${nombre}</a>`
        
        contenedor.appendChild(divCards);
    })


}

