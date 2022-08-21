const fighDo = [];


//el array actividades ahora tiene objetos de la clase Actividad.
//Es de una forma fácil para no tener que estar pasando propiedades
entrenamientos.forEach((entrenamientos) => {
    entrenamientos.nombre == "Fight Do" && fighDo.push(new Actividad(entrenamientos)); 
});

fighDo.forEach((actividad) => {
    const contenedorfight = document.getElementById("contenedor-fighDo");
    const { image, nombre, planes,id} = actividad;
    contenedorfight.innerHTML = "";
	contenedorfight.innerHTML += `
                <div class="container">
                  <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <img src="../src/${image}">
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <h2>${nombre}</h2>
                        
                        <ul>

                          ${planes.map((plan) => {
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
                                    ${planes.map((plan) => {
                                        return `
                                        <option value="${plan.id}">${plan.plan}</option>`
                                    
                                    })}
                                    </select>
                                </div>
                        </div>
                        <button class="button button-filled extreme"><a href="javascript:addCarrito(${id} ${planes.plan})">Agregar al carrito</a></button>
                    </div>
                  </div>
                </div>
                `;
});

