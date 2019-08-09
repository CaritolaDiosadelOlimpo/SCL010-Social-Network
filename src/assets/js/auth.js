/* Funciones relacionadas con autentificación de usuari@s */
import { saveUserInDatabase } from './database.js'

export const createAccount = () => {
  let userData = {};
  //nombre
  userData.name = document.querySelector('#register-name').value;
  //apellido
  userData.lastName = document.querySelector('#register-lastname').value;
  //correo
  userData.mail = document.querySelector('#register-mail').value;
  //contraseña 1
  userData.pass1 = document.querySelector('#register-pass1').value;
  //contraseña 2
  userData.pass2 = document.querySelector('#register-pass2').value;
  //console.log(userData);
  createUserWithEmail(userData);
};

const createUserWithEmail = (userData) => {
  firebase.auth().createUserWithEmailAndPassword(userData.mail, userData.pass1)
  //buscar porque res para este metdodo de firebase
  .then(result => {
    const user = result.user;
    userData.uid = user.uid;
    console.log("El uid es: " + userData.uid);
    saveUserInDatabase(userData)
  })

  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}


export const loginGoogle = () => {
  // console.log('Login con Google OK');
  const provider = new firebase.auth.GoogleAuthProvider();

  // this will return a promise
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      // console.log("Hola", user.displayName);
      let userName = splitGoogleDisplayName(user.displayName);
      saveUserToDatabaseAfterLogin(user.uid, userName.firstName, userName.lastName, user.email);
      // console.log(saveUserToDatabaseAfterLogin());
      })
    .catch(err => {
      console.log(err);
    })
}

const splitGoogleDisplayName = (displayName) => {
  var splitDisplayNameArray = displayName.split(" ");
  let userName = {
    firstName: splitDisplayNameArray[0],
    lastName: splitDisplayNameArray[1],
  }

  return userName;
}

const saveUserToDatabaseAfterLogin = (uid, firstName, lastName, email) => {
  console.log(uid, firstName, lastName, email);
};
