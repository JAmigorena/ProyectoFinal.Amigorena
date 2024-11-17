import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5KyT_yhvXd2dXqxVkyGeXC8nYGDGihok",
    authDomain: "proyectofinal-amigorena.firebaseapp.com",
    projectId: "proyectofinal-amigorena",
    storageBucket: "proyectofinal-amigorena.firebasestorage.app",
    messagingSenderId: "238752365574",
    appId: "1:238752365574:web:c890e7c77d043efbf2d787",
    measurementId: "G-GRM3RPRLND"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
