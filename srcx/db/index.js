import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase
  .initializeApp({
    apiKey: "AIzaSyCQpZHwi_1U_ENwFwA1Hr1cpOMme0AGQRs",
    authDomain: "servicario-d93b0.firebaseapp.com",
    databaseURL: "https://servicario-d93b0.firebaseio.com",
    projectId: "servicario-d93b0",
    storageBucket: "servicario-d93b0.appspot.com",
    messagingSenderId: "681998112978",
    appId: "1:681998112978:web:5897260ef0df78eff0b50b",
    measurementId: "G-PZP2Q0FWX8"
  })
  .firestore();

export default db;

const { Timestamp } = firebase.firestore;
export { Timestamp };
