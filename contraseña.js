const EXPRESION_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*para manejar el local storage*/


const usuario1 = {usuario: "pedrito123", email: "pedrito123@gmail.com"};
const usuario2 = {usuario: "palomamami", email: "palomamami@gmail.com"};
const USUARIOS = [usuario1, usuario2];

const usuariosRegistrados = 'usuariosregistrados'

localStorage.setItem(usuariosRegistrados, JSON.stringify(USUARIOS));
const JSON_USUARIOS_REGISTRADOS = localStorage.getItem(usuariosRegistrados);
const USUARIOS_REGISTRADOS = JSON.parse(JSON_USUARIOS_REGISTRADOS);



const MENSAJE_ERROR = {
    email:{
        vacio: "El correo electrónico es requerido",
        noValido: "Intente con el formato tunombre@email.com",
        noExiste: "El correo electrónico no está registrado"
    },
    usuario:{
        vacio: "El nombre de usuario es requerido",
        noExiste: "El usuario no existe"
    }
}

const verifEmail = document.querySelector(".verifMail");
verifEmail.addEventListener("click", validar);

function validar (evento) {
    evento.preventDefault();

    let ES_VALIDO = true;

    const usuario = document.querySelector("#usuario");
    const email = document.querySelector("#mail");
    const errorUsuario = document.querySelector(".p-usuario");
    const errorEmail = document.querySelector(".p-email");

    if (usuario.value === "") {
        usuario.classList.add("es-visible");
        errorUsuario.classList.remove("es-invisible");
        errorUsuario.textContent = MENSAJE_ERROR.usuario.vacio;
        usuario.focus();
        ES_VALIDO = false;
    } else if (USUARIOS_REGISTRADOS !== null){
        for (let usuarioRegistrado in USUARIOS_REGISTRADOS){
            if (usuario.value !== usuarioRegistrado.usuario) {
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
    } else {
        usuario.classList.remove("es-visible");
        errorUsuario.classList.add("es-invisible");
    }


    if (email.value === "") {
        email.classList.add("es-visible");
        errorEmail.classList.remove("es-invisible");
        errorEmail.textContent = MENSAJE_ERROR.email.vacio;
        email.focus();
        ES_VALIDO = false;
    } else if (!validarEmail(email.value)) {
        email.classList.remove("es-invisible")
        errorEmail.classList.add("es-visible");
        errorEmail.textContent = MENSAJE_ERROR.email.noValido;
        email.focus();
        ES_VALIDO = false;
    } else if (USUARIOS_REGISTRADOS !== null) {
        for (let usuarioRegistrado in USUARIOS_REGISTRADOS){
            if (email.value !== usuarioRegistrado.email) {
                email.classList.add("es-visible");
                errorEmail.classList.remove("es-invisible");
                errorEmail.textContent = MENSAJE_ERROR.email.noExiste;
                email.focus();
                ES_VALIDO = false;
            } else {
                email.classList.remove("es-visible");
                errorEmail.classList.add("es-invisible");
            }
        }
    } else {
        email.classList.remove("es-visible");
        errorEmail.classList.add("es-invisible");
    }
}

    /* para recorrer todos los datos y validar si existen 

    for (let usuarioRegistrado in USUARIOS_REGISTRADOS){
        if (usuario.value !== usuarioRegistrado.usuario) {
            usuario.classList.add("es-visible");
            errorUsuario.classList.remove("es-invisible");
            errorUsuario.textContent = MENSAJE_ERROR.usuario.noExiste;
            usuario.focus();
            ES_VALIDO = false;
        } else {
            usuario.classList.remove("es-visible");
            errorUsuario.classList.add("es-invisible");
        }
        if (email.value !== usuarioRegistrado.email) {
            email.classList.add("es-visible");
            errorEmail.classList.remove("es-invisible");
            errorEmail.textContent = MENSAJE_ERROR.email.noExiste;
            email.focus();
            ES_VALIDO = false;
        } else {
            email.classList.remove("es-visible");
            errorEmail.classList.add("es-invisible");
        }
        }
    }
*/

   if (ES_VALIDO){
        window.location.href = "login.html"
    };


function validarEmail (texto) {
    return EXPRESION_EMAIL.test(texto);
}

