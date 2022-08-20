class Actividad {
	constructor(entrenamiento) {
		const { id, tipo, actividad, enlace, image,  planes, destacado} = entrenamiento;
		this.id = id;
		this.tipo = tipo;
		this.actividad = actividad;
		this.enlace = enlace;
        this.image = image;
		this.planes = planes;
        this.destacado = destacado;
		this.cantidad = 1;
	}
}