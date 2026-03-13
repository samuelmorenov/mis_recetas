// Obtener el parámetro 'receta' de la URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('receta');

if (!id) {
    document.getElementById('detalle-receta').innerHTML = '<p>No se especificó ninguna receta.</p>';
} else {
    // Cargar dinámicamente el archivo de la receta
    const script = document.createElement('script');
    script.src = `../recetas/${id}.js`;
    
    script.onload = function() {
        if (typeof receta !== 'undefined') {
            // Actualizar el título de la página
            document.title = `Mis Recetas - ${receta.nombre}`;
            
            // Actualizar el h1 del header
            document.querySelector('header h1').textContent = `🥣 Mis Recetas - ${receta.nombre}`;
            
            // Mostrar la receta
            const detalle = document.getElementById('detalle-receta');
            detalle.innerHTML = `
                <h2>${receta.nombre}</h2>
                ${receta.imagen ? `<img src="${receta.imagen}" alt="${receta.nombre}">` : ''}
                <h3>Ingredientes:</h3>
                <ul>
                    ${receta.ingredientes.map(ing => `<li>${ing.nombre} - ${ing.cantidad}</li>`).join('')}
                </ul>
                <h3>Preparación:</h3>
                <ol>
                    ${receta.preparacion.map(paso => `<li>${paso}</li>`).join('')}
                </ol>
            `;
        } else {
            document.getElementById('detalle-receta').innerHTML = '<p>Receta no encontrada.</p>';
        }
    };
    
    script.onerror = function() {
        document.getElementById('detalle-receta').innerHTML = '<p>Error al cargar la receta.</p>';
    };
    
    document.head.appendChild(script);
}