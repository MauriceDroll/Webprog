let firebaseConfig = {
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

