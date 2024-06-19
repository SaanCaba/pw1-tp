
/*para manejar el local storage*/

const JSON_USUARIOS_REGISTRADOS = localStorage.getItem("DATOS REGISTRADOS");
const USUARIOS_REGISTRADOS = JSON.parse(JSON_USUARIOS_REGISTRADOS);


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

    let ES_VALIDO = true;

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
        ES_VALIDO = false;
    } else if (USUARIOS_REGISTRADOS !== null){
        for (let usuarioRegistrado of USUARIOS_REGISTRADOS){
            if (usuario.value !== usuarioRegistrado.username) {
                usuario.classList.add("es-visible");
                errorUsuario.classList.remove("es-invisible");
                errorUsuario.textContent = MENSAJE_ERROR.usuario.noExiste;
                usuario.focus();
                ES_VALIDO = false;
            } else {
                usuario.classList.remove("es-visible");
                errorUsuario.classList.add("es-invisible");
            }
        }
    }

    /* verificación contraseña */

    if (contrasenia.value === "") {
        contrasenia.classList.add("es-visible");
        errorContrasenia.classList.remove("es-invisible");
        errorContrasenia.textContent = MENSAJE_ERROR.contrasenia.vacio;
        contrasenia.focus();
        ES_VALIDO = false;
    } else if (USUARIOS_REGISTRADOS !== null) {
        for (let usuarioRegistrado of USUARIOS_REGISTRADOS){
            if (contrasenia.value !== usuarioRegistrado.password) {
                contrasenia.classList.add("es-visible");
                errorContrasenia.classList.remove("es-invisible");
                errorContrasenia.textContent = MENSAJE_ERROR.contrasenia.noExiste;
                contrasenia.focus();
                ES_VALIDO = false;
            } else {
                contrasenia.classList.remove("es-visible");
                errorContrasenia.classList.add("es-invisible");
            }
        }
    }

    if (ES_VALIDO){
        window.location.href = "pantallaPrincipal.html"
    };
}