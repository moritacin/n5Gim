class GestionarActividad {

    iniciar () {

        actividades = [
            { 
                "id": 1, 
                "tipo": "resistencia",
                "actividad": "Kangoo Jumps",
                "enlace": "kangoo-jumps.html",
                "image": "../src/kangoo-jumps.png",
                "planes": [
                            { 
                                "plan":"Principiante", 
                                "detalle": "Una vez a la semana, 45 minutos de actividad.",
                            },
                            { 
                                "plan":"Intermedio", 
                                "detalle": "Dos veces a la semana, 45 minutos de actividad.",
                            },
                            { 
                                "plan":"Avanzando", 
                                "detalle": "Tres veces a la semana, 45 minutos de actividad.",
                            },
                        ],
            },
            {
                "id": 2, 
                "tipo": "resistencia",
                "actividad": "Trampolines",
                "enlace": "trampolines.html",
                "image": "../src/trampolines.png",
                "planes": [
                            { 
                                "plan":"Principiante", 
                                "detalle": "Una vez a la semana, 45 minutos de actividad.",
                            },
                            { 
                                "plan":"Intermedio", 
                                "detalle": "Dos veces a la semana, 45 minutos de actividad.",
                            },
                            { 
                                "plan":"Avanzando", 
                                "detalle": "Tres veces a la semana, 45 minutos de actividad.",
                            },
                        ],
            },
            {
                "id": 3, 
                "tipo": "resistencia",
                "actividad": "X55",
                "enlace": "x55.html",
                "image": "../src/x55.png",
                "planes": [
                            { 
                                "plan":"Principiante", 
                                "detalle": "Una vez a la semana, 45 minutos de actividad.",
                            },
                            { 
                                "plan":"Intermedio", 
                                "detalle":"Dos veces a la semana, 45 minutos de actividad.",
                            },
                            { 
                                "plan":"Avanzando", 
                                "detalle": "Tres veces a la semana, 45 minutos de actividad.",
                            },
                         ],
            },
            {
                "id": 4, 
                "tipo": "resistencia",
                "actividad": "Funcional",
                "enlace": "funcional.html",
                "image": "../src/funcional.png",
                "planes": [
                    { 
                        "plan":"Principiante", 
                        "detalle": "Una vez a la semana, 45 minutos de actividad.",
                    },
                    { 
                        "plan":"Intermedio", 
                        "detalle": "Dos veces a la semana, 45 minutos de actividad.",
                    },
                    { 
                        "plan":"Avanzando", 
                        "detalle": "Tres veces a la semana, 45 minutos de actividad.",
                    },
                ],
            },
            {
                "id": 5, 
                "tipo": "fuerza",
                "actividad": "Cross Fit",
                "enlace": "cross-fit.html",
                "image": "../src/cross-fit.png",
                "planes": [
                    { 
                        "plan":"Principiante", 
                        "detalle": "Una vez a la semana, 45 minutos de actividad.",
                    },
                    { 
                        "plan":"Intermedio", 
                        "detalle": "Dos veces a la semana, 45 minutos de actividad.",
                    },
                    { 
                        "plan":"Avanzando", 
                        "detalle": "Tres veces a la semana, 45 minutos de actividad.",
                    },
                ],
            },
            {
                "id": 6, 
                "tipo": "fuerza",
                "actividad": "musculación",
                "enlace": "musculacion.html",
                "image": "../src/musculacion.png",
                "planes": [
                    { 
                        "plan":"Principiante", 
                        "detalle": "Dos veces a la semana, 45 minutos de actividad.",
                    },
                    { 
                        "plan":"Intermedio", 
                        "detalle": "Tres veces a la semana, 1 hora de actividad.",
                    },
                    { 
                        "plan":"Avanzando", 
                        "detalle": "Cuatro veces a la semana, 1 hora de actividad.",
                    },
                ],
            },
            {
                "id": 7, 
                "tipo": "pesoCorporal",
                "actividad": "Fight Do",
                "enlace": "fight-do.html",
                "image": "../src/fight-do.png",
                "planes": [
                    { 
                        "plan":"Principiante", 
                        "detalle": "Dos veces a la semana, 45 minutos de actividad.",
                    },
                    { 
                        "plan":"Intermedio", 
                        "detalle": "Tres veces a la semana, 1 hora de actividad.",
                    },
                    { 
                        "plan":"Avanzando", 
                        "detalle": "Cuatro veces a la semana, 1 hora de actividad.",
                    },
                ],
            },
            {
                "id": 8, 
                "tipo": "pesoCorporal",
                "actividad": "Zumba",
                "enlace": "zumba.html",
                "image": "../src/zumba.png",
                "planes": [
                    { 
                        "plan":"Principiante", 
                        "detalle": "Dos veces a la semana, 45 minutos de actividad.",
                    },
                    { 
                        "plan":"Intermedio", 
                        "detalle": "Tres veces a la semana, 1 hora de actividad.",
                    },
                    { 
                        "plan":"Avanzando", 
                        "detalle": "Cuatro veces a la semana, 1 hora de actividad.",
                    },
                ],
            },
            {
                "id": 9, 
                "tipo": "calma",
                "actividad": "Yoga",
                "enlace": "yoga.html",
                "image": "../src/yoga.png",
                "planes": [
                    { 
                        "plan":"Principiante", 
                        "detalle": "Una vez a la semana, 1 hora de actividad.",
                    },
                    { 
                        "plan":"Intermedio", 
                        "detalle": "Dos veces a la semana, 1 hora de actividad.",
                    },
                    { 
                        "plan":"Avanzando", 
                        "detalle": "Tres veces a la semana, 1:30 hora de actividad.",
                    },
                ],
            },
            {
                "id": 10, 
                "tipo": "calma",
                "actividad": "Streching",
                "enlace": "streching.html",
                "image": "../src/streching.png",
                "planes": [
                    { 
                        "plan":"Principiante", 
                        "detalle": "Una vez a la semana, 45 minutos de actividad.",
                    },
                    { 
                        "plan":"Intermedio", 
                        "detalle": "Dos veces a la semana, 45 minuto de actividad.",
                    },
                    { 
                        "plan":"Avanzando", 
                        "detalle": "Tres veces a la semana, 1 hora de actividad.",
                    },
                ],
            }

        ]
        // Card destacados en la home.

        /**
         *         const actividadesResistencia = actividades.filter (e => e.tipo == "resistencia" );
        const actividadesFuerza = actividades.filter (e => e.tipo == "fuerza" ); 
        const actividadesPesoCorporal = actividades.filter (e => e.tipo == "pesoCorporal" );
        const actividadesCalma = actividades.filter (e => e.tipo == "calma" );

        this.cardActividadesResistencia(actividadesResistencia);
        this.cardActividadesFuerza(actividadesFuerza);
        this.cardActividadesPesoCorporal(actividadesPesoCorporal);
        this.cardActividadesCalma(actividadesCalma);
        
         */
        
        const kangooJumps = actividades.filter (e => e.actividad == "Kangoo Jumps");
        const trampolines = actividades.filter (e => e.actividad == "Trampolines");
        const funcional = actividades.filter (e => e.actividad == "Funcional");
        const x55 = actividades.filter (e => e.actividad == "X55");
        const crossFit = actividades.filter (e => e.actividad == "Cross Fit");
        const musculacion = actividades.filter (e => e.actividad == "Musculación");
        const fightDo = actividades.filter (e => e.actividad == "Fight Do");
        const zumba = actividades.filter (e => e.actividad == "Zumba");
        const yoga = actividades.filter (e => e.actividad == "Yoga");
        const streching = actividades.filter (e => e.actividad == "Streching");

        

        this.kangooJumps(kangooJumps);
        this.trampolines(trampolines);
        this.funcional(funcional);
        this.x55(x55);
        this.crossFit(crossFit);
        this.musculacion(musculacion);
        this.fightDo(fightDo);
        this.zumba(zumba);
        this.yoga(yoga);
        this.streching(streching);


        this.mostrarCarrito();
        this.actualizarContador();
    }

    //Funcion encargada de cargar las Cards destacada en actividades



    /**
     *  cardActividadesResistencia(actividadesResistencia) {
        actividadesResistencia.forEach( (actividadesResistencia) => {

        const actividades = document.querySelector ("#actividadesResistencia");
    
        const contenedorActividad = document.createElement("div");
        contenedorActividad.classList.add('col-sm-12', 'col-md-6', 'card-proyecto');
                
        const imageActividad = document.createElement("img");
        imageActividad.setAttribute("src", actividadesResistencia.image);
            
        //Le doy estilo a las imagenes
        imageActividad.classList.add('img-fluid');
            
        const nombreActividad = document.createElement("a");
        nombreActividad.textContent = actividadesResistencia.actividad;
        nombreActividad.setAttribute("href", actividadesResistencia.enlace);
            
        contenedorActividad.appendChild(nombreActividad);
        contenedorActividad.appendChild(imageActividad);
             
        actividades.appendChild(contenedorActividad);
    
                
        });
    }

    cardActividadesFuerza(actividadesFuerza) {
        actividadesFuerza.forEach( (actividadesFuerza) => {

        const actividades = document.querySelector ("#actividadesFuerza");
    
        const contenedorActividad = document.createElement("div");
        contenedorActividad.classList.add('col-sm-12', 'col-md-6', 'card-proyecto');
                
        const imageActividad = document.createElement("img");
        imageActividad.setAttribute("src", actividadesFuerza.image);
            
        //Le doy estilo a las imagenes
        imageActividad.classList.add('img-fluid');
            
        const nombreActividad = document.createElement("a");
        nombreActividad.textContent = actividadesFuerza.actividad;
        nombreActividad.setAttribute("href", actividadesFuerza.enlace);
            
        contenedorActividad.appendChild(nombreActividad);
        contenedorActividad.appendChild(imageActividad);
             
        actividades.appendChild(contenedorActividad);
    
                
        });
    }

    cardActividadesPesoCorporal(actividadesPesoCorporal) {
        actividadesPesoCorporal.forEach( (actividadesPesoCorporal) => {

        const actividades = document.querySelector ("#actividadesPesoCorporal");
    
        const contenedorActividad = document.createElement("div");
        contenedorActividad.classList.add('col-sm-12', 'col-md-6', 'card-proyecto');
                
        const imageActividad = document.createElement("img");
        imageActividad.setAttribute("src", actividadesPesoCorporal.image);
            
        //Le doy estilo a las imagenes
        imageActividad.classList.add('img-fluid');
            
        const nombreActividad = document.createElement("a");
        nombreActividad.textContent = actividadesPesoCorporal.actividad;
        nombreActividad.setAttribute("href", actividadesPesoCorporal.enlace);
            
        contenedorActividad.appendChild(nombreActividad);
        contenedorActividad.appendChild(imageActividad);
             
        actividades.appendChild(contenedorActividad);
    
                
        });
    }

    cardActividadesCalma(actividadesCalma) {
        actividadesCalma.forEach( (actividadesCalma) => {

        const actividades = document.querySelector ("#actividadesCalma");
    
        const contenedorActividad = document.createElement("div");
        contenedorActividad.classList.add('col-sm-12', 'col-md-6', 'card-proyecto');
                
        const imageActividad = document.createElement("img");
        imageActividad.setAttribute("src", actividadesCalma.image);
            
        //Le doy estilo a las imagenes
        imageActividad.classList.add('img-fluid');
            
        const nombreActividad = document.createElement("a");
        nombreActividad.textContent = actividadesCalma.actividad;
        nombreActividad.setAttribute("href", actividadesCalma.enlace);
            
        contenedorActividad.appendChild(nombreActividad);
        contenedorActividad.appendChild(imageActividad);
             
        actividades.appendChild(contenedorActividad);
    
                
        });
    }
     * 
     */
       
 
   

    kangooJumps(kangooJumps) {
        
        this.detalle (kangooJumps);
    }

    trampolines(trampolines) {
        this.detalle(trampolines);
    }

    funcional(funcional) {
        this.detalle (funcional);
    }

    x55(x55) {
        this.detalle(x55);
    }

    crossFit(crossFit) {
        this.detalle(crossFit);
    }

    musculacion(musculacion) {
        this.detalle(musculacion);
    }
    
    fightDo(fightDo) {
        this.detalle(fightDo);
    }

    zumba(zumba) {
        this.detalle(zumba);
    }

    yoga(yoga) {
        this.detalle(yoga);
    }

    streching(streching) {
        this.detalle(streching);
    }


    detalle(actividades) {

        actividades.forEach( (actividades) => {

        const divAct = document.querySelector(".actividad");

        const divImage = document.createElement("div");
        divImage.classList.add('col-xs-12', 'col-lg-6');

        const image = document.createElement("img");
        image.setAttribute("src", actividades.image);

        divImage.appendChild(image);
        divAct.appendChild(divImage);

        const divDetalle = document.createElement("div");
        divDetalle.classList.add('col-xs-12', 'col-lg-6');

        const h1Act = document.createElement("h1");
        h1Act.textContent = actividades.actividad;

        const divPlan = document.createElement("div");
        divPlan.innerHTML = `  <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                ${actividades.planes.plan}
                                </label>
                                <p>
                                ${actividades.planes.detalle}
                                </p>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                ${actividades.planes.plan}
                                </label>
                                <p>
                                ${actividades.planes.detalle}
                                </p>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                ${actividades.planes.plan}
                                </label>
                                <p>
                                ${actividades.planes.detalle}
                                </p>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="formGroupExampleInput">Modalidad</label>
                                    <input type="text" class="form-control" name="nombre" id="nombre">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="formGroupExampleInput">Plan</label>
                                    <input type="text" class="form-control" name="mail" id="mail">
                                </div>
                                <button id="actividades" class="button button-filled extreme"><a href="javascript:addCarrito(${actividades.id})"">Agregar al carrito</a></button>
                            </div>` 
                            
        divDetalle.appendChild(h1Act);
        divDetalle.appendChild(divPlan);
        divAct.appendChild(divDetalle);

    });
}

 
}

