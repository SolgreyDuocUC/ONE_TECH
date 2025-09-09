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

// Referencias
const selectRegion = document.getElementById('region');
const selectComuna = document.getElementById('comuna');

// Cambiar comunas según región seleccionada
selectRegion.addEventListener('change', () => {
  const regionSeleccionada = selectRegion.value;
  
  // Limpiar comunas
  selectComuna.innerHTML = '<option value="">Seleccione una comuna</option>';
  
  if (regionSeleccionada && regiones[regionSeleccionada]) {
    regiones[regionSeleccionada].forEach(comuna => {
      const option = document.createElement('option');
      option.value = comuna;
      option.textContent = comuna;
      selectComuna.appendChild(option);
    });
  }
});

