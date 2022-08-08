/**
 * Header
 */

const contenedorHeader = document.getElementsByClassName ("contenedorHeader");

const arregloLinks = new Array();

arregloLinks.push(new Link ("index.html","Home")); 
arregloLinks.push (new Link ("actividades.html","Actividades"));
arregloLinks.push (new Link ("iniciar-sesion.html", "Iniciar sesión"));
arregloLinks.push (new Link ("registrarse.html", "Registrarse"));
arregloLinks.push (new Link ("",""));

for (let i = 0; i< arregloLinks.length;i++){

    const objetoLinks = arregloLinks[i];
    crearCajaLinksHeader(objetoLinks);

}

function crearCajaLinksHeader(Link) { 

    const logo = document.createElement("a");
    logo.classList.add('navbar-brand', 'mr-auto');
    logo.setAttribute('href', Link.enlace);

    const buttonToggle = document.createElement("button");
    buttonToggle.classList.add ('navbar-toggler', 'align-self-start');

    const spanButtonToggle = documentcreateElement("span");
    spanButtonToggle.classList.add('navbar-toggler-icon');

    const contenedorLinks = document.createElement("div");
    contenedorLinks.classList.add('collapse', 'navbar-collapse', 'p-3', 'p-lg-0', 'mt-5', 'mt-lg-0', 'd-flex', 'flex-column', 'flex-lg-row', 'flex-xl-row', 'justify-content-lg-end', 'justify-content-sm-center', 'mobileMenu');
    
    const listaLinks = document.createElement("ul");
    listaLinks.classList.add('navbar-nav', 'align-self-stretch', 'nav-mb');

    const cadaLink = document.createElment("li");

    // seteo su contenido
    cadaLink.textContent = objetoLinks;

    //relaciono a la lista existente
    contenedor
    contenedorHeader.appendChild(li);

}


