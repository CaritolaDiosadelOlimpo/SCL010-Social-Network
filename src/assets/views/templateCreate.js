const createAccount = () => {
    console.log('cuenta creada');
}
export const templateCreate = () => {
    const containerCreate = document.createElement('div');

    const content xxCreate = `<p>Crear cuenta</p>
                        <button id="create">Crear cuenta</button>`
    containerCreate.innerHTML = contentCreate;

    const btn = containerCreate.querySelector('#create');
    btn.addEventListener('click', () =>{
        createAccount();
    });
    return containerCreate;
}