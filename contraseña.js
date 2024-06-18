const EXPRESION_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EXPRESION_USUARIO = /^[a-zA-Z0-9]+$/;

const MENSAJE_ERROR = {
    email:{
        vacio: "El correo electrónico es requerido",
        noValido: "Intente con el formato tunombre@email.com"
    },
    usuario:{
        vacio: "El nombre de usuario es requerido",
    },
    noCoincide: "El correo electrónico o el usuario no existe"
}

const verifEmail = document.querySelector(".verifMail");
verifEmail.addEventListener("click", validar);

function validar (evento) {
    evento.preventDefault();

    const usuario = document.querySelector("#usuario");
    const email = document.querySelector("#mail");
    const errorUsuario = document.querySelector(".p-usuario");
    const errorEmail = document.querySelector(".p-email");

    if (usuario.value === "") {
        usuario.classList.add("es-visible");
        errorUsuario.classList.remove("es-invisible");
        errorUsuario.textContent = MENSAJE_ERROR.usuario.vacio;
        usuario.focus();
    } else {
        usuario.classList.remove("es-visible");
        errorUsuario.classList.add("es-invisible");
    }

    if (email.value === "") {
        email.classList.add("es-visible");
        errorEmail.classList.remove("es-invisible");
        errorEmail.textContent = MENSAJE_ERROR.email.vacio;
        email.focus();
    } else if (!validarEmail(email.value)) {
        email.classList.remove("es-invisible")
        errorEmail.classList.add("es-visible");
        errorEmail.textContent = MENSAJE_ERROR.email.noValido;
        email.focus();
    } else {
        email.classList.remove("es-visible");
        errorEmail.classList.add("es-invisible");
    }
    
}

function validarEmail (texto) {
    return EXPRESION_EMAIL.test(texto);
}
