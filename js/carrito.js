// ===========================================
// ONE TECH - Carrito de Compras (Frontend)
// ===========================================

// Recupera el carrito de localStorage o crea uno vacío
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para actualizar el contador de carrito en la navbar
function actualizarContador() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    cartCount.textContent = totalItems;
}

// Función para agregar producto al carrito
function agregarAlCarrito(producto) {
    // Revisar si el producto ya está en el carrito
    const index = carrito.findIndex(item => item.id === producto.id);
    if (index !== -1) {
        // Sumar cantidad si ya existe
        carrito[index].cantidad += producto.cantidad;
    } else {
        carrito.push(producto);
    }
    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
    alert(`${producto.nombre} se agregó al carrito`);
}

// Función para eliminar producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
    mostrarCarrito(); // Para actualizar la vista en cart.html
}

// Función para mostrar el carrito en cart.html
function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    if (!carritoContainer) return; // Evita errores si no hay contenedor

    carritoContainer.innerHTML = '';

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }

    carrito.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'carrito-item mb-3 p-3 border rounded bg-dark';
        itemDiv.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h5>${item.nombre}</h5>
                    <p>Precio: $${item.precio.toLocaleString()} CLP</p>
                    <p>Cantidad: ${item.cantidad}</p>
                    <p>Subtotal: $${(item.precio * item.cantidad).toLocaleString()} CLP</p>
                </div>
                <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito('${item.id}')">Eliminar</button>
            </div>
        `;
        carritoContainer.appendChild(itemDiv);
    });

    // Mostrar total general
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const totalDiv = document.createElement('div');
    totalDiv.className = 'total-carrito mt-3';
    totalDiv.innerHTML = `<h4>Total: $${total.toLocaleString()} CLP</h4>`;
    carritoContainer.appendChild(totalDiv);
}

// Función para manejar el formulario de cantidad en detalle de producto
function setupDetalleProducto() {
    const form = document.querySelector('form[action="seleccionar_producto"]');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const cantidad = parseInt(document.getElementById('cantidad_product_ps5').value);
        const producto = {
            id: 'CO001', // ID único del producto, cambia según la página
            nombre: 'PlayStation 5',
            precio: 549990,
            cantidad: cantidad,
            imagen: '/detalle_producto_contact_us_resenias_/productos/ps5_1.png'
        };

        agregarAlCarrito(producto);
    });
}

// Inicializar contador al cargar
document.addEventListener('DOMContentLoaded', () => {
    actualizarContador();
    setupDetalleProducto();
    mostrarCarrito();
});
