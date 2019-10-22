let firebaseConfig = {
//Lukas nach Config fragen
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
//

function getCoffees() {
    return db.collection("coffees").get().then(response => {
        let coffees = response.docs.map(doc => doc.data());
        return coffees
    })
}

function cappuccino() {
    getCoffees().then(res => {
        let behaeltnis = document.getElementById("Behältnis");
        behaeltnis.value = res[0].Behältnis;
        let kalorien = document.getElementById("Kalorien");
        kalorien.value = res[0].Kalorien;
        let koffein = document.getElementById("Koffeingehalt");
        koffein.value = res[0].Koffeingehalt;
        let menge = document.getElementById("Menge");
        menge.value = res[0].Menge;
        let starttemperatur = document.getElementById("Starttemperatur");
        starttemperatur.value = res[0].Starttemperatur;
        let zucker = document.getElementById("Zucker");
        zucker.value = res[0].Zucker;
    })

}
