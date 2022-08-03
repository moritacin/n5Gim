/** 
 * Creo un objeto para guardar las diferentes actividades del Gim
*/

class actividadesGim {
    
    constructor(actividad, clases, precio,) {
        this.actividad = actividad;
        this.clases = parseFloat(clases);
        this.precio = parseFloat(precio);
    }
    
    mostrarDetalle() {
        return (`- La actividad ${this.actividad}, tiene ${this.clases} clases cada una a $${this.precio} cada una. \n `);
    }

}


