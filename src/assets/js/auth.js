
export const loginGoogle = () =>{
    console.log("login Ok");

    var provider = new firebase.auth.GoogleAuthProvider ();
        
        firebase.auth().singInWithPopun(provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            let usarName = splitGoogleDisplayName(user.displayName);
            saveUserTodatabaseAfterLogin(user, userName);
        })
        .catch (err=>{
            console.log("el error es" err)
        })
}

const splitGoogleDisplayName = () => {
    let splitDisplayNameArray = display.split(" ");
    let usarName = {
        firtsName: splitDisplayNameArray [0],
        lastName: splitDisplayNameArray [1]
    }
    return usarName;
}

const saveUserTodatabaseAfterLogin = (user, userName)=> {
    console.log("uid:", user.uid, "email:", user.email, "firstName:", userName.firstName, "lastName:", userName.lastName);
}