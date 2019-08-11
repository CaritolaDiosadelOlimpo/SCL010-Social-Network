export const templateFeed = () => {
    const containerFeed = document.createElement('div');
    const contentFeed =`
    <h1>Bienvenido al Muro</h1>
    <p>Contenido del Muro</p>
    `;
    containerFeed.innerHTML = contentFeed;
    return containerFeed;
}
