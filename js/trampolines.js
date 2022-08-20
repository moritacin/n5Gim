const trampolines = [];


//el array actividades ahora tiene objetos de la clase Actividad.
//Es de una forma fácil para no tener que estar pasando propiedades
entrenamientos.forEach((entrenamientos) => {
    if (entrenamientos.actividad == "Trampolines") {
        trampolines.push(new Actividad(entrenamientos));
    }

});

//Kangoo Jumps

trampolines.forEach((actividad) => {
    const contenedor = document.getElementById("contenedor-trampolines");

    contenedor.innerHTML = "";
	contenedor.innerHTML += `
                <div class="container">
                  <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <img src="../src/${actividad.image}">
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <h2>${actividad.actividad}</h2>
                        
                        <ul>

                          ${actividad.planes.map((plan) => {
									return `
                                    <li>
                                        <strong>${plan.plan}</strong> <br> ${plan.detalle}<br> Precio: $ ${plan.precio}
                                    </li>`;
								})}
                        </ul>
                        
                        <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="formGroupExampleInput">Modalidad</label>
                                    <select class="form-select extreme" aria-label="Default select example">
                                        <option value="1">Presencial</option>
                                        <option value="2">Online</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="formGroupExampleInput">Plan</label>
                                    <select class="form-select extreme" aria-label="Default select example">
                                    ${actividad.planes.map((plan) => {
                                        return `
                                        <option value="${plan.id}">${plan.plan}</option>`
                                    
                                    })}
                                    </select>
                                </div>
                        </div>
                        <button class="button button-filled extreme"><a href="javascript:addCarrito)"">Agregar al carrito</a></button>
                    </div>
                  </div>
                </div>
                `;
});