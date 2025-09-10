/* =========================
   ONE TECH - JS Productos Gamer
   ========================= */

// =========================
// Datos de Productos
// =========================
const productos = [
  {
    id: 'JM001',
    nombre: 'Catan',
    descripcion: 'Juego de estrategia para 3-4 jugadores. Expande tu territorio y negocia recursos con amigos.',
    precio: 29990,
    categoria: 'Juegos de Mesa',
    imagen: 'img/main/productos main/JM001 Juegos de Mesa Catan.webp',
    stock: 10,
    stockCritico: 2
  },
  {
    id: 'JM002',
    nombre: 'Carcassonne',
    descripcion: 'Coloca losetas estratégicamente para construir ciudades y caminos.',
    precio: 24990,
    categoria: 'Juegos de Mesa',
    imagen: 'img/productos/carcassonne.png',
    stock: 8,
    stockCritico: 2
  },
  {
    id: 'AC001',
    nombre: 'Controlador Xbox Series X',
    descripcion: 'Botones mapeables y respuesta táctil mejorada. Compatible con Xbox y PC.',
    precio: 59990,
    categoria: 'Accesorios',
    imagen: 'img/productos/xboxseriesx.png',
    stock: 15,
    stockCritico: 3
  },
  {
    id: 'AC002',
    nombre: 'HyperX Cloud II',
    descripcion: 'Sonido envolvente 7.1, micrófono con cancelación de ruido y comodidad para largas sesiones de juego.',
    precio: 79990,
    categoria: 'Accesorios',
    imagen: 'img/productos/xboxseriess.png',
    stock: 20,
    stockCritico: 5
  },
  {
    id: 'CO001',
    nombre: 'PlayStation 5',
    descripcion: 'Consola de última generación con gráficos impresionantes y tiempos de carga ultrarrápidos.',
    precio: 549990,
    categoria: 'Consolas',
    imagen: 'img/productos/OF_xboxseriess.png',
    stock: 5,
    stockCritico: 1
  },
  {
    id: 'CG001',
    nombre: 'PC Gamer ASUS ROG Strix',
    descripcion: 'Potente PC gamer con procesador de última generación, tarjeta gráfica RTX y refrigeración avanzada.',
    precio: 1299990,
    categoria: 'Computadoras',
    imagen: 'img/productos/notebook.png',
    stock: 3,
    stockCritico: 1
  },
  {
    id: 'SG001',
    nombre: 'Silla Gamer Secretlab Titan',
    descripcion: 'Silla ergonómica con soporte lumbar y ajustes personalizados para largas sesiones de juego.',
    precio: 349990,
    categoria: 'Sillas',
    imagen: 'img/main/productos main/SG001 Sillas Gamers Silla Gamer Secretlab Titan.webp',
    stock: 12,
    stockCritico: 2
  },
  {
    id: 'MS001',
    nombre: 'Mouse Gamer Logitech G502 HERO',
    descripcion: 'Sensor de alta precisión, personalizable y cómodo para juegos de todo tipo.',
    precio: 49990,
    categoria: 'Mouse',
    imagen: 'img/main/productos main/MS001 Mouse Mouse Gamer Logitech G502 HERO.webp',
    stock: 25,
    stockCritico: 5
  },
  {
    id: 'MP001',
    nombre: 'Mousepad Razer Goliathus Extended Chroma',
    descripcion: 'Mousepad extendido con iluminación RGB personalizable para una experiencia gaming completa.',
    precio: 29990,
    categoria: 'Mousepad',
    imagen: 'img/productos/mousepad.png',
    stock: 30,
    stockCritico: 5
  },
  {
    id: 'PP001',
    nombre: "Polera Gamer 'Level-Up'",
    descripcion: "Diseño original 'Level-Up', cómoda y perfecta para mostrar tu pasión por los videojuegos.",
    precio: 14990,
    categoria: 'Poleras',
    imagen: 'img/productos/navi.png',
    stock: 50,
    stockCritico: 10
  }
];

// =========================
// Carrito de Compras
// =========================
let carrito = [];

// Mostrar conteo en el carrito
function actualizarCarrito() {
  document.getElementById('cart-count').textContent = carrito.length;
}

// Agregar producto al carrito
function agregarAlCarrito(productId) {
  const producto = productos.find(p => p.id === productId);
  if (producto) {
    carrito.push(producto);
    actualizarCarrito();
    alert(`${producto.nombre} agregado al carrito`);
  }
}

// =========================
// Renderizado de Productos
// =========================
function mostrarProductos(listaProductos) {
  const contenedor = document.querySelector('.productos-destacados .row');
  contenedor.innerHTML = '';

  listaProductos.forEach(producto => {
    const col = document.createElement('div');
    col.className = 'col-md-3 col-sm-6 mb-4';
    col.innerHTML = `
      <div class="card gamer-card h-100">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.id} - ${producto.nombre}</h5>
          <p class="card-text"><strong>${producto.nombre}:</strong> ${producto.descripcion}</p>
          <p class="text-accent font-weight-bold">${producto.precio === 0 ? 'FREE' : '$' + producto.precio.toLocaleString()} CLP</p>
          <button class="btn btn-accent btn-sm" onclick="agregarAlCarrito('${producto.id}')">Agregar al carrito</button>
        </div>
      </div>
    `;
    contenedor.appendChild(col);
  });
}

// Inicializar productos
mostrarProductos(productos);

// =========================
// Filtros y Categorías
// =========================
function filtrarPorCategoria(categoria) {
  if (categoria === 'Todos') {
    mostrarProductos(productos);
  } else {
    mostrarProductos(productos.filter(p => p.categoria === categoria));
  }
}

// =========================
// Validaciones Formularios
// =========================
function validarCodigoProducto(codigo) {
  return codigo && codigo.length >= 3;
}

function validarPrecio(precio) {
  return precio !== '' && !isNaN(precio) && precio >= 0;
}

function validarStock(stock) {
  return Number.isInteger(stock) && stock >= 0;
}

function validarStockCritico(stockCritico) {
  return stockCritico === '' || (Number.isInteger(stockCritico) && stockCritico >= 0);
}

function validarCorreo(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
  return regex.test(correo);
}

function validarRUN(run) {
  const regex = /^[0-9]{7,9}$/;
  return regex.test(run);
}

// =========================
// Login Simulado
// =========================
const usuarios = [
  { correo: 'admin@duoc.cl', rol: 'Administrador', password: 'admin123' },
  { correo: 'vendedor@duoc.cl', rol: 'Vendedor', password: 'vend123' },
  { correo: 'cliente@gmail.com', rol: 'Cliente', password: 'cli123' }
];

function loginSimulado(correo, password) {
  const usuario = usuarios.find(u => u.correo === correo && u.password === password);
  if (usuario) {
    alert(`Bienvenido ${usuario.rol}`);
    return usuario.rol;
  } else {
    alert('Correo o contraseña incorrectos');
    return null;
  }
}

// =========================
// Regiones y Comunas
// =========================
const regiones = {
  "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
  "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
  "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
  "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
  "Valparaíso": ["Valparaíso", "Viña del Mar", "Quintero", "Puchuncaví", "Quilpué", "Villa Alemana", "Casablanca", "Concón", "Juan Fernández", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo"],
  "Metropolitana": ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro"],
  "O'Higgins": ["Rancagua", "Machalí", "Mostazal", "Codegua", "Graneros", "Doñihue", "Coltauco", "Olivar", "Coinco", "Rengo", "San Vicente", "Pichidegua", "Las Cabras", "Peumo", "Paredones", "Pichilemu", "La Estrella", "Litueche", "Marchigüe", "Navidad", "Placilla", "Lolol", "Santa Cruz", "Chépica", "La Estrella", "Nancagua", "Palmilla", "Peralillo", "Pumanque"],
  "Maule": ["Talca", "San Clemente", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Javier", "Villa Alegre", "Yerbas Buenas", "Constitución", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro"],
  "Ñuble": ["Chillán", "Chillán Viejo", "Bulnes", "Quillón", "San Ignacio", "Pemuco", "Coihueco", "El Carmen", "Ninhue", "San Carlos", "Yungay", "Pinto", "Quirihue", "Ránquil", "Treguaco", "Cobquecura", "Talcahuano", "Concepción", "Chiguayante", "Hualpén", "Tome", "Coronel", "Lota", "Hualqui", "Penco", "San Pedro de la Paz", "Santa Juana", "Arauco", "Curanilahue", "Lebu", "Los Álamos", "Cañete", "Contulmo", "Cañete", "Tirúa"],
  "Biobío": ["Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chiguayante", "Concepción", "Coronel", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Talcahuano", "Tomé", "Arauco", "Curanilahue", "Lebu", "Los Álamos", "Cañete", "Contulmo", "Tirúa"],
  "Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol"],
  "Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
  "Los Lagos": ["Puerto Montt", "Puerto Varas", "Castro", "Ancud", "Quellón", "Chonchi", "Dalcahue", "Puqueldón", "Queilén", "Curaco de Vélez", "Quinchao", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Llanquihue", "Los Muermos", "Maullín", "Puerto Octay", "Puerto Varas", "Puyehue", "Río Negro", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
  "Aysén": ["Coyhaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Chile Chico", "Río Ibáñez", "Cochrane", "O'Higgins", "Tortel", "Puerto Aysén", "Puerto Chacabuco"],
  "Magallanes": ["Punta Arenas", "Puerto Natales", "Porvenir", "Primavera", "Timaukel", "Cabo de Hornos", "Antártica", "Laguna Blanca", "San Gregorio", "Natales"]
};

function cargarRegiones() {
  const selectRegion = document.getElementById('region');
  selectRegion.innerHTML = '<option value="">Seleccione región</option>';
  regiones.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r.nombre;
    opt.textContent = r.nombre;
    selectRegion.appendChild(opt);
  });
}

function cargarComunas() {
  const regionSeleccionada = document.getElementById('region').value;
  const selectComuna = document.getElementById('comuna');
  selectComuna.innerHTML = '<option value="">Seleccione comuna</option>';

  const region = regiones.find(r => r.nombre === regionSeleccionada);
  if (region) {
    region.comunas.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      selectComuna.appendChild(opt);
    });
  }
}

// Ejecutar carga inicial de regiones
document.addEventListener('DOMContentLoaded', () => {
  cargarRegiones();
  document.getElementById('region')?.addEventListener('change', cargarComunas);
});

// =========================
// Checkout Simulado
// =========================
function checkoutSimulado() {
  if (carrito.length === 0) {
    alert('No hay productos en el carrito.');
    return;
  }
  let total = carrito.reduce((acc, p) => acc + p.precio, 0);
  alert(`Total a pagar: $${total.toLocaleString()} CLP\nCheckout simulado realizado.`);
  carrito = [];
  actualizarCarrito();
}
