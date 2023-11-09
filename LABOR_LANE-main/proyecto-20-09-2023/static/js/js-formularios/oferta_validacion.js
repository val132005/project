const formulario = document.getElementById("oferta_validacion");
const inputs = document.querySelectorAll("#oferta_validacion input");

const expresiones = {
  habilidades: /^[a-zA-Z0-9-ZÀ-ÿ\s-]{5,40}$/,
  contenido: /^[a-zA-Z0-9-ZÀ-ÿ\s-]{20,300}$/,
  titulo: /^[a-zA-Z0-9-ZÀ-ÿ\s-]{10,50}$/,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "TituloEmpleo":
      let mensaje1 = `El tituo del empleo debe contener caracteres especiales y debe estar entre 10 y 50 caracteres`;
      validarCampo(expresiones.titulo, e.target, "titulo", mensaje1);

      break;
    case "DescripcionEmpleo":
      let mensaje2 = `La descripcion del empleo no debe contener caracteres especiales y debe estar entre 20 y 300 caracteres`;
      validarCampo(expresiones.contenido, e.target, "descripcion", mensaje2);

      break;
    case "RequisitosEmpleo":
      let mensaje3 = `Los requisitos no deben contener caracteres especiles y debe estar entre 20 y 300 caracteres`;
      validarCampo(expresiones.contenido, e.target, "requisitos", mensaje3);
      break;
    case "HabilidadesEmpleo":
      let mensaje4 = `Las habilidades del empleo no debe contener caracteres especiles y debe estar entre 20 y 300 caracteres`;
      validarCampo(expresiones.habilidades, e.target, "habilidades", mensaje4);
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
