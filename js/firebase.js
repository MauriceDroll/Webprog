let firebaseConfig = {
//Lukas nach Config fragen
    apiKey: "AIzaSyCFvmgRTrHWE-4ohxjlefmNpeQFgi2Pf9I",
    authDomain: "web-prog1337.firebaseapp.com",
    databaseURL: "https://web-prog1337.firebaseio.com",
    projectId: "web-prog1337",
    storageBucket: "web-prog1337.appspot.com",
    messagingSenderId: "306419857797",
    appId: "1:306419857797:web:136ebf84839b2b42786cec"
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

function loadTestData() {
    for (let i = 0; i < 10; i++) {
        let coffee = {
            Sorte: "Cappuccino",
            Behältnis: "Becher",
            Kalorien: Math.floor(Math.random() * (Math.floor(1) - Math.ceil(150) + 1)) + Math.ceil(150),
            Koffeingehalt: Math.floor(Math.random() * (Math.floor(50) - Math.ceil(100) + 1)) + Math.ceil(100),
            Menge: 250,
            Preis: Math.floor(Math.random() * (Math.floor(1) - Math.ceil(6) + 1)) + Math.ceil(6),
            Starttemperatur: 100,
            Umgebungstemperatur: 20,
            Zucker: Math.floor(Math.random() * (Math.floor(1) - Math.ceil(20) + 1)) + Math.ceil(20),
            Zuckerwürfel: 0,
            Kaffeesahne: 0,
        };
        db.collection("coffee").add({
            Datum: randomDate(),
            Kaffee: coffee,
            User: "Test"
        });
    }
    alert("Demodaten geladen")
}

function randomDate() {
    let date = new Date();
    let daysInThePast = Math.floor(Math.random() * (Math.floor(0) - Math.ceil(7))) + Math.ceil(7);
    return new Date(date.setDate(date.getDate() - daysInThePast))
}

function dropDatabase() {
    deleteCollection(db,"coffee",100)
}

function deleteCollection(db, collectionPath, batchSize) {
    let collectionRef = db.collection(collectionPath);
    let query = collectionRef.orderBy('__name__').limit(batchSize);

    return new Promise((resolve, reject) => {
        deleteQueryBatch(db, query, batchSize, resolve, reject);
    });
}

function deleteQueryBatch(db, query, batchSize, resolve, reject) {
    query.get()
        .then((snapshot) => {
            if (snapshot.size == 0) {
                return 0;
            }

            let batch = db.batch();
            snapshot.docs.forEach((doc) => {
                batch.delete(doc.ref);
            });

            return batch.commit().then(() => {
                return snapshot.size;
            });
        }).then((numDeleted) => {
        if (numDeleted === 0) {
            alert("Datenbank geleert");
            resolve();
        }
    }).catch(reject);
}
