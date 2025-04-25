// APP de mi Proyecto de DinerMenu

// Ventana 1: Bienvenida al usuario-cliente
alert(
  "¡Bienvenido a DinerMenu!\n\nOfrecemos tres menús dependiendo de la hora:\n- Desayuno: 07:00 a 10:00\n- Comida: 13:00 a 16:00\n- Cena: 20:00 a 23:00\n\nPresiona 'Aceptar' para continuar"
);

// Ventana 2: Introducir hora y nombre del usuario
let horaValida = false;
let hora;
let nombre;
let menuSeleccionado;

while (!horaValida) {
  hora = prompt(
    "Por favor, introduzca la hora a la que desea comer (formato HH:MM):"
  );
  nombre = prompt("Introduzca su nombre:");

  // Validación de formato HH:MM
  const regexHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (!regexHora.test(hora)) {
    alert("Formato de hora no válido. Use el formato HH:MM (ej: 13:45)");
    continue;
  }

  // Extraer hora y minutos para luego meterlo en el mensaje de la comanda
  const [hh, mm] = hora.split(":").map(Number);

  // Validar que esté dentro de los horarios de los menús
  const minutosTotales = hh * 60 + mm;
  const desayunoInicio = 7 * 60; // 07:00
  const desayunoFin = 10 * 60; // 10:00
  const comidaInicio = 13 * 60; // 13:00
  const comidaFin = 16 * 60; // 16:00
  const cenaInicio = 20 * 60; // 20:00
  const cenaFin = 23 * 60; // 23:00

  if (minutosTotales >= desayunoInicio && minutosTotales < desayunoFin) {
    menuSeleccionado = "desayuno";
    horaValida = true;
  } else if (minutosTotales >= comidaInicio && minutosTotales < comidaFin) {
    menuSeleccionado = "comida";
    horaValida = true;
  } else if (minutosTotales >= cenaInicio && minutosTotales < cenaFin) {
    menuSeleccionado = "cena";
    horaValida = true;
  } else {
    alert(
      "Lo sentimos majete, no hay menús disponibles a esta hora. Prueba con otro horario."
    );
  }
}

// Función para mostrar las diferentes opciones y obtener una selección válida
function seleccionarPlato(titulo, opciones) {
  let eleccion;
  let mensaje = `${titulo}\n`;
  for (let clave in opciones) {
    mensaje += `${clave}: ${opciones[clave].nombre} - ${opciones[clave].precio}€\n`;
  }

  while (true) {
    eleccion = prompt(mensaje + "\nElija una opción (1, 2 o 3):");
    if (opciones[eleccion]) {
      return opciones[eleccion];
    } else {
      alert(
        "Lo sentimos, tiene usted que marcar una opción válida.\nNos duele en el corazón pero el resto de opciones no están disponibles en DinerMenu."
      );
    }
  }
}

// Opciones de los menús según la hora seleccionada
let platosPrincipales, segundos, postres;

if (menuSeleccionado === "desayuno") {
  alert(
    "¡Perfecto, " +
      nombre +
      "! Has accedido al Menú Desayuno.\nPor favor, selecciona una bebida principal, un segundo plato y un tercer plato."
  );

  platosPrincipales = {
    1: { nombre: "Café", precio: 5 },
    2: { nombre: "Café con leche", precio: 6 },
    3: { nombre: "Café descafeinado", precio: 5 }
  };

  segundos = {
    1: { nombre: "Bollería", precio: 2 },
    2: { nombre: "Macedonia de fruta", precio: 4 },
    3: { nombre: "Muesli", precio: 5 }
  };

  postres = {
    1: { nombre: "Miel", precio: 5 },
    2: { nombre: "Yogurt griego", precio: 3 },
    3: { nombre: "Tostadas", precio: 2 }
  };
} else if (menuSeleccionado === "comida") {
  alert(
    "¡Perfecto, " +
      nombre +
      "! Has accedido al Menú Comida.\nPor favor, selecciona un plato principal, un segundo plato y un postre."
  );

  platosPrincipales = {
    1: { nombre: "Ensalada", precio: 10 },
    2: { nombre: "Pasta", precio: 15 },
    3: { nombre: "Sopa", precio: 12 }
  };

  segundos = {
    1: { nombre: "Carne", precio: 15 },
    2: { nombre: "Pescado", precio: 15 },
    3: { nombre: "Marisco", precio: 20 }
  };

  postres = {
    1: { nombre: "Fruta", precio: 5 },
    2: { nombre: "Yogurt", precio: 5 },
    3: { nombre: "Pastel", precio: 5 }
  };
} else if (menuSeleccionado === "cena") {
  alert(
    "¡Perfecto, " +
      nombre +
      "! Has accedido al Menú Cena.\nPor favor, selecciona un plato principal, un segundo plato y un postre."
  );

  platosPrincipales = {
    1: { nombre: "Tortilla francesa", precio: 5 },
    2: { nombre: "Tortilla de patata", precio: 6 },
    3: { nombre: "Tortilla con atún", precio: 7 }
  };

  segundos = {
    1: { nombre: "Sopa de verduras", precio: 14 },
    2: { nombre: "Sopa de pescado", precio: 18 },
    3: { nombre: "Sopa de carne", precio: 19 }
  };

  postres = {
    1: { nombre: "Naranja", precio: 2 },
    2: { nombre: "Mango", precio: 5 },
    3: { nombre: "Sandía", precio: 2 }
  };
}

const platoPrincipal = seleccionarPlato("Plato Principal", platosPrincipales);
const segundoPlato = seleccionarPlato("Segundo Plato", segundos);
const postre = seleccionarPlato("Postre", postres);

// Ventana final: Resumen de la comanda, con el nombre, la hora de la reserva y el precio total.
const total = platoPrincipal.precio + segundoPlato.precio + postre.precio;

alert(
  `Tomamos nota de su comanda Sr./Sra. ${nombre}.\nLe esperamos en DinerMenu con su jugosa comida a las ${hora}.\n\nResumen de su pedido:\n- ${platoPrincipal.nombre}: ${platoPrincipal.precio}€\n- ${segundoPlato.nombre}: ${segundoPlato.precio}€\n- ${postre.nombre}: ${postre.precio}€\n\nTOTAL: ${total}€`
);

alert(
  "Muchas gracias por elegirnos, esperamos volver a alimentarle muy pronto crack!!!"
);