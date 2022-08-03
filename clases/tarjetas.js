/** 
 * Creo un objeto para guardar las diferentes actividades del Gim
*/
/** 
 * Creo un objeto tarjetas para que se pueda hacer la compra
*/
class tarjetas {
    
    constructor(numeros, nombre, mesVencimiento,codigoCCV) {
        this.numeros = numeros;
        this.nombre = nombre;
        this.mesVencimiento = parseFloat(mesVencimiento);
        this.codigoCCV = parseFloat(codigoCCV);
    }

}