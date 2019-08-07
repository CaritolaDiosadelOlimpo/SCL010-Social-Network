import { loginGoogle } from './../js/auth.js';

export const templateLogin = () => {
  debugger;
  // creamos div que contendrá la plantilla
  const containerLogin = document.createElement('div');
  // creamos el contenido del login
  //<button id="login">Loguealo</button>
  const contentLogin = `<p>Ingresa tu correo electrónico</p>
                        <input type="text" placeholder="Ingresa tu correo electrónico"</p>
                        <p>Ingresa tu contraseña</p>
                        <input type="text" placeholder="Ingresa tu contraseña"</p>
                        <button id="login">Ingresar</button>
                        <p>Login con Google</p>
                        <button id="login-google">login con Google</button>`;
  // pasar el contenido al div
  containerLogin.innerHTML = contentLogin;
  // le pido que busque el id del boton dentro del div creado
  const btn = containerLogin.querySelector('#login');
  const btnGoogle = containerLogin.querySelector('#login-google');
  // evento del botón que llama a la autentificación de google.
  btnGoogle.addEventListener('click', () => {
    loginGoogle();
  });


  return containerLogin;
}
