document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const cardCVC = document.getElementById("cardCVC").value;

    // Patrón para la contraseña: mínimo 2 letras, 2 números, 2 caracteres especiales y al menos 8 caracteres de longitud
    const passwordPattern =
      /^(?=(.*[A-Za-z]){2})(?=(.*\d){2})(?=(.*[^A-Za-z0-9]){2}).{8,}$/;

    if (!firstName.match(/^[A-Za-z]+$/)) {
      alert("El nombre solo puede contener letras");
      document.getElementById("firstName").focus();
      return;
    }

    if (!lastName.match(/^[A-Za-z]+$/)) {
      alert("El apellido solo puede contener letras");
      document.getElementById("lastName").focus();
      return;
    }

    if (!username.match(/^[A-Za-z0-9]+$/)) {
      alert("El nombre de usuario solo puede contener letras y números");
      document.getElementById("username").focus();
      return;
    }

    if (!password.match(passwordPattern)) {
      alert(
        "La contraseña debe tener al menos 8 caracteres, incluyendo al menos dos letras, dos números y dos caracteres especiales"
      );
      document.getElementById("password").focus();
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      document.getElementById("confirmPassword").focus();
      return;
    }

    const selectedPaymentMethod = document.querySelector(
      'input[name="payMethod"]:checked'
    );
    if (!selectedPaymentMethod) {
      alert("Por favor, seleccione un método de pago");
      return;
    }

    if (selectedPaymentMethod.value === "creditCard") {
      const cardNumber = document.getElementById("cardNumber").value;

      if (
        !cardNumber ||
        cardNumber.length < 16 ||
        cardNumber.length > 19 ||
        !/^\d+$/.test(cardNumber)
      ) {
        alert("El número de tarjeta debe contener entre 16 y 19 dígitos");
        document.getElementById("cardNumber").focus();
        return;
      }

      if (!isValidCardNumber(cardNumber)) {
        alert("El número de la tarjeta es inválido");
        document.getElementById("cardNumber").focus();
        return;
      }

      if (cardCVC.length !== 3 || !/^\d{3}$/.test(cardCVC)) {
        alert("El código CVC debe contener exactamente 3 dígitos");
        document.getElementById("cardCVC").focus();
        return;
      }

      if (cardCVC === "000") {
        alert('El código CVC no puede ser "000"');
        document.getElementById("cardCVC").focus();
        return;
      }
    }

    const formData = {
      firstName,
      lastName,
      email,
      username,
      password,
      paymentMethod: selectedPaymentMethod.value,
      cardNumber:
        selectedPaymentMethod.value === "creditCard"
          ? document.getElementById("cardNumber").value
          : null,
      cardCVC: selectedPaymentMethod.value === "creditCard" ? cardCVC : null,
    };

    console.log("Formulario guardado en Session Storage:", formData);
    sessionStorage.setItem("formData", JSON.stringify(formData));
    alert("Formulario enviado con éxito y guardado en Session Storage");
    window.location.href = "login.html";
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
