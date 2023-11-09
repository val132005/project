const formulario = document.getElementById("registro_validacion");
const inputs = document.querySelectorAll("#registro_validacion input");

const expresiones = {
  usuarioE: /^[a-zA-Z0-9\_\-]{4,16}$/,
  nombres: /^[a-zA-ZÀ-ÿ\s]{3,30}$/,
  numerodoc: /^\d{8,10}$/,
  telefonoE: /^\d{7,14}$/,
  direccion: /^[a-zA-Z0-9\s\#\-\,\°]{5,100}$/,
  correoelectronico: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  passwordE: /^.{4,12}$/, // 4 a 12 digitos.
  personascargo: /^\d{0,10}$/,
  contenido: /^[a-zA-Z0-9\sáéíóúñÑÁÉÍÓÚ.,\-#()¿?!¡;:'"]+$/u,
  tipodocumento: /^[a-zA-ZÀ-ÿ\s]{2,20}$/,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "usuario":
      let mensaje1 = `El nombre de usuario debe estar entre 4 y 16 digitos y no puede contener ningun simbolo`;
      validarCampo(expresiones.usuarioE, e.target, "usuario", mensaje1);
      break;

    case "nombreU":
      let mensaje2 = `El nombre de usuario debe contener entre 3 y 30 digitos y no puede contener ningun simbolo`;
      validarCampo(expresiones.nombres, e.target, "nombre", mensaje2);
      break;

    case "apellido":
      let mensaje3 = `El apellido del usuario debe estar entre 3 y 30 digitos y no puede contener ningun simbolo`;
      validarCampo(expresiones.nombres, e.target, "apellido", mensaje3);
      break;

    case "telefono":
      let mensaje4 = `El numero de celular debe estar entre los 7 y 14 digitos`;
      validarCampo(expresiones.telefonoE, e.target, "telefono", mensaje4);
      break;

    case "tdocumento":
      let mensaje5 = `El tipo de documento debe contener entre 2 y 20 caracteres sin simbolos`;
      validarCampo(expresiones.tipodocumento, e.target, "tipodocumento", mensaje5);
      break;

    case "ndocumento":
      let mensaje6 = `El numero de documento debe estar entre 8 y 10 digitos y no puede contener ningun simbolo`;
      validarCampo(expresiones.numerodoc, e.target, "numerodocumento", mensaje6);

      break;
    case "direccion":
      let mensaje7 = `La direccion no es valida`;
      validarCampo(expresiones.direccion, e.target, "direccion", mensaje7);

      break;
    case "correo":
      let mensaje8 = `El valor ingrasado no es considerado un correo electronico`;
      validarCampo(expresiones.correoelectronico, e.target, "correo", mensaje8);

      break;
    case "password":
      let mensaje9 = `La contraseña debe estar entre 4 y 12`;
      validarCampo(expresiones.passwordE, e.target, "password", mensaje9);

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
