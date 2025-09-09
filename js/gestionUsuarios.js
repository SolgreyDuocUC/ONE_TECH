
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formRegistro");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita enviar el form hasta validar todo

    const nombre = document.getElementById("nombre").value.trim();
    const rut = document.getElementById("rut").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const region = document.getElementById("region").value;
    const comuna = document.getElementById("comuna").value.trim();
    const pass1 = document.getElementById("password").value;
    const pass2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;

    // Validar nombre
    if (nombre.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      return;
    }

    // Validar RUT chileno simple
    const rutRegex = /^[0-9]{7,8}-[0-9Kk]{1}$/;
    if (!rutRegex.test(rut)) {
      alert("El RUT no es válido. Ejemplo válido: 12345678-9");
      return;
    }

    // Validar correo permitido
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      alert("El correo no tiene un formato válido.");
      return;
    }
    if (
      !(
        correo.endsWith("@duoc.cl") ||
        correo.endsWith("@profesor.duoc.cl") ||
        correo.endsWith("@gmail.com")
      )
    ) {
      alert("Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com");
      return;
    }

    // Validar teléfono chileno básico
    const telRegex = /^\+56\s?9\d{8}$/;
    if (!telRegex.test(telefono)) {
      alert("El teléfono debe tener el formato +56 9XXXXXXXX");
      return;
    }

    // Dirección
    if (direccion.length > 300) {
      alert("La dirección no puede superar los 300 caracteres.");
      return;
    }

    // Región y comuna
    if (region === "") {
      alert("Debes seleccionar una región.");
      return;
    }
    if (comuna.length < 2) {
      alert("Debes ingresar una comuna válida.");
      return;
    }

    // Contraseñas
    if (pass1.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (pass1 !== pass2) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Términos
    if (!terminos) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    // Si todo está bien
    alert("Registro exitoso. ¡Bienvenido/a!");
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("formRegistro")) {
    // código de registro
  }
  if (document.getElementById("formLogin")) {
    // código de login
  }
  if (document.getElementById("formRecuperar")) {
    // código de recuperación
  }
});

