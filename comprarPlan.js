/**
 * Creo un arreglo vacio.
 */

 let arregloActividades = new Array();

 /**
  * Creo todas las actividades y las guardo en un objeto.
  */
 
 arregloActividades.push(new actividadesGim("Kangoo Jumps", "12", "180"));
 arregloActividades.push(new actividadesGim("Trampolines", "16", "150"));
 arregloActividades.push(new actividadesGim("Fight do", "12", "100"));
 arregloActividades.push(new actividadesGim("Cross Fit", "16", "180"));
 arregloActividades.push(new actividadesGim("Musculación", "16", "150"));
 arregloActividades.push(new actividadesGim("Yoga", "12", "100"));
 arregloActividades.push(new actividadesGim("Streching", "8", "100"));
 arregloActividades.push(new actividadesGim("X55", "6", "100"));
 arregloActividades.push(new actividadesGim("Funcional", "12", "100"));
 arregloActividades.push(new actividadesGim("Ritmos", "12", "100"));


let respuesta2 = confirm("¿Deseas ver nuestras actividades?");

if (respuesta2) {

    actividades();
    
}

function actividades() {

    alert("Las actividades que tenemos disponibles son:"+ "\n" + mostrarActividades());

    let preguntaCompra = prompt("¿Qué actividad desea ampliar?");

    switch (preguntaCompra) {
        //Para probar solo hice Kangoo Jumps
        case "Kangoo Jumps":
        kangoo_jumps();
        break;

        case "Trampolines":
        trampolines();
        break;

        case "Fight do":
        fightDo();
        break;

        case "Cross Fit":
        crossFit();
        break;

        case "Musculacion":
        musculacion();
        break;

        case "Yoga":
        yoga();
        break;

        case "Streching":
        streching();
        break;

        case "X55":
        x55();
        break;

        case "Funcional":
        funcional();
        break;

        case "Ritmos":
        ritmos();
        break;

        default:
        let mensaje = "No ingreaste ninguna de nuestras actividades.¿Deseas ver nuestras actividades?";

        if (mensaje) {
            alert("Las actividades que tenemos disponibles son:"+ "\n" + mostrarActividades());
        } else { 
            alert("Puedes volver cuando quieras a ver nuestras actividades, te esperamos");
        }
        
    }

}  

function mostrarActividades(){

    let actividades = "";
    // Llamo a todo mi arreglo y lo recorro. Empiezo en 0 porque los array arrancan en 0 y lo muestro siempre que el arreglo sea mayor que i. 
    for (let i = 0 ; i < arregloActividades.length; i++){

        actividades += "\n" + arregloActividades[i].mostrarDetalle();

    }

    return actividades ;

}

function kangoo_jumps(){ 
    const info = "Kangoo Jumps es una actividad de alto impacto que consta de realizar una coreografía con botas. Es un actividad grupal por lo cual se recomienda hacer de manera presencial"

    const pregunta = prompt("¿Que le gustaría hacer?:\n 1) Añadir al carrito un plan \n 2) Añadir al carrito botas \n 3) Hacer una consulta \n 4) Volver al listado de actividades. \n Ingrese el número de la opción que desea ver: ");

    if (pregunta == "1" || pregunta =="2") {

        const respuesta = confirm("Inicie sesion para continuar con la compra.");

        if (respuesta) {

            iniciarSesion();

            const mensaje = confirm("¿Desea continuar a pagar?");
            if (mensaje) { 
                solicitar_datos_tarjeta();
            } else { 
                alert("Esperamos vuelva pronto");
            }

        }
    }

    if (pregunta == "3"){
        const mensajeProfe = prompt("Ingresa tu consulta y pronto recibiras un email con más info");

        if (mensajeProfe) {

            alert("Envianos tu consulta al profe a cargo y pronto recibiras un email de respuesta.");

            return mensajeProfe;
       } else {
            alert("No ingresaste una consulta");
       }

    } 

    if (pregunta == "4"){
        actividades();
    }

}

function iniciarSesion(){

    const email = prompt("Email");
    const contraseña = prompt("Ingrese una constraseña");
    /**
     * Aca quisiera ver si coincide con el de algun usuario, en este caso lo force al usuario que yo tengo creado en una variable.
     */
    if (email == emailAlumno && contraseña == contraseñaAlumno) {
        alert("¡Hola! te damos la bienvenida de nuevo!")
        
        
    } else {

        alert("Debes ingresar los datos para continuar.");

    }

}

/**
 * Funcion para validar tarjetas
 */

function solicitar_datos_tarjeta() {
    let check = true;

    while (check){ 
        let mensaje = "";
        let numeros = prompt("Ingrese el número de su tarjeta.").trim();
        let nombre = prompt ("Ingrese tu nombre de como figura en el plástico.").trim();
        let mesVencimiento = prompt ("Ingrese el mes y año de vencimiento.").trim();
        let codigoCCV = prompt ("Ingrese el código CCV que figura en el dorso de la tarjeta.").trim();
    
        /**
         * Esto lo hago para validar y dar mensajes de error.
         */
        if (!numeros) {
            mensaje += "\n Por favor, ingresa el número de la tarjeta.";
        }

        if (!nombre) {
            mensaje += "\n Por favor, ingresa tu nombre.";
        }

        if (!mesVencimiento) {
            mensaje +=  "\n Por favor, ingresa el vencimiento de tu tarjeta.";
        }

        if(!codigoCCV) {
            mensaje += "\n Por favor, ingresa el código CCV.";
        }

        if (mensaje !="") {
            alert(mensaje);
            check = confirm("¿Desea cargar de nuevo los datos de su tarjeta?");
        
        } else {
            alert("La compra se realizo con éxito.");
            return new tarjetas (numeros, nombre, mesVencimiento, codigoCCV);
        } 
    }

    return false;
}