export const saveUserInDatabase = (userData) =>{

    let db = firebase.firestore();

    db.collection("users").add(userData)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
}