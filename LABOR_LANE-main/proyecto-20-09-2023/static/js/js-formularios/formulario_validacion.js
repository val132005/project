const formulario = document.getElementById("formulario_validacion");
const inputs = document.querySelectorAll("#formulario_validacion input");

const expresiones = {
  nombres: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  numerodoc: /^\d{8,10}$/,
  telefonoE: /^\d{7,14}$/,
  direccion: /^[a-zA-Z0-9\s\#\-\,\°]{5,100}$/,
  correoelectronico: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  passwordE: /^.{4,12}$/, // 4 a 12 digitos.
  personascargo: /^\d{0,10}$/,
  contenido: /^[a-zA-Z0-9\sáéíóúñÑÁÉÍÓÚ.,\-#()¿?!¡;:'"]+$/u,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombres":
      let mensaje1 = `El nombre debe estar entre 3 y 40 digitos`;
      validarCampo(expresiones.usuarioE, e.target, "nombres", mensaje1);

      break;
    case "Contraseña":
      let mensaje2 = `La contraseña debe contener entre 4 y 12 digitos`;
      validarCampo(expresiones.passwordE, e.target, "contraseña", mensaje2);
      break;
    case "Usuario":
      let mensaje3 = `El nombre de usuario debe estar entre 4 y 16 digitos y no puede contener ningun simbolo`;
      validarCampo(expresiones.usuarioE, e.target, "usuario", mensaje3);

      break;
    case "Usuario":
      let mensaje4 = `El nombre de usuario debe estar entre 4 y 16 digitos y no puede contener ningun simbolo`;
      validarCampo(expresiones.usuarioE, e.target, "usuario", mensaje4);

      break;
    case "Usuario":
      let mensaje5 = `El nombre de usuario debe estar entre 4 y 16 digitos y no puede contener ningun simbolo`;
      validarCampo(expresiones.usuarioE, e.target, "usuario", mensaje5);

      break;
    case "Usuario":
      let mensaje6 = `El nombre de usuario debe estar entre 4 y 16 digitos y no puede contener ningun simbolo`;
      validarCampo(expresiones.usuarioE, e.target, "usuario", mensaje6);

      break;
    case "Usuario":
      let mensaje7 = `El nombre de usuario debe estar entre 4 y 16 digitos y no puede contener ningun simbolo`;
      validarCampo(expresiones.usuarioE, e.target, "usuario", mensaje7);

      break;
    case "Usuario":
      let mensaje8 = `El nombre de usuario debe estar entre 4 y 16 digitos y no puede contener ningun simbolo`;
      validarCampo(expresiones.usuarioE, e.target, "usuario", mensaje8);

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
});
