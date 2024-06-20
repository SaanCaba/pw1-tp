//let USUARIOS = JSON.parse(localStorage.getItem("DATOS REGISTRADOS")) || [];
//const nombreUsuario = document.querySelector(".nombre-de-usuario");
//const claveDeTarjeta = document.querySelector(".claveDeTarjeta");

// Patrón para la contraseña: mínimo 2 letras, 2 números, 2 caracteres especiales y al menos 8 caracteres de longitud
const EXPRESION_CONTRASEÑA = /^(?=(.[A-Za-z]){2})(?=(.\d){2})(?=(.*[^A-Za-z0-9]){2}).{8,}$/;


document.querySelector(".botonGuardar").addEventListener("click", function (event) {
   
    event.preventDefault();


   const nuevaContraseña = document.querySelector(".nueva-contraseña");
   const repetirContraseña = document.querySelector(".repetir-contraseña");


     let ES_VALIDO = true;

   if (!validarContraseña(nuevaContraseña.value)) {
     alert(
       "La contraseña debe tener al menos 8 caracteres, incluyendo al menos dos letras, dos números y dos caracteres especiales"
     );
     nuevaContraseña.focus();
     ES_VALIDO = false;
    } else if (nuevaContraseña.value !== repetirContraseña.value) {
    alert("Las contraseñas no coinciden");
    repetirContraseña.focus();
    ES_VALIDO = false;
    }

    if (ES_VALIDO){
        window.location.href = "pantallaPrincipal.html"
    };
 });

 function validarContraseña (texto) {
    return EXPRESION_CONTRASEÑA.test(texto);
}