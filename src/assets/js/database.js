export const saveUserInDatabase = (userData) =>{
    console.log("USERDATA:", userData);

    let db = firebase.firestore();

    db.collection("users").doc(userData.uid).set(userData).add(userData)
    .then(() => {
        console.log("Document written");
        window.location.hash = "#/profile"
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });    
}

export const saveEventInDataBase = (eventData) => {

    let db = firebase.firestore();
    db.collection("events").doc(eventData.uid).set(eventData)
    .then(() =>{
        console.log("documento escrito");
        window.location.hash = "#/feed"
    })
    .catch (function (error){
        console.log("error al añadir evento:", error);
    })

}