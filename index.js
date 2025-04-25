// APP de mi Proyecto de DinerMenu

// Ventana 1: Bienvenida
alert(
    "¡Bienvenido a DinerMenu!\n\nOfrecemos tres menús dependiendo de la hora:\n- Desayuno: 07:00 a 10:00\n- Comida: 13:00 a 16:00\n- Cena: 20:00 a 23:00\n\nPresiona 'Aceptar' para continuar"
  );
  
  // Ventana 2: Introducir hora y nombre del usuario
  let horaValida = false;
  let hora;
  let nombre;
  
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
  
    // Validar que esté entre 13:00 y 16:00 horas
    const minutosTotales = hh * 60 + mm;
    const inicio = 13 * 60; // 13:00
    const fin = 16 * 60; // 16:00
  
    if (minutosTotales >= inicio && minutosTotales <= fin) {
      horaValida = true;
    } else {
      alert(
        "Lo sentimos, esas opciones ahora no están disponibles.\nPrueba con nuestro horario de Menú Comida (13:00 - 16:00)"
      );
    }
  }
  
  // Ventana 3: Selección de los tres platos
  alert(
    "¡Perfecto, " +
      nombre +
      "! Has accedido al Menú Comida.\nPor favor, selecciona un plato principal, un segundo plato y un postre."
  );
  
  const platosPrincipales = {
    1: { nombre: "Ensalada", precio: 10 },
    2: { nombre: "Pasta", precio: 15 },
    3: { nombre: "Sopa", precio: 12 }
  };
  
  const segundos = {
    1: { nombre: "Carne", precio: 15 },
    2: { nombre: "Pescado", precio: 15 },
    3: { nombre: "Marisco", precio: 20 }
  };
  
  const postres = {
    1: { nombre: "Fruta", precio: 5 },
    2: { nombre: "Yogurt", precio: 5 },
    3: { nombre: "Pastel", precio: 5 }
  };
  
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
  
  const platoPrincipal = seleccionarPlato("Plato Principal", platosPrincipales);
  const segundoPlato = seleccionarPlato("Segundo Plato", segundos);
  const postre = seleccionarPlato("Postre", postres);
  
  // Ventana final: Resumen de la comanda, con nombre, la hora de la reserva y el precio total.
  const total = platoPrincipal.precio + segundoPlato.precio + postre.precio;
  
  alert(
    `Tomamos nota de su comanda Sr./Sra. ${nombre}.\nLe esperamos en DinerMenu con su jugosa comida a las ${hora}.\n\nResumen de su pedido:\n- ${platoPrincipal.nombre}: ${platoPrincipal.precio}€\n- ${segundoPlato.nombre}: ${segundoPlato.precio}€\n- ${postre.nombre}: ${postre.precio}€\n\nTOTAL: ${total}€`
  );
  
  alert(
    "Muchas gracias por elegirnos, esperamos volver a alimentarle muy pronto crack!!!"
  );