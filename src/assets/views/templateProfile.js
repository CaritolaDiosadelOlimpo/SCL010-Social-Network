import { logOut } from './../js/auth.js';
import { saveUserToDatabaseAfterLogin } from './../js/auth.js';

console.log(saveUserToDatabaseAfterLogin);

export const templateProfile = () => {
    console.log("Mostrando Perfil de Usuario");

    const containerProfile = document.createElement('div');
    const contentProfile =`
    <h1>Perfil de usuario</h1>
    <button class="btn" id="sign-out-profile">Cerrar Sesión</button>
    <p>Contenido del perfil</p>
    `;
    containerProfile.innerHTML = contentProfile;

    const logOutBtn = containerProfile.querySelector('#sign-out-profile');
    logOutBtn.addEventListener('click', () => {
    logOut();
    window.location.hash = "#/home";
    });
    return containerProfile;
}

export const templateProfileLoginGoogle = () => {
    const containerProfile = document.createElement('div');
    const contentProfile = `<h1>Bienvenido ${uid}</h1>`
}