const EXPRESION_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*para manejar el local storage*/

const JSON_USUARIOS_REGISTRADOS = localStorage.getItem("DATOS REGISTRADOS");
const USUARIOS_REGISTRADOS = JSON.parse(JSON_USUARIOS_REGISTRADOS);

const MENSAJE_ERROR = {
    email:{
        vacio: "El correo electrónico es requerido",
        noValido: "Intente con el formato tunombre@email.com",
        noExiste: "El correo electrónico no está registrado"
    },
    usuario:{
        vacio: "El nombre de usuario es requerido",
        noExiste: "Usuario no existente"
    }
}

const verifEmail = document.querySelector(".verifMail");
verifEmail.addEventListener("click", validar);

function validar (evento) {
    evento.preventDefault();

    let ES_VALIDO_USUARIO = false;
    let ES_VALIDO_CORREO = false;

    const usuario = document.querySelector("#usuario");
    const email = document.querySelector("#mail");
    const errorUsuario = document.querySelector(".p-usuario");
    const errorEmail = document.querySelector(".p-email");

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
    

    /* verificación email, el primer if es si está vacío, el segundo es si no corresponde con el formato (asd@gmail.com) 
    y el tercero es lo que no funca, si no está vacío el local storage, lo recorre y compara*/

    if (email.value === "") {
        email.classList.add("es-visible");
        errorEmail.classList.remove("es-invisible");
        errorEmail.textContent = MENSAJE_ERROR.email.vacio;
        email.focus();
        ES_VALIDO_CORREO = false;
    } else if (!validarEmail(email.value)) {
        email.classList.add("es-visible");
        errorEmail.classList.remove("es-invisible");
        errorEmail.textContent = MENSAJE_ERROR.email.noValido;
        email.focus();
        ES_VALIDO_CORREO = false;
    } else if (USUARIOS_REGISTRADOS === null) {
        email.classList.add("es-visible");
        errorEmail.classList.remove("es-invisible");
        errorEmail.textContent = MENSAJE_ERROR.email.noExiste;
        email.focus();
        ES_VALIDO_CORREO = false;
        } else {
            for (let usuarioRegistrado of USUARIOS_REGISTRADOS){
                if (email.value !== usuarioRegistrado.email) {
                    email.classList.add("es-visible");
                    errorEmail.classList.remove("es-invisible");
                    errorEmail.textContent = MENSAJE_ERROR.email.noExiste;
                    email.focus();
                    ES_VALIDO_CORREO = false;
                } else {
                    email.classList.remove("es-visible");
                    errorEmail.classList.add("es-invisible");
                    ES_VALIDO_CORREO = true;
                }
        }
        }

    if (ES_VALIDO_USUARIO && ES_VALIDO_CORREO){
        window.location.href = "login.html"
    };
}
    

function validarEmail (texto) {
    return EXPRESION_EMAIL.test(texto);
}

