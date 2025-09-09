// Incrementar contador del carrito
let carrito = 0;

function agregarAlCarrito() {
  carrito++;
  document.getElementById('cart-count').textContent = carrito;
}

// Y luego puedes conectar esto a un botón "Agregar al carrito"
const botones = document.querySelectorAll('.btn-agregar'); // Suponiendo que tengan esa clase
botones.forEach(boton => {
  boton.addEventListener('click', agregarAlCarrito);
});


// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

  // Mostrar/ocultar botón "Volver arriba"
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  // Volver arriba suavemente
  backToTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Validación básica del campo de email en footer
  const emailInput = document.querySelector('footer input[type="email"]');
  const enviarBtn = document.querySelector('footer .btn');

  if (emailInput && enviarBtn) {
    enviarBtn.addEventListener('click', () => {
      const email = emailInput.value.trim();
      if (!validarEmail(email)) {
        alert('Por favor ingresa un correo válido.');
      } else {
        alert('¡Gracias por suscribirte!');
        emailInput.value = '';
      }
    });
  }

  // Función para validar formato de correo electrónico
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

});
