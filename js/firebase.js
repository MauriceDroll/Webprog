let firebaseConfig = {
//Lukas nach Config fragen
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

function getCoffees() {
    return db.collection("coffees").get().then(response => {
        let coffees = response.docs.map(doc => doc.data());
        return coffees;
    })
}

