//Home: En cada bloque detallo el contenido que tiene la home.

/**
 * Hero
*/

const arregloHeroHome = new Array ();
arregloHeroHome.push(new estructuraHeroRight ("Title", "Body", "Registrarse","../src/hero-home.png"))

const heroHome = document.getElementById("heroHome");

for (let i = 0; i< arregloHeroHome.length;i++){

    const objetoHeroHome = arregloHeroHome[i];
    crearCajaHeroHome(objetoHeroHome);

}

function crearCajaHeroHome(estructuraHeroRight) {

    //Creo 3 contenedores

    const contenedorLeftHeroHome = document.createElement("div");
    const contenedorRightHeroHome = document.createElement("div");
    
    //Le doy estilo al contenedor 1

    contenedorLeftHeroHome.classList.add('col-xs-12', 'col-md-5', 'extra-padding');

    //Creo un Title, un Body y un Button al contenedor 1

    const titleHeroHome = document.createElement("h1");
    titleHeroHome.textContent = estructuraHeroRight.title;
    titleHeroHome.textContent = "Animate a entrenar con pasión"

    const parragraphHeroHome = document.createElement("p");
    parragraphHeroHome.textContent = estructuraHeroRight.body;
    parragraphHeroHome.textContent = "Actividades online y presenciales, instalaciones modernas y el mejor acompañamiento profesional."


    const buttonHeroHome = document.createElement("button");
    buttonHeroHome.classList.add('button', 'button-filled');

    buttonHeroHome.innerHTML=`<a href="registrarse.html">${estructuraHeroRight.button}</a>`;

    //Le agrego sus childs
    contenedorLeftHeroHome.appendChild(titleHeroHome);
    contenedorLeftHeroHome.appendChild(parragraphHeroHome);
    contenedorLeftHeroHome.appendChild(buttonHeroHome);

    //Lo agrego al componente creado en el hmtl
    heroHome.appendChild(contenedorLeftHeroHome);

    //Le doy estilo al contenedor 2

    contenedorRightHeroHome.classList.add('col-xs-12', 'col-md-7');

    //Asigno una imagen al contenedor 2
    
    const imgHeroHome = document.createElement("img");
    imgHeroHome.setAttribute("src",estructuraHeroRight.image);
    imgHeroHome.classList.add('img-fluid', 'animate__animated', 'animate__fadeIn');

    //Le agrego sus childs
    contenedorRightHeroHome.appendChild(imgHeroHome);

    //Lo agrego al componente creado en el hmtl
    heroHome.appendChild(contenedorRightHeroHome);
     
}

/**
 * Nosotros
*/

const arregloNosotros = new Array ();
arregloNosotros.push(new estructuraNosotrosHome ("../src/about-n5-home.png", "Descripción", "Nosotros"));

const nosotrosHome = document.getElementById("nosotrosHome");

for (let i = 0; i< arregloNosotros.length;i++){

    const objetoNosotros = arregloNosotros[i];
    crearCajaNosotros(objetoNosotros);

}

function crearCajaNosotros(estructuraNosotrosHome) {

    //Creo 3 contenedores

    const contenedorLeftNosotrosHome = document.createElement("div");
    const contenedorVacioNosotrosHome = document.createElement("div");
    const contenedorRightNosotrosHome = document.createElement("div");
    
    //Le doy estilo al contenedor 1

    contenedorLeftNosotrosHome.classList.add('col-xs-12', 'col-md-6');

    //Asigno una imagen al contenedor 1

    const imgNosotrosHome = document.createElement("img");
    imgNosotrosHome.setAttribute("src",estructuraNosotrosHome.image);
    imgNosotrosHome.classList.add('img-fluid', 'animate__animated', 'animate__fadeIn');

    contenedorLeftNosotrosHome.appendChild(imgNosotrosHome);
    
    //Lo agrego al componente creado en el hmtl
    nosotrosHome.appendChild(contenedorLeftNosotrosHome);


    //Asigno estilo al contenedor 2
    contenedorVacioNosotrosHome.classList.add('col-md-1');

    //Lo agrego al componente creado en el hmtl
    nosotrosHome.appendChild(contenedorVacioNosotrosHome);


    //Asigno estilo al contenedor 3
    contenedorRightNosotrosHome.classList.add('col-xs-12', 'col-md-4', 'extra-padding');

    //Creo un body y un button al contenedor 3

    const nosotrosBody = document.createElement("p");
    nosotrosBody.textContent = estructuraNosotrosHome.body;
    nosotrosBody.textContent = "N5 es más que un gimnasio, es una comunidad de alumnos que aman entrenar. Es encuentro con amigos y lugar donde se crean vínculos. Vení a conocer esta gran comunidad que tiene actividades para todas las edades. "

    const buttonNosotros = document.createElement("button");
    buttonNosotros.classList.add('button', 'button-text');

    buttonNosotros.innerHTML=`<a href="nosotros.html">${estructuraNosotrosHome.button}</a>`;

    //Mouseover
    buttonNosotros.addEventListener('mouseover', () => {
    buttonNosotros.style.backgroundColor = " rgba(255, 173, 98, 0.08)";
    })    
    //Mouseout
    buttonNosotros.addEventListener('mouseout', () => {
    buttonNosotros.style.backgroundColor = "transparent";
   
        })

    contenedorRightNosotrosHome.appendChild(nosotrosBody);
    contenedorRightNosotrosHome.appendChild(buttonNosotros);

    //Lo agrego al componente creado en el hmtl
    nosotrosHome.appendChild(contenedorRightNosotrosHome);
     
}


/**
 * Actividades más populares
 */

//Llamo al elemento creado en html
const contenedorTitleActividadesHome = document.getElementById("contenedorTitleActividadesHome");

//Le creo un contenedor donde se va a alojar el h2
const divActividadesH2 = document.createElement("div");
divActividadesH2.classList.add('col-xs-12', 'col-md-5');

const actividadesH2 = document.createElement("h2");
actividadesH2.textContent = "Nuestras actividades más populares";

divActividadesH2.appendChild(actividadesH2);

//Creo otro contenedor vacio
const divVacioActividadesH2 = document.createElement("div");

divVacioActividadesH2.classList.add('col-xs-12', 'col-md-7');

contenedorTitleActividadesHome.appendChild(divActividadesH2);
contenedorTitleActividadesHome.appendChild(divVacioActividadesH2);

//Creo un objeto para las Cards de actividades

const arregloActividades = new Array ();

arregloActividades.push(new Card ("kangoo-jumps.html", "../src/kangoo-jumps.png", "Kangoo Jumps"));
arregloActividades.push(new Card("cross-fit.html", "../src/cross-fit.png", "Cross Fit"));
arregloActividades.push(new Card("funcional.html", "../src/funcional.png", "Funcional"));

//Llamo al elemento creado en html
const cardsActividadesHome = document.getElementById("cardsActividadesHome");

//Recorro mi arreglo de objetos Cards

for (let i = 0; i< arregloActividades.length;i++){

    const objetoActividadesHome = arregloActividades[i];
    crearCajaActividadesHome(objetoActividadesHome);

}

//Creo 3 contenedores donde iran mis Cards

function crearCajaActividadesHome(Card) {

    const contenedorActividad = document.createElement("div");

    //Le doy estilo al contenedor 1
    contenedorActividad.classList.add('col-sm-12', 'col-md-4', 'card-proyecto');
    
    const imageActividad = document.createElement("img");
    imageActividad.setAttribute("src",Card.image);

    //Le doy estilo a las imagenes
    imageActividad.classList.add('img-fluid');

    const nombreActividad = document.createElement("a");
    nombreActividad.textContent = Card.getTitle();
    nombreActividad.setAttribute("href", Card.enlace);

    contenedorActividad.appendChild(nombreActividad);
    contenedorActividad.appendChild(imageActividad);
 
    cardsActividadesHome.appendChild(contenedorActividad);
     
}

/**
 * Donde puedes encontrarnos
 */

//Llamo al elemento creado en html
const contenedorTitleDondeEncontrarnos = document.getElementById("contenedorTitleDondeEncontrarnos");

//Creo otro contenedor vacio
const divVacioDondeEncontrarionH2 = document.createElement("div");
divVacioDondeEncontrarionH2.classList.add('col-xs-12', 'col-md-9');

//Le creo un contenedor donde se va a alojar el h2

const divDondeEncontrarnosH2 = document.createElement("div");
divDondeEncontrarnosH2.classList.add('col-xs-12', 'col-md-3');

const modalidadesH2 = document.createElement("h2");
modalidadesH2.textContent = "Donde puedes encontrarnos";
modalidadesH2.classList.add('align-right');

divDondeEncontrarnosH2.appendChild(modalidadesH2);

contenedorTitleDondeEncontrarnos.appendChild(divVacioDondeEncontrarionH2);
contenedorTitleDondeEncontrarnos.appendChild(divDondeEncontrarnosH2);

//Creo un array de objetos para las cards de encontrarnos

const arregloModalidades = new Array ();

arregloModalidades.push(new Card("sucursal.html", "../src/sucursal.png", "Presencial"));
arregloModalidades.push(new Card("online.html", "../src/online.png", "Online"));

//Llamo al elemento creado en html
const cardsModalidadesHome = document.getElementById("cardsModalidadesHome");

//Recorro mi arreglo de objetos Cards

for (let i = 0; i< arregloModalidades.length;i++){

    const objetoModalidadesHome = arregloModalidades[i];
    crearCajaModalidadesHome(objetoModalidadesHome);

}

//Creo 3 contenedores donde iran mis Cards

function crearCajaModalidadesHome(Card) {

    let contenedorModalidad = document.createElement("div");

    //Le doy estilo al contenedor 1
    contenedorModalidad .classList.add('col-sm-12', 'col-md-6', 'card-proyecto');
    
    const imageModalidad = document.createElement("img");
    imageModalidad .setAttribute("src",Card.image);

    //Le doy estilo a las imagenes
    imageModalidad .classList.add('img-fluid');

    const nombreModalidad  = document.createElement("a");
    nombreModalidad .textContent = Card.getTitle();
    nombreModalidad .setAttribute("href", Card.enlace);

    contenedorModalidad .appendChild(nombreModalidad );
    contenedorModalidad .appendChild(imageModalidad );
 
    cardsModalidadesHome.appendChild(contenedorModalidad );
     
}

