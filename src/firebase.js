
// import { initializeApp } from 'firebase/app';
// require('firebase/auth')
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyDSozUWZ06ZsNb67co6TyHKzWUXEHHCZek",
//   authDomain: "logicism-auth-4fd71.firebaseapp.com",
//   projectId: "logicism-auth-4fd71",
//   storageBucket: "logicism-auth-4fd71.appspot.com",
//   messagingSenderId: "769565354450",
//   appId: "1:769565354450:web:f478025bb20c9260b7800b"
    apiKey: "AIzaSyDLnbqQnMtGZtpXLG4-BY4cRkpOt_Ph0uI",
    authDomain: "login-b0a0c.firebaseapp.com",
    databaseURL: "https://login-b0a0c-default-rtdb.firebaseio.com",
    projectId: "login-b0a0c",
    storageBucket: "login-b0a0c.appspot.com",
    messagingSenderId: "252726810615",
    appId: "1:252726810615:web:4dc381b770d7d19e3700f2",
    measurementId: "G-EZTFDBDGBL"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;

