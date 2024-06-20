
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
                if (usuario.value !== usuarioRegistrado.username) {
                    usuario.classList.add("es-visible");
                    errorUsuario.classList.remove("es-invisible");
                    errorUsuario.textContent = MENSAJE_ERROR.usuario.noExiste;
                    usuario.focus();
                    ES_VALIDO_USUARIO = false;
                } else {
                    usuario.classList.remove("es-visible");
                    errorUsuario.classList.add("es-invisible");
                    ES_VALIDO_USUARIO = true;
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
                if (contrasenia.value !== usuarioRegistrado.password) {
                    contrasenia.classList.add("es-visible");
                    errorContrasenia.classList.remove("es-invisible");
                    errorContrasenia.textContent = MENSAJE_ERROR.contrasenia.noExiste;
                    contrasenia.focus();
                    ES_VALIDO_CONTRASEÑA = false;
                } else {
                    contrasenia.classList.remove("es-visible");
                    errorContrasenia.classList.add("es-invisible");
                    ES_VALIDO_CONTRASEÑA = true;
                }
        }
    }

    if (ES_VALIDO_USUARIO && ES_VALIDO_CONTRASEÑA){
        window.location.href = "pantallaPrincipal.html"
    };
}