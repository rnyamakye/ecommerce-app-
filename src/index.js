import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCGUh8lNgYNxsQLDy6dci6q7hYtk_m9VYk",
  authDomain: "ecomerce-5a42b.firebaseapp.com",
  projectId: "ecomerce-5a42b",
  storageBucket: "ecomerce-5a42b.firebasestorage.app",
  messagingSenderId: "866835765601",
  appId: "1:866835765601:web:eeeb72dc348b9b76e04d20",
};

//init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'items')

// get collection data
getDocs(colRef) 
    .then((snapshot) => {
        console.log(snapshot.docs)
    })