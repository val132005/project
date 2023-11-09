const formulario = document.getElementById("login_validacion");
const inputs = document.querySelectorAll("#login_validacion input");

const expresiones = {
  usuarioE: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombreE: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  passwordE: /^.{4,12}$/, // 4 a 12 digitos.
  correoE: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefonoE: /^\d{7,14}$/, // 7 a 14 numeros.
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "Usuario": 
		let mensajeU = `El nombre de usuario debe estar entre 4 y 16 digitos y no puede contener ningun simbolo`;
		validarCampo(expresiones.usuarioE, e.target, 'usuario', mensajeU);
      
      break;
    case "Contraseña":
		let mensajeC = `La contraseña debe contener entre 4 y 12 digitos`;
		validarCampo(expresiones.passwordE, e.target, 'contraseña', mensajeC);
      break;
  }
};

const validarCampo = (expresion, input, campo, mensaje) =>{
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove(`formulario__grupo-incorrecto`);
		document.getElementById(`grupo__${campo}`).classList.add(`formulario__grupo-correcto`);
		let error = document.querySelector(`.formulario__input-error`);
		error.innerHTML = "";
	  } else {
		document.getElementById(`grupo__${campo}`).classList.add(`formulario__grupo-incorrecto`);
		document.getElementById(`grupo__${campo}`).classList.remove(`formulario__grupo-correcto`);
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add(`formulario__input-error-activo`)
		let error = document.querySelector(`.formulario__input-error`);
		let mensajeError = mensaje;
		error.innerHTML = mensajeError;
	  }

}


inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Opcionalllllll
});
