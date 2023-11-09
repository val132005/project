const formulario = document.getElementById("educacion_validacion");
const inputs = document.querySelectorAll("#educacion_validacion input");

const expresiones = {
  nombreinstitucion: /^[a-zA-Z0-9-ZÀ-ÿ\s-]{5,100}$/,
  tituloeducacion: /^[a-zA-Z0-9-ZÀ-ÿ\s-]{5,100}$/,
  nivelacademico: /^[a-zA-Z0-9-ZÀ-ÿ\s-]{5,50}$/,

};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "NombreInstitucion":
      let mensaje1 = `El nombre de la institucion no debe contener caracteres especiales y debe estar entre 5 y 100 caracteres`;
      validarCampo(expresiones.nombreinstitucion, e.target, "nombreInstitucion", mensaje1);

      break;
    case "TituloEducacion":
      let mensaje2 = `El titulo academico no debe contener caracteres especiales y debe estar entre 5 y 100 caracteres`;
      validarCampo(expresiones.tituloeducacion, e.target, "tituloeducacion", mensaje2);

      break;
    case "NivelAcademico":
      let mensaje3 = `El nivel academico no debe contener caracteres especiles y debe estar entre 5 y 50 caracteres`;
      validarCampo(expresiones.nivelacademico, e.target, "nivelacademico", mensaje3);
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
    var fechaInicio = document.getElementById('FechaInicio').value;
    var fechaFinal = document.getElementById('Fechafinal').value;
    if (fechaInicio === '' || fechaFinal === '') {
        let mensaje = "Por favor, seleccione ambas fechas.";
        let error = document.querySelector(`.formulario__input-error`); 
        error.innerHTML = mensaje;
        return false;
    }else{
        let error = document.querySelector(`.formulario__input-error`);
        error.innerHTML = "";
    }
    return true;
}


