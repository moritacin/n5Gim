/** 
 * Creo un objeto para guardar las diferentes actividades del Gim
*/

class Actividad {
    
    constructor(actividad, imagen, planes, descripcion) {
        this.actividad = actividad;
        this.imagen = imagen;
        this.planes = planes;
        this.descripcion = descripcion;
    }
    
    getActividad() {
        return (` ${this.actividad} ${this.clases} ${this.descripcion}. `);
    }

}


