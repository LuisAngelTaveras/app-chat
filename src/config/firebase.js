import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJq5xto5ZqoFSXr_OdxsKHQ0AI7_gbuEg",
    authDomain: "firechat-8215d.firebaseapp.com",
    projectId: "firechat-8215d",
    storageBucket: "firechat-8215d.appspot.com",
    messagingSenderId: "997472444871"
}; 


firebase.initializeApp( firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}




