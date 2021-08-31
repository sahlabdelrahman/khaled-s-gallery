import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANOET33zjEn1nAP-kjee6OOinfnFqMfig",
  authDomain: "khalid-s-gallery.firebaseapp.com",
  projectId: "khalid-s-gallery",
  storageBucket: "khalid-s-gallery.appspot.com",
  messagingSenderId: "486047821838",
  appId: "1:486047821838:web:7e622a688027afffa08c5f",
  measurementId: "G-D3KXTLG22S",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { storage, db, auth, timestamp };
