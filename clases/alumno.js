/** 
 * Creo un objeto para guardar los alumnos del gim
*/
class alumno {
    constructor(nombre,email,contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
    bienvenida() {
        alert(`Hola, ${this.nombre}, ¡te damos la bienvenida! vas a poder: 
        \n - acceder a actividades en vivo, 
        \n - comprar elementos, 
        \n - gestionar turnos para sucursales, 
        \n y mucho más.`)
    }
}


