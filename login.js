
/*para manejar el local storage*/

const JSON_USUARIOS_REGISTRADOS = localStorage.getItem("DATOS REGISTRADOS");
const USUARIOS_REGISTRADOS = JSON.parse(JSON_USUARIOS_REGISTRADOS);

let emailActual;

const MENSAJE_ERROR = {
    usuario:{
        vacio: "El nombre de usuario es requerido",
        noExiste: "Usuario no existente"
    },
    contrasenia:{
        vacio: "La contraseña es requerida",
        noExiste: "Contraseña incorrecta"
    }
}

const verifInicioSesion = document.querySelector(".verifInicioSesion");
verifInicioSesion.addEventListener("click", validar);

function validar (evento) {
    evento.preventDefault();

    let ES_VALIDO_USUARIO = false;
    let ES_VALIDO_CONTRASEÑA = false;

    const usuario = document.querySelector("#usuario");
    const contrasenia = document.querySelector("#contraseña");
    const errorUsuario = document.querySelector(".p-usuario");
    const errorContrasenia = document.querySelector(".p-contrasenia");

    /* verificación usuario */

    if (usuario.value === "") {
        usuario.classList.add("es-visible");
        errorUsuario.classList.remove("es-invisible");
        errorUsuario.textContent = MENSAJE_ERROR.usuario.vacio;
        usuario.focus();
        ES_VALIDO_USUARIO = false;
    } else if (USUARIOS_REGISTRADOS === null){
        usuario.classList.add("es-visible");
        errorUsuario.classList.remove("es-invisible");
        errorUsuario.textContent = MENSAJE_ERROR.usuario.noExiste;
        usuario.focus();
        ES_VALIDO_USUARIO = false;
        } else {
            for (let usuarioRegistrado of USUARIOS_REGISTRADOS){
                if (usuario.value !== usuarioRegistrado.usuario) {
                    usuario.classList.add("es-visible");
                    errorUsuario.classList.remove("es-invisible");
                    errorUsuario.textContent = MENSAJE_ERROR.usuario.noExiste;
                    usuario.focus();
                    ES_VALIDO_USUARIO = false;
                } else {
                    usuario.classList.remove("es-visible");
                    errorUsuario.classList.add("es-invisible");
                    ES_VALIDO_USUARIO = true;
                    emailActual = usuarioRegistrado.email;
                    break;
                }
        }
    }

    /* verificación contraseña */

    if (contrasenia.value === "") {
        contrasenia.classList.add("es-visible");
        errorContrasenia.classList.remove("es-invisible");
        errorContrasenia.textContent = MENSAJE_ERROR.contrasenia.vacio;
        contrasenia.focus();
        ES_VALIDO_CONTRASEÑA = false;
    } else if (USUARIOS_REGISTRADOS === null) {
        contrasenia.classList.add("es-visible");
        errorContrasenia.classList.remove("es-invisible");
        errorContrasenia.textContent = MENSAJE_ERROR.contrasenia.noExiste;
        contrasenia.focus();
        ES_VALIDO_CONTRASEÑA = false;
        } else {
            for (let usuarioRegistrado of USUARIOS_REGISTRADOS){
                if ((contrasenia.value === usuarioRegistrado.contraseña) && (usuario.value === usuarioRegistrado.usuario)) {
                    contrasenia.classList.remove("es-visible");
                    errorContrasenia.classList.add("es-invisible");
                    ES_VALIDO_CONTRASEÑA = true;
                    break;
                } else {
                    contrasenia.classList.add("es-visible");
                    errorContrasenia.classList.remove("es-invisible");
                    errorContrasenia.textContent = MENSAJE_ERROR.contrasenia.noExiste;
                    contrasenia.focus();
                    ES_VALIDO_CONTRASEÑA = false;
                }
        }
    }

    if (ES_VALIDO_USUARIO && ES_VALIDO_CONTRASEÑA){
        localStorage.setItem("USUARIO ACTUAL", usuario.value);
        localStorage.setItem("EMAIL ACTUAL", emailActual);
        window.location.href = "pantallaPrincipal.html"
    };
}