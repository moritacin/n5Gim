/**
 * Datos harcodeados para hacer la comparación de si un alumno existe o no
 */

const nombreAlumno = "Cinthia Morales";
const emailAlumno = "cinmorales4@gmail.com";
const contraseñaAlumno = "1234Cin";
const fechaNacAlumno ="1994";
const pesoAlumno = parseInt(54);
const alturaAlumno = parseInt(165);

/**
 * Le pido que confirme si se registra solo para comenzar con el ejercicio. Cuando tenga el DOM esto lo hago si clickean en "Registrarse"
 */
let respuesta = confirm("¿Desea registrarse en la página?");

if (respuesta) {

    pedirDatos();
    datosOnboarding();
    
}

function pedirDatos(){
    const nombre = prompt("Nombre y apellido");
    const email = prompt("Email");
    const contraseña = prompt("Ingrese una constraseña");

    /**
     * Me aseguro de que haya ingresado algo en nombre, email y contraseña, si todo vino continuo.
     */

    if (nombre !="" && email !="" && contraseña !="") {

        //Creo un objeto de tipo alumno donde se guardaran los datos
        const objeto_alumno = new alumno (nombre, email, contraseña);
        console.log (objeto_alumno);
        objeto_alumno.bienvenida();
        
    } else if (nombre == nombreAlumno && emailAlumno == emailAlumno) {
        
        alert("Ya existe un usuario con estos datos. Por favor, ingresa otro o prueba con iniciar sesión.");
        return false;

    } else {

        alert("Debes ingresar los datos para continuar.");

    }

}

function datosOnboarding() {

    const fechaNac = prompt("Ingrese su año de nacimiento");
    const peso = prompt("Ingrese su peso");
    const altura = prompt("Ingrese su altura");


    if (fechaNac !="" && peso !="" && altura !="") {
        let objeto_alumno_onboarding = new onboarding (fechaNac,peso, altura);
        console.log(objeto_alumno_onboarding);
        objeto_alumno_onboarding.bienvenida();
        return objeto_alumno_onboarding;
    
    } else {
        alert("Ingresa tus datos");
        return false;
    }

}








