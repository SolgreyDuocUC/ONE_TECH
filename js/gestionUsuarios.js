
function mostrarMensaje(texto, tipo = "exito", duracion = 20000) {
  const divMensaje = document.getElementById("mensaje");
  divMensaje.textContent = texto;
  divMensaje.className = "mensaje"; // reset clases
  if (tipo === "error") divMensaje.classList.add("error");
  divMensaje.style.display = "block";

  setTimeout(() => {
    divMensaje.style.display = "none";
  }, duracion);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formRegistro");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

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

      // Validaciones
      if (nombre.length < 3) {
        mostrarMensaje("El nombre debe tener al menos 3 caracteres.", "error");
        return;
      }

      const rutRegex = /^[0-9]{7,8}-[0-9Kk]{1}$/;
      if (!rutRegex.test(rut)) {
        mostrarMensaje("El RUT no es válido. Ejemplo válido: 12345678-9", "error");
        return;
      }

      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoRegex.test(correo)) {
        mostrarMensaje("El correo no tiene un formato válido.", "error");
        return;
      }
      if (!(correo.endsWith("@duoc.cl") || correo.endsWith("@profesor.duoc.cl") || correo.endsWith("@gmail.com"))) {
        mostrarMensaje("Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com", "error");
        return;
      }

      const telRegex = /^\+56\s?9\d{8}$/;
      if (!telRegex.test(telefono)) {
        mostrarMensaje("El teléfono debe tener el formato +56 9XXXXXXXX", "error");
        return;
      }

      if (direccion.length > 300) {
        mostrarMensaje("La dirección no puede superar los 300 caracteres.", "error");
        return;
      }

      if (region === "") {
        mostrarMensaje("Debes seleccionar una región.", "error");
        return;
      }
      if (comuna.length < 2) {
        mostrarMensaje("Debes ingresar una comuna válida.", "error");
        return;
      }

      if (pass1.length < 6) {
        mostrarMensaje("La contraseña debe tener al menos 6 caracteres.", "error");
        return;
      }
      if (pass1 !== pass2) {
        mostrarMensaje("Las contraseñas no coinciden.", "error");
        return;
      }

      if (!terminos) {
        mostrarMensaje("Debes aceptar los términos y condiciones.", "error");
        return;
      }

      // Si todo está bien
      mostrarMensaje("Registro exitoso. ¡Bienvenido/a!");
      form.reset();
    });
  }

  // Ejemplo para login
  const formLogin = document.getElementById("formLogin");
  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      // Aquí validaciones de login
      mostrarMensaje("Inicio de sesión correcto. ¡Bienvenido!", "exito");
    });
  }

  // Ejemplo para recuperación de contraseña
  const formRecuperar = document.getElementById("formRecuperar");
  if (formRecuperar) {
    formRecuperar.addEventListener("submit", (e) => {
      e.preventDefault();
      // Aquí validar correo y enviar solicitud
      mostrarMensaje("Se envió un correo de recuperación de contraseña.", "exito");
    });
  }
});
