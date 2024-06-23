const JSON_USUARIOS_REGISTRADOS = localStorage.getItem("DATOS REGISTRADOS");
const USUARIOS_REGISTRADOS = JSON.parse(JSON_USUARIOS_REGISTRADOS);

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
  }
}


document.querySelector(".botonGuardar").addEventListener("click", function (event) {
   
    event.preventDefault();


  const nuevaContraseña = document.querySelector("#nueva-contraseña");
  const repetirContraseña = document.querySelector(".repetir-contraseña");
  const numeroDeTarjeta = document.querySelector(".numeroDeTarjeta");
  const claveDeTarjeta = document.querySelector(".claveDeTarjeta");
  const errorNuevaContraseña = document.querySelector(".p-nueva-contraseña");
  const errorRepetirContraseña = document.querySelector(".p-repetir-contraseña");
  const errorMetodosPago = document.querySelector(".p-metodos-pago");
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
    
    if (!numeroDeTarjeta || numeroDeTarjeta.length < 16 || 
      numeroDeTarjeta.length > 19 || !/^\d+$/.test(numeroDeTarjeta)) {
      errorNumeroTarjeta.classList.add("es-visible");
      errorNumeroTarjeta.classList.remove("es-invisible");
      errorNumeroTarjeta.textContent = MENSAJE_ERROR.numeroDeTarjeta.noValidoPorDigitos;
      numeroDeTarjeta.focus();
      ES_VALIDO_METODOS_PAGO = false;
      } else if (!isValidCardNumber(numeroDeTarjeta)) {
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

    if ((ES_VALIDO_CONTRASEÑA && ES_VALIDO_RECUPERAR_CONTRASEÑA) || (ES_VALIDO_METODOS_PAGO)){
      window.location.href = "pantallaPrincipal.html"
      };
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