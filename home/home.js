// Mostrar las recetas como tarjetas
const grid = document.getElementById('recetas-grid');

recetas.forEach(receta => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const titulo = document.createElement('h3');
    titulo.textContent = receta.nombre;

    const btnVer = document.createElement('a');
    btnVer.className = 'btn-ver';
    btnVer.href = `../detalle_receta/detalle_receta.html?receta=${receta.id}`;
    btnVer.textContent = 'Ver receta';

    cardContent.appendChild(titulo);
    cardContent.appendChild(btnVer);
    card.appendChild(cardContent);
    grid.appendChild(card);
});