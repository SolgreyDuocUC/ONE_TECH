// ======================================================
// ONE TECH - Funciones principales (navegación y carrito)
// ======================================================

// ----------------------
// Gestión del carrito
// ----------------------

// Recuperar carrito desde localStorage o iniciar vacío
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Actualizar el contador en el icono del carrito (navbar)
function actualizarContadorCarrito() {
  const cartCount = document.getElementById('cart-count');
  if (!cartCount) return;

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  cartCount.textContent = totalItems;
}

// Agregar producto al carrito
function agregarAlCarrito(producto) {
  // Buscar si ya existe en el carrito
  const index = carrito.findIndex(item => item.id === producto.id);
  if (index !== -1) {
    carrito[index].cantidad += producto.cantidad;
  } else {
    carrito.push(producto);
  }

  // Guardar en localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Actualizar contador
  actualizarContadorCarrito();

  alert(`${producto.nombre} agregado al carrito`);
}

// Conectar botones "Agregar al carrito" con clase .btn-agregar
function configurarBotonesCarrito() {
  const botones = document.querySelectorAll('.btn-agregar');
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      // Puedes personalizar según la página y el producto
      const producto = {
        id: boton.dataset.id,            // atributo data-id en HTML
        nombre: boton.dataset.nombre,    // atributo data-nombre en HTML
        precio: parseInt(boton.dataset.precio), // atributo data-precio en HTML
        cantidad: 1
      };
      agregarAlCarrito(producto);
    });
  });
}

// ----------------------
// UI general
// ----------------------
document.addEventListener('DOMContentLoaded', () => {

  // Mostrar/ocultar botón "Volver arriba"
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    // Scroll suave al hacer clic
    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

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

  // Iniciar contador y botones del carrito
  actualizarContadorCarrito();
  configurarBotonesCarrito();
});

// Función para validar formato de correo electrónico
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
