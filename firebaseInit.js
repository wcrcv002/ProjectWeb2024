// firebaseInit.js
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./src/firebaseConfig";

firebase.initializeApp(firebaseConfig);

export default firebase;
