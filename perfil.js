const JSON_USUARIOS_REGISTRADOS = localStorage.getItem("DATOS REGISTRADOS");
const USUARIOS_REGISTRADOS = JSON.parse(JSON_USUARIOS_REGISTRADOS);

const USUARIO_ACTUAL = localStorage.getItem("USUARIO ACTUAL");
const EMAIL_ACTUAL = localStorage.getItem("EMAIL ACTUAL");
const FORMA_PAGO_ACTUAL = localStorage.getItem("FORMA DE PAGO ACTUAL");
let NUMERO_TARJETA_ACTUAL;
let CUPON_PAGO_ACTUAL;
if (FORMA_PAGO_ACTUAL === "creditCard"){
  NUMERO_TARJETA_ACTUAL = localStorage.getItem("NUMERO TARJETA ACTUAL");
} else if (FORMA_PAGO_ACTUAL === "cuponDePago"){
  CUPON_PAGO_ACTUAL = localStorage.getItem("CUPON DE PAGO ACTUAL");
}

const EXPRESION_CONTRASEÑA = /^(?=(.*[A-Za-z]){2})(?=(.*\d){2})(?=(.*[^A-Za-z0-9]){2}).{8,}$/;
const EXPRESION_CODIGO_TARJETA = /^\d{3}$/;

const MENSAJE_ERROR = {
  contraseña:{
    noValido: "Debe tener al menos 8 caracteres, incluyendo al menos dos letras, dos números y dos caracteres especiales",
    noCoincide: "Las contraseñas no coinciden"
  },
  claveTarjeta:{
    noValidoPorCeros: "Revise la clave de su tarjeta",
    noValidoPorDigitos: "La clave debe contener 3 dígitos"
  },
  numeroDeTarjeta:{
    noValidoPorDigitos: "El número de tarjeta debe contener entre 16 y 19 dígitos",
    noValidoPorCondiciones: "Tarjeta inválida"
  },
  cuponDePago:{
    vacio: "Seleccione al menos un tipo de cupón de pago"
  },
}

const nombreDeUsuario = document.querySelector(".nombre-de-usuario");
nombreDeUsuario.textContent = USUARIO_ACTUAL;
const email = document.querySelector(".email-del-usuario");
email.textContent = EMAIL_ACTUAL;
const tarjetaRegistrada = document.querySelector(".tarjeta-del-usuario");
tarjetaRegistrada.textContent = NUMERO_TARJETA_ACTUAL;
const textoTarjeta = document.querySelector(".h4-tarjeta");

//seleccion de todos los inputs, para chequearlos después de su validación
const metodoDePago_cuponDePago = document.querySelector('input[value="cuponDePago"]');
const metodoDePago_transferenciaBancaria = document.querySelector('input[value="transferenciaBancaria"]');
const cuponDePago_pagoFacil = document.querySelector('input[value="pagoFacil"]');
const cuponDePago_rapiPago = document.querySelector('input[value="rapipago"]');   

  if (FORMA_PAGO_ACTUAL === "pagoFacil" || FORMA_PAGO_ACTUAL === "rapipago" || FORMA_PAGO_ACTUAL === "cuponDePago"){
    metodoDePago_cuponDePago.checked = true;
    if (FORMA_PAGO_ACTUAL === "pagoFacil" || CUPON_PAGO_ACTUAL === "pagoFacil"){
      cuponDePago_pagoFacil.checked = true;
    } else if (FORMA_PAGO_ACTUAL === "rapipago" || CUPON_PAGO_ACTUAL === "rapipago"){
      cuponDePago_rapiPago.checked = true;
    }
  } else if (FORMA_PAGO_ACTUAL === "transferenciaBancaria" || FORMA_PAGO_ACTUAL === "bankTransfer"){
    metodoDePago_transferenciaBancaria.checked = true;
  } else if (FORMA_PAGO_ACTUAL === "creditCard"){
    textoTarjeta.classList.remove("es-invisible");
  }


document.querySelector(".botonGuardar").addEventListener("click", function (event) {
   
  event.preventDefault();


  const nuevaContraseña = document.querySelector("#nueva-contraseña");
  const repetirContraseña = document.querySelector(".repetir-contraseña");
  const numeroDeTarjeta = document.querySelector(".numeroDeTarjeta");
  const claveDeTarjeta = document.querySelector(".claveDeTarjeta");
  const errorNuevaContraseña = document.querySelector(".p-nueva-contraseña");
  const errorRepetirContraseña = document.querySelector(".p-repetir-contraseña");
  const errorNumeroTarjeta = document.querySelector(".p-numero-tarjeta");
  const errorClaveTarjeta = document.querySelector(".p-clave-tarjeta");
  const errorCuponPago = document.querySelector(".p-cupon-pago");

  //busca de todos los métodos de pago, uno que esté tildado
  const seleccionarMetodoDePago = document.querySelector('input[name="payMethod"]:checked');
  const seleccionarCuponDePago = document.querySelector('input[name="payMethod1"]:checked');

  let ES_VALIDO_CONTRASEÑA = false;
  let ES_VALIDO_RECUPERAR_CONTRASEÑA = false;
  let ES_VALIDO_METODOS_PAGO = false;

  // verificación contraseñas
  if (nuevaContraseña.value !== "" || repetirContraseña.value !== ""){
    if (!validarContraseña(nuevaContraseña.value)) {
      nuevaContraseña.classList.add("es-visible");
      errorNuevaContraseña.classList.remove("es-invisible");
      errorNuevaContraseña.textContent = MENSAJE_ERROR.contraseña.noValido;
      nuevaContraseña.focus();
      ES_VALIDO_CONTRASEÑA = false;
      } else {
        nuevaContraseña.classList.remove("es-visible");
        errorNuevaContraseña.classList.add("es-invisible");
        ES_VALIDO_CONTRASEÑA = true;
        }
    
    if (nuevaContraseña.value !== repetirContraseña.value) {
      repetirContraseña.classList.add("es-visible");
      errorRepetirContraseña.classList.remove("es-invisible");
      errorRepetirContraseña.textContent = MENSAJE_ERROR.contraseña.noCoincide;
      repetirContraseña.focus();
      ES_VALIDO_RECUPERAR_CONTRASEÑA = false;
      } else {
        repetirContraseña.classList.remove("es-visible");
        errorRepetirContraseña.classList.add("es-invisible");
        ES_VALIDO_RECUPERAR_CONTRASEÑA = true;
        }
    }
  //verificación métodos de pago
if (seleccionarMetodoDePago){

  if (seleccionarMetodoDePago.value === "transferenciaBancaria") {
    ES_VALIDO_METODOS_PAGO = true;
  }

  if (seleccionarMetodoDePago.value === "cuponDePago") {
    if (!seleccionarCuponDePago){
      errorCuponPago.classList.add("es-visible");
      errorCuponPago.classList.remove("es-invisible");
      errorCuponPago.textContent = MENSAJE_ERROR.cuponDePago.vacio;
      ES_VALIDO_METODOS_PAGO = false;
      } else {
        errorCuponPago.classList.remove("es-visible");
        errorCuponPago.classList.add("es-invisible");
        ES_VALIDO_METODOS_PAGO = true;
      }
    } else {
      errorCuponPago.classList.remove("es-visible");
      errorCuponPago.classList.add("es-invisible");
    }

  // verificación tarjeta de crédito
  
  if (seleccionarMetodoDePago.value === "creditCard") {
    
    if (!numeroDeTarjeta.value || numeroDeTarjeta.value.length < 16 || 
      numeroDeTarjeta.value.length > 19 || !/^\d+$/.test(numeroDeTarjeta.value)) {
      errorNumeroTarjeta.classList.add("es-visible");
      errorNumeroTarjeta.classList.remove("es-invisible");
      errorNumeroTarjeta.textContent = MENSAJE_ERROR.numeroDeTarjeta.noValidoPorDigitos;
      numeroDeTarjeta.focus();
      ES_VALIDO_METODOS_PAGO = false;
      } else if (!isValidCardNumber(numeroDeTarjeta.value)) {
        errorNumeroTarjeta.classList.add("es-visible");
        errorNumeroTarjeta.classList.remove("es-invisible");
        errorNumeroTarjeta.textContent = MENSAJE_ERROR.numeroDeTarjeta.noValidoPorCondiciones;
        numeroDeTarjeta.focus();
        ES_VALIDO_METODOS_PAGO = false;
        } else {
          errorNumeroTarjeta.classList.remove("es-visible");
          errorNumeroTarjeta.classList.add("es-invisible");
          ES_VALIDO_METODOS_PAGO = true;
          }

    if (claveDeTarjeta.value.length !== 3 || !validarClaveTarjeta(claveDeTarjeta.value)) {
      errorClaveTarjeta.classList.add("es-visible");
      errorClaveTarjeta.classList.remove("es-invisible");
      errorClaveTarjeta.textContent = MENSAJE_ERROR.claveTarjeta.noValidoPorDigitos;
      claveDeTarjeta.focus();
      ES_VALIDO_METODOS_PAGO = false;
        } else if (claveDeTarjeta.value === "000") {
        errorClaveTarjeta.classList.add("es-visible");
        errorClaveTarjeta.classList.remove("es-invisible");
        errorClaveTarjeta.textContent = MENSAJE_ERROR.claveTarjeta.noValidoPorCeros;
        claveDeTarjeta.focus();
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
  }

    if ((ES_VALIDO_CONTRASEÑA && ES_VALIDO_RECUPERAR_CONTRASEÑA) || (ES_VALIDO_METODOS_PAGO)){
      for (let usuarioActualizado of USUARIOS_REGISTRADOS){
        if (usuarioActualizado.usuario === USUARIO_ACTUAL){
          if (ES_VALIDO_CONTRASEÑA && ES_VALIDO_RECUPERAR_CONTRASEÑA){
            usuarioActualizado.contraseña = nuevaContraseña.value;
          }
          if (ES_VALIDO_METODOS_PAGO){
            usuarioActualizado.paymentMethod = seleccionarMetodoDePago.value;
            usuarioActualizado.numeroDeTarjeta = (seleccionarMetodoDePago.value === "creditCard") ? numeroDeTarjeta.value : null;
            usuarioActualizado.cardCVC = (seleccionarMetodoDePago.value === "creditCard") ? claveDeTarjeta.value : null;
            localStorage.setItem("FORMA DE PAGO ACTUAL", seleccionarMetodoDePago.value);
            if (seleccionarMetodoDePago.value === "creditCard"){
                localStorage.setItem("NUMERO TARJETA ACTUAL", numeroDeTarjeta.value);
            } else if (seleccionarMetodoDePago.value === "cuponDePago"){
              localStorage.setItem("CUPON DE PAGO ACTUAL", seleccionarCuponDePago.value)
            }
          }
        }
      }
      localStorage.setItem("DATOS REGISTRADOS", JSON.stringify(USUARIOS_REGISTRADOS));

      window.location.href = "pantallaPrincipal.html"

      }
});

function validarContraseña (texto) {
  return EXPRESION_CONTRASEÑA.test(texto);
}

function validarClaveTarjeta (texto) {
  return EXPRESION_CODIGO_TARJETA.test(texto);
}

function isValidCardNumber(cardNumber) {
  const digits = cardNumber.split("").map(Number);
  const lastDigit = digits.pop();
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  return (
    (sum % 2 === 0 && lastDigit % 2 !== 0) ||
    (sum % 2 !== 0 && lastDigit % 2 === 0)
  );
}

document.querySelector(".botonCancelar").addEventListener("click", function (event) {
  
  event.preventDefault();

  const USUARIOS_REGISTRADOS_NUEVO = [];

  for (let i = 0; i < USUARIOS_REGISTRADOS.length; i++){
    if (USUARIOS_REGISTRADOS[i].usuario !== USUARIO_ACTUAL){
      USUARIOS_REGISTRADOS_NUEVO.push(USUARIOS_REGISTRADOS[i]);
    }
  }

  localStorage.setItem("DATOS REGISTRADOS", JSON.stringify(USUARIOS_REGISTRADOS_NUEVO));

  window.location.href = "index.html"

});