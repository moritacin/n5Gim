const entrenamientos = [
	{
		id: 1,
		tipo: "resistencia",
		nombre: "Kangoo Jumps",
		enlace: "kangoo-jumps.html",
		image: "kangoo-jumps.png",
		planes: [
			{
				plan: "Principiante",
				detalle: "Una vez a la semana, 45 minutos de actividad.",
				precio: 1500,
				id: 1,
			},
			{
				plan: "Intermedio",
				detalle: "Dos veces a la semana, 45 minutos de actividad.",
				precio: 1800,
				id: 2,
			},
			{
				plan: "Avanzando",
				detalle: "Tres veces a la semana, 45 minutos de actividad.",
				precio: 2300,
				id:3,
			},
		],
		destacado: 1,
	},
	{
		id: 2,
		tipo: "resistencia",
		nombre: "Trampolines",
		enlace: "trampolines.html",
		image: "trampolines.png",
		planes: [
			{
				plan: "Principiante",
				detalle: "Una vez a la semana, 45 minutos de actividad.",
				precio: 1500,
			},
			{
				plan: "Intermedio",
				detalle: "Dos veces a la semana, 45 minutos de actividad.",
				precio: 1800,
			},
			{
				plan: "Avanzando",
				detalle: "Tres veces a la semana, 45 minutos de actividad.",
				precio: 2300,
			},
		],
		destacado: 0,
	},
	{
		id: 3,
		tipo: "resistencia",
		nombre: "X55",
		enlace: "x55.html",
		image: "x55.png",
		planes: [
			{
				plan: "Principiante",
				detalle: "Una vez a la semana, 45 minutos de actividad.",
				precio: 1500,
			},
			{
				plan: "Intermedio",
				detalle: "Dos veces a la semana, 45 minutos de actividad.",
				precio: 1800,
			},
			{
				plan: "Avanzando",
				detalle: "Tres veces a la semana, 45 minutos de actividad.",
				precio: 2300,
			},
		],
		destacado: 0,
	},
	{
		id: 4,
		tipo: "resistencia",
		nombre: "Funcional",
		enlace: "funcional.html",
		image: "funcional.png",
		planes: [
			{
				plan: "Principiante",
				detalle: "Una vez a la semana, 45 minutos de actividad.",
				precio: 1500,
			},
			{
				plan: "Intermedio",
				detalle: "Dos veces a la semana, 45 minutos de actividad.",
				precio: 1800,
			},
			{
				plan: "Avanzando",
				detalle: "Tres veces a la semana, 45 minutos de actividad.",
				precio: 2300,
			},
		],
		destacado: 0,
	},
	{
		id: 5,
		tipo: "fuerza",
		nombre: "Cross Fit",
		enlace: "cross-fit.html",
		image: "cross-fit.png",
		planes: [
			{
				plan: "Principiante",
				detalle: "Una vez a la semana, 45 minutos de actividad.",
				precio: 1500,
			},
			{
				plan: "Intermedio",
				detalle: "Dos veces a la semana, 45 minutos de actividad.",
				precio: 1800,
			},
			{
				plan: "Avanzando",
				detalle: "Tres veces a la semana, 45 minutos de actividad.",
				precio: 2300,
			},
		],
		destacado: 1,
	},
	{
		id: 6,
		tipo: "fuerza",
		nombre: "Musculación",
		enlace: "musculacion.html",
		image: "musculacion.png",
		planes: [
			{
				plan: "Principiante",
				detalle: "Dos veces a la semana, 45 minutos de actividad.",
				precio: 1200,
			},
			{
				plan: "Intermedio",
				detalle: "Tres veces a la semana, 1 hora de actividad.",
				precio: 1500,
			},
			{
				plan: "Avanzando",
				detalle: "Cuatro veces a la semana, 1 hora de actividad.",
				precio: 2000,
			},
		],
		destacado: 0,
	},
	{
		id: 7,
		tipo: "pesoCorporal",
		nombre: "Fight Do",
		enlace: "fight-do.html",
		image: "fight-do.png",
		planes: [
			{
				plan: "Principiante",
				detalle: "Dos veces a la semana, 45 minutos de actividad.",
				precio: 1500,
			},
			{
				plan: "Intermedio",
				detalle: "Tres veces a la semana, 1 hora de actividad.",
				precio: 1800,
			},
			{
				plan: "Avanzando",
				detalle: "Cuatro veces a la semana, 1 hora de actividad.",
				precio: 2200,
			},
		],
		destacado: 1,
	},
	{
		id: 8,
		tipo: "pesoCorporal",
		nombre: "Zumba",
		enlace: "zumba.html",
		image: "zumba.png",
		planes: [
			{
				plan: "Principiante",
				detalle: "Dos veces a la semana, 45 minutos de actividad.",
				precio: 1200,
			},
			{
				plan: "Intermedio",
				detalle: "Tres veces a la semana, 1 hora de actividad.",
				precio: 1500,
			},
			{
				plan: "Avanzando",
				detalle: "Cuatro veces a la semana, 1 hora de actividad.",
				precio: 2000,
			},
		],
		destacado: 0,
	},
	{
		id: 9,
		tipo: "calma",
		nombre: "Yoga",
		enlace: "yoga.html",
		image: "yoga.png",
		planes: [
			{
				plan: "Principiante",
				detalle: "Una vez a la semana, 1 hora de actividad.",
				precio: 1000,
			},
			{
				plan: "Intermedio",
				detalle: "Dos veces a la semana, 1 hora de actividad.",
				precio: 1300,
			},
			{
				plan: "Avanzando",
				detalle: "Tres veces a la semana, 1:30 hora de actividad.",
				precio: 1800,
			},
		],
		destacado: 0,
	},
	{
		id: 10,
		tipo: "calma",
		nombre: "Streching",
		enlace: "streching.html",
		image: "streching.png",
		planes: [
			{
				plan: "Principiante",
				detalle: "Una vez a la semana, 45 minutos de actividad.",
				precio: 1000,
			},
			{
				plan: "Intermedio",
				detalle: "Dos veces a la semana, 45 minuto de actividad.",
				precio: 1300,
			},
			{
				plan: "Avanzando",
				detalle: "Tres veces a la semana, 1 hora de actividad.",
				precio: 1800,
			},
		],
		destacado: 0,
	},
];


