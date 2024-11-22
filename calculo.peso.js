function calculo_imc(peso, altura) {
  if (isNaN(peso) || isNaN(altura)) {
    const msg = "Por favor, introducir datos válidos en los campos.";
    console.log(msg);
    return null;
  }

  if (typeof peso === "string" || typeof altura === "string") {
    const msg = "Deben ingresarse datos numéricos.";
    console.log(msg);
    return null;
  }

  if (peso <= 0 || altura <= 0) {
    const msg = "Error: división por 0 o cantidades negativas no está definida.";
    console.log(msg);
    return null;
  }

  // En caso de haber un error, devolver un mensaje, un string con el mensaje de error...
  // No creo que sean las mejores prácticas... pero bueno.

  return parseFloat(peso / altura ** 2).toFixed(1);
}

// Lógica con el Botón calcular.
document.getElementById("boton-calcular").addEventListener("click", function () {
  const peso = parseFloat(document.getElementById("input-peso").value);
  const altura = parseFloat(document.getElementById("input-altura").value);

  const resultado = calculo_imc(peso, altura);

  let nivel_peso = "";
  // Calculando si el manin está bien de peso...
  if (resultado < 18.5) {
    nivel_peso = "con Bajo peso";
  } else if (resultado >= 18.5 && resultado < 25) {
    nivel_peso = "Saludable";
  } else if (resultado >= 25 && resultado < 30) {
    nivel_peso = "con Sobre peso";
  } else {
    nivel_peso = "con Obesidad";
  }

  let msg_resultado = `El peso calculado es de ${resultado}.`;
  let msg_extra = `La persona tiene un nivel de peso ${nivel_peso.toLowerCase()}.`;

  const alerta = document.getElementById("alerta-mostrar-resultado");

  if (resultado === null) {
    msg_resultado = `Evidentemente, no sabe usted un huevo de cómo insertar datos en una página web. Inserte los datos de nuevo, bendiciones.`;
    alerta.classList.replace("alert-success", "alert-danger");
  }

  if (peso < 45) {
    msg_resultado = "Como que está flaquito el chamaco no... ".concat(msg_resultado);
  }
  if (altura < 1.4) {
    msg_extra = "Qué chiquito jajajajaj... ".concat(msg_extra);
  }
  document.getElementById("mostrar-resultado").textContent = msg_resultado;
  document.getElementById("mostrar-info-adicional-peso").textContent = msg_extra;

  alerta.classList.remove("d-none");

  // Agregando un setTimeout() se puede aplicar una especie de desfaz.
  setTimeout(() => {
    alerta.classList.add("show");
  }, 10);
});
