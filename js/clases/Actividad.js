class Actividad {
	constructor(entrenamiento) {
		const { id, tipo, nombre, enlace, image,  planes, destacado} = entrenamiento;
		this.id = id;
		this.tipo = tipo;
		this.nombre = nombre;
		this.enlace = enlace;
        this.image = image;
		this.planes = planes;
        this.destacado = destacado;
		this.cantidad = 1;
	}
}