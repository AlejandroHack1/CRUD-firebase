import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCSAJ5vss06kDz6Bmqf34pJ83yiB6Jrqfk",
    authDomain: "my-project-1502902721573.firebaseapp.com",
    projectId: "my-project-1502902721573",
    storageBucket: "my-project-1502902721573.appspot.com",
    messagingSenderId: "133156206221",
    appId: "1:133156206221:web:ee10371f36b954d2cfd4c4",
    measurementId: "G-ZJXFWM2SD1"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();