/** 
 * Creo un objeto para guardar los datos que le vamos a pedir en el onboarding
*/
class onboarding {

    constructor(fechaNac, peso, altura) {
        this.fechaNac = fechaNac;
        this.peso = peso;
        this.altura = altura;
    }

    bienvenida(){
        alert("Gracias por completar tus datos. Ahora puedes ver nuestras actividades disponibles.");
    }


}