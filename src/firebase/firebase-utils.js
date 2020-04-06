import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA-uY508z2ItkHsxVDXF6d4fWfXwuwX1WQ",
    authDomain: "ecommerce-template-e7682.firebaseapp.com",
    databaseURL: "https://ecommerce-template-e7682.firebaseio.com",
    projectId: "ecommerce-template-e7682",
    storageBucket: "ecommerce-template-e7682.appspot.com",
    messagingSenderId: "883050725802",
    appId: "1:883050725802:web:594f939124923d7b89abd3",
    measurementId: "G-CT548ERC9Z",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
