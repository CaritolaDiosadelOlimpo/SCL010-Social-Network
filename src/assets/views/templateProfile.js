export const templateProfile = () => {
    console.log("Mostrando Perfil de Usuario");

    const containerProfile = document.createElement('div');
    const contentProfile =`
    <h1>Perfil de usuario</h1>
    <p>Contenido del perfil</p>
    `;
    containerProfile.innerHTML = contentProfile;
    return containerProfile;
}