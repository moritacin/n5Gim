class Card {

    constructor (enlace, image, actividad) {
        this.enlace = enlace;
        this.image = image;
        this.actividad = actividad;
    }

    getTitle() {
        return this.actividad; 
    }

}