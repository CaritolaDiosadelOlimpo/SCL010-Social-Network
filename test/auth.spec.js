firebase.initialApp(config);

googleSingin= () => {
    base_proveider =new Firebase.auth.GoogleAuthProvider()
    firebase.auth.singinWithPopup(base_provider).then(function(result))
}