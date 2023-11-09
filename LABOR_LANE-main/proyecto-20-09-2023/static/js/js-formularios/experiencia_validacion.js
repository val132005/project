const formulario = document.getElementById("experiencia_validacion");
const inputs = document.querySelectorAll("#experiencia_validacion input");

const expresiones = {
  nombreempleador: /^[a-zA-Z0-9-ZÀ-ÿ\s-]{5,50}$/,
  funciones: /^[a-zA-Z0-9-ZÀ-ÿ\s-]{5,300}$/,
  logros: /^[a-zA-Z0-9-ZÀ-ÿ\s-]{5,300}$/,
  cargo: /^[a-zA-Z0-9-ZÀ-ÿ\s-]{5,50}$/,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "NombreEmpleador":
      let mensaje1 = `El nombre del empleador no debe contener caracteres especiales y debe estar entre 5 y 50 caracteres`;
      validarCampo(
        expresiones.nombreempleador,
        e.target,
        "nombreEmpleador",
        mensaje1
      );

      break;
    case "Cargo":
      let mensaje2 = `El cargo no debe contener caracteres especiales y debe estar entre 5 y 50 caracteres`;
      validarCampo(
        expresiones.cargo,
        e.target,
        "cargo",
        mensaje2
      );

      break;
    case "Funciones":
      let mensaje3 = `Las funciones no deben contener caracteres especiles y debe estar entre 5 y 300 caracteres`;
      validarCampo(
        expresiones.funciones,
        e.target,
        "funciones",
        mensaje3
      );
      break;
    case "Logros":
      let mensaje4 = `Los logros no debe contener caracteres especiles y debe estar entre 5 y 300 caracteres`;
      validarCampo(
        expresiones.logros,
        e.target,
        "logros",
        mensaje4
      );
      break;
  }
};

const validarCampo = (expresion, input, campo, mensaje) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove(`formulario__grupo-incorrecto`);
    document
      .getElementById(`grupo__${campo}`)
      .classList.add(`formulario__grupo-correcto`);
    let error = document.querySelector(`.formulario__input-error`);
    error.innerHTML = "";
  } else {
    document
      .getElementById(`grupo__${campo}`)
      .classList.add(`formulario__grupo-incorrecto`);
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove(`formulario__grupo-correcto`);
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.add(`formulario__input-error-activo`);
    let error = document.querySelector(`.formulario__input-error`);
    let mensajeError = mensaje;
    error.innerHTML = mensajeError;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Opcionalllllll
  validarFechas();
});

function validarFechas() {
  var fechaInicio = document.getElementById("FechaInicio").value;
  var fechaFinal = document.getElementById("Fechafinal").value;
  if (fechaInicio === "" || fechaFinal === "") {
    let mensaje = "Por favor, seleccione ambas fechas.";
    let error = document.querySelector(`.formulario__input-error`);
    error.innerHTML = mensaje;
    return false;
  } else {
    let error = document.querySelector(`.formulario__input-error`);
    error.innerHTML = "";
  }
  return true;
}
