
let USUARIOS = JSON.parse(localStorage.getItem("DATOS REGISTRADOS")) || [];

// Patrón para la contraseña: mínimo 2 letras, 2 números, 2 caracteres especiales y al menos 8 caracteres de longitud
const EXPRESION_CONTRASEÑA = /^(?=(.*[A-Za-z]){2})(?=(.*\d){2})(?=(.*[^A-Za-z0-9]){2}).{8,}$/;
const EXPRESION_NOMBREAPELLIDO = /^[A-Za-z]+$/;
const EXPRESION_USUARIO = /^[A-Za-z\d]+$/;
const EXPRESION_CODIGO_TARJETA = /^\d{3}$/;
const EXPRESION_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MENSAJE_ERROR = {
  nombre:{
    vacio: "Nombre requerido",
    noValido: "Solo acepta letras"
  },
  apellido:{
    vacio: "Apellido requerido",
    noValido: "Solo acepta letras"
  },
  email:{
      vacio: "Correo electrónico requerido",
      noValido: "Intente con el formato tunombre@email.com",
      duplicado: "Correo electrónico ya registrado"
  },
  usuario:{
      vacio: "Nombre de usuario requerido",
      noValido: "Solo acepta letras y números",
      duplicado: "Usuario ya registrado"
  },
  contraseña:{
    vacio: "Contraseña requerida",
    noValido: "Debe tener al menos 8 caracteres, incluyendo al menos dos letras, dos números y dos caracteres especiales",
    noCoincide: "Las contraseñas no coinciden"
  },
  metodoDePago:{
    vacio: "Seleccione un método de pago"
  },
  claveTarjeta:{
    noValidoPorCeros: "Revise la clave de su tarjeta",
    noValidoPorDigitos: "La clave debe contener 3 dígitos"
  },
  numeroDeTarjeta:{
    noValidoPorDigitos: "El número de tarjeta debe contener entre 16 y 19 dígitos",
    noValidoPorCondiciones: "Tarjeta inválida"
  }
}

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.querySelector("#firstName");
  const apellido = document.querySelector("#lastName");
  const email = document.querySelector("#email");
  const usuario = document.querySelector("#username");
  const contraseña = document.querySelector("#password");
  const confirmarContraseña = document.querySelector("#confirmPassword");
  const cardCVC = document.querySelector("#cardCVC");
  const errorNombre = document.querySelector(".p-nombre");
  const errorApellido = document.querySelector(".p-apellido");
  const errorEmail = document.querySelector(".p-email");
  const errorUsuario = document.querySelector(".p-usuario");
  const errorContraseña = document.querySelector(".p-contraseña");
  const errorConfirmarContraseña = document.querySelector(".p-confirmar-contraseña");
  const errorMetodosPago = document.querySelector(".p-metodos-pago");
  const errorNumeroTarjeta = document.querySelector(".p-numero-tarjeta");
  const errorClaveTarjeta = document.querySelector(".p-clave-tarjeta");
  //busca de todos los métodos de pago, uno que esté tildado
  const selectedPaymentMethod = document.querySelector('input[name="payMethod"]:checked');
  const cardNumber = document.getElementById("cardNumber").value;
  

  // booleanos para verificar que todos los input estén llenos 
  let ES_VALIDO_NOMBRE = false;
  let ES_VALIDO_APELLIDO = false;
  let ES_VALIDO_EMAIL = false;
  let ES_VALIDO_USUARIO = false;
  let ES_VALIDO_CONTRASEÑA = false;
  let ES_VALIDO_CONFIRMAR_CONTRASEÑA = false;
  let ES_VALIDO_METODOS_PAGO = false;



  // verificación nombre

  if (nombre.value === "") {
    nombre.classList.add("es-visible");
    errorNombre.classList.remove("es-invisible");
    errorNombre.textContent = MENSAJE_ERROR.nombre.vacio;
    nombre.focus();
    ES_VALIDO_NOMBRE = false;  
    } else if (!validarNombreYApellido(nombre.value)){
      nombre.classList.add("es-visible")
      errorNombre.classList.remove("es-invisible");
      errorNombre.textContent = MENSAJE_ERROR.nombre.noValido;
      nombre.focus();
      ES_VALIDO_NOMBRE = false;
      } else {
        nombre.classList.remove("es-visible");
        errorNombre.classList.add("es-invisible");
        ES_VALIDO_NOMBRE = true;
        }

  // verificación apellido

  if (apellido.value === "") {
    apellido.classList.add("es-visible");
    errorApellido.classList.remove("es-invisible");
    errorApellido.textContent = MENSAJE_ERROR.apellido.vacio;
    apellido.focus();
    ES_VALIDO_APELLIDO = false;  
    } else if (!validarNombreYApellido(apellido.value)){
      apellido.classList.add("es-visible");
      errorApellido.classList.remove("es-invisible");
      errorApellido.textContent = MENSAJE_ERROR.apellido.noValido;
      apellido.focus();
      ES_VALIDO_APELLIDO = false;
      } else {
        apellido.classList.remove("es-visible");
        errorApellido.classList.add("es-invisible");
        ES_VALIDO_APELLIDO = true;
        }

  // verificación email

  if (email.value === "") {
    email.classList.add("es-visible");
    errorEmail.classList.remove("es-invisible");
    errorEmail.textContent = MENSAJE_ERROR.email.vacio;
    email.focus();
    ES_VALIDO_EMAIL = false;
    } else if (!validarEmail(email.value)){
      email.classList.add("es-visible");
      errorEmail.classList.remove("es-invisible");
      errorEmail.textContent = MENSAJE_ERROR.email.noValido;
      email.focus();
      ES_VALIDO_EMAIL = false;
      } else if (USUARIOS === null){
        email.classList.remove("es-visible");
        errorEmail.classList.add("es-invisible");
        ES_VALIDO_EMAIL = true;
        } else if (yaExisteElEmail(email.value)) {
              email.classList.add("es-visible");
              errorEmail.classList.remove("es-invisible");
              errorEmail.textContent = MENSAJE_ERROR.email.duplicado;
              email.focus();
              ES_VALIDO_EMAIL = false;
              } else {
                email.classList.remove("es-visible");
                errorEmail.classList.add("es-invisible");
                ES_VALIDO_EMAIL = true;
                }

  // verificación usuario


  if (usuario.value === "") {
    usuario.classList.add("es-visible");
    errorUsuario.classList.remove("es-invisible");
    errorUsuario.textContent = MENSAJE_ERROR.usuario.vacio;
    usuario.focus();
    ES_VALIDO_USUARIO = false;
    } else if (!validarUsuario(usuario.value)){
      usuario.classList.add("es-visible");
      errorUsuario.classList.remove("es-invisible");
      errorUsuario.textContent = MENSAJE_ERROR.usuario.noValido;
      usuario.focus();
      ES_VALIDO_USUARIO = false;
      } else if (USUARIOS === null){
        usuario.classList.remove("es-visible");
        errorUsuario.classList.add("es-invisible");
        ES_VALIDO_USUARIO = true;
        } else if (yaExisteElUsuario(usuario.value)) {
              usuario.classList.add("es-visible");
              errorUsuario.classList.remove("es-invisible");
              errorUsuario.textContent = MENSAJE_ERROR.usuario.duplicado;
              usuario.focus();
              ES_VALIDO_USUARIO = false;
              } else {
                usuario.classList.remove("es-visible");
                errorUsuario.classList.add("es-invisible");
                ES_VALIDO_USUARIO = true;
                }

  // verificación contraseña

  if (contraseña.value === "") {
    contraseña.classList.add("es-visible");
    errorContraseña.classList.remove("es-invisible");
    errorContraseña.textContent = MENSAJE_ERROR.contraseña.vacio;
    contraseña.focus();
    ES_VALIDO_CONTRASEÑA = false;  
    } else if (!validarContraseña(contraseña.value)){
      contraseña.classList.add("es-visible")
      errorContraseña.classList.remove("es-invisible");
      errorContraseña.textContent = MENSAJE_ERROR.contraseña.noValido;
      contraseña.focus();
      ES_VALIDO_CONTRASEÑA = false;
      } else {
        contraseña.classList.remove("es-visible");
        errorContraseña.classList.add("es-invisible");
        ES_VALIDO_CONTRASEÑA = true;
        }

  // verificación confirmación contraseña

  if (confirmarContraseña.value !== contraseña.value) {
    confirmarContraseña.classList.add("es-visible");
    errorConfirmarContraseña.classList.remove("es-invisible");
    errorConfirmarContraseña.textContent = MENSAJE_ERROR.contraseña.noCoincide;
    confirmarContraseña.focus();
    ES_VALIDO_CONFIRMAR_CONTRASEÑA = false;  
    } else {
      confirmarContraseña.classList.remove("es-visible");
      errorConfirmarContraseña.classList.add("es-invisible");
      ES_VALIDO_CONFIRMAR_CONTRASEÑA = true;
      }

  //verificación métodos de pago

  if (!selectedPaymentMethod) {
    errorMetodosPago.classList.add("es-visible");
    errorMetodosPago.classList.remove("es-invisible");
    errorMetodosPago.textContent = MENSAJE_ERROR.metodoDePago.vacio;
    return;
    } else {
      errorMetodosPago.classList.remove("es-visible");
      errorMetodosPago.classList.add("es-invisible");
      ES_VALIDO_METODOS_PAGO = true;
      }

  // verificación tarjeta de crédito
  
  if (selectedPaymentMethod.value === "creditCard") {
    
    if (!cardNumber || cardNumber.length < 16 || 
    cardNumber.length > 19 || !/^\d+$/.test(cardNumber)) {
      errorNumeroTarjeta.classList.add("es-visible");
      errorNumeroTarjeta.classList.remove("es-invisible");
      errorNumeroTarjeta.textContent = MENSAJE_ERROR.numeroDeTarjeta.noValidoPorDigitos;
      cardNumber.focus();
      ES_VALIDO_METODOS_PAGO = false;
      return;
      } else if (!isValidCardNumber(cardNumber)) {
        errorNumeroTarjeta.classList.add("es-visible");
        errorNumeroTarjeta.classList.remove("es-invisible");
        errorNumeroTarjeta.textContent = MENSAJE_ERROR.numeroDeTarjeta.noValidoPorCondiciones;
        cardNumber.focus();
        ES_VALIDO_METODOS_PAGO = false;
        return;
        } else {
          errorNumeroTarjeta.classList.remove("es-visible");
          errorNumeroTarjeta.classList.add("es-invisible");
          ES_VALIDO_METODOS_PAGO = true;
          }

    if (cardCVC.value.length !== 3 || !validarClaveTarjeta(cardCVC.value)) {
      errorClaveTarjeta.classList.add("es-visible");
      errorClaveTarjeta.classList.remove("es-invisible");
      errorClaveTarjeta.textContent = MENSAJE_ERROR.claveTarjeta.noValidoPorDigitos;
      cardCVC.focus();
      ES_VALIDO_METODOS_PAGO = false;
      return;
        } else if (cardCVC.value === "000") {
        errorClaveTarjeta.classList.add("es-visible");
        errorClaveTarjeta.classList.remove("es-invisible");
        errorClaveTarjeta.textContent = MENSAJE_ERROR.claveTarjeta.noValidoPorCeros;
        cardCVC.focus();
        ES_VALIDO_METODOS_PAGO = false;
        } else {
          errorClaveTarjeta.classList.remove("es-visible");
          errorClaveTarjeta.classList.add("es-invisible");
          ES_VALIDO_METODOS_PAGO = true;
          }
    } else {
      errorNumeroTarjeta.classList.remove("es-visible");
      errorNumeroTarjeta.classList.add("es-invisible");
      errorClaveTarjeta.classList.remove("es-visible");
      errorClaveTarjeta.classList.add("es-invisible");
    }

    const USUARIO_REGISTRADO = {
      nombre: nombre.value,
      apellido: apellido.value,
      email: email.value,
      usuario: usuario.value,
      contraseña: contraseña.value,
      paymentMethod: selectedPaymentMethod.value,
      cardNumber:
        selectedPaymentMethod.value === "creditCard"
          ? document.getElementById("cardNumber").value
          : null,
      cardCVC: selectedPaymentMethod.value === "creditCard" ? cardCVC : null,
    };

    // si todo es correcto, guarda y dirige a otra pestaña

    if (ES_VALIDO_NOMBRE && ES_VALIDO_APELLIDO && ES_VALIDO_EMAIL && 
    ES_VALIDO_USUARIO && ES_VALIDO_CONTRASEÑA && ES_VALIDO_CONFIRMAR_CONTRASEÑA
    && ES_VALIDO_METODOS_PAGO){
      USUARIOS.push(USUARIO_REGISTRADO);
      localStorage.setItem("DATOS REGISTRADOS", JSON.stringify(USUARIOS));
      window.location.href = "login.html";
    };

  });

function isValidCardNumber(cardNumber) {
  const digits = cardNumber.split("").map(Number);
  const lastDigit = digits.pop();
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  return (
    (sum % 2 === 0 && lastDigit % 2 !== 0) ||
    (sum % 2 !== 0 && lastDigit % 2 === 0)
  );
}

// Restricciones en tiempo real para los campos de tarjeta de crédito y CVC
document.getElementById("cardNumber").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "").slice(0, 19);
});

document.getElementById("cardCVC").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "").slice(0, 3);
});


//validaciones de las expresiones

function validarNombreYApellido (texto) {
  return EXPRESION_NOMBREAPELLIDO.test(texto);
}

function validarUsuario (texto) {
  return EXPRESION_USUARIO.test(texto);
}

function validarEmail (texto) {
  return EXPRESION_EMAIL.test(texto);
}

function validarContraseña (texto) {
  return EXPRESION_CONTRASEÑA.test(texto);
}

function validarClaveTarjeta (texto) {
  return EXPRESION_CODIGO_TARJETA.test(texto);
}

//verificar ya existente

function yaExisteElUsuario(usuarioAEncontrar){
  let existe = false;
  for (let usuarioRegistrado of USUARIOS){
    if (usuarioRegistrado.usuario === usuarioAEncontrar){
      existe = true;
    }
  }
  return existe;
}

function yaExisteElEmail(emailAEncontrar){
  let existe = false;
  for (let emailRegistrado of USUARIOS){
    if (emailRegistrado.email === emailAEncontrar){
      existe = true;
    }
  }
  return existe;
}

