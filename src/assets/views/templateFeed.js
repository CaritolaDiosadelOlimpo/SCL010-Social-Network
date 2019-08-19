import { logOut } from './../js/auth.js';
import { templateCreateEvent } from './../views/templateCreateEvent.js';
//import { saveUserToDatabaseAfterLogin } from './../js/auth.js';

export const templateFeed = () => {
    const containerFeed = document.createElement('div');
    const contentFeed =`
    <h1>Bienvenido al Muro</h1>
    <button class="btn" id="sign-out">Cerrar Sesión</button>
    <p>Contenido del Muro</p>
    <button id="create-event"> Crear evento </button>

    `;
    containerFeed.innerHTML = contentFeed;

    const logOutBtn = containerFeed.querySelector('#sign-out');
    logOutBtn.addEventListener('click', () => {
    logOut();
    window.location.hash = "#/home";
    });
    const newEventBtn = containerFeed.querySelector('#create-event');
    newEventBtn.addEventListener('click', () => {
      debugger;
        window.location.hash = '#/createEvent'
        debugger;

    });

    return containerFeed;
}



