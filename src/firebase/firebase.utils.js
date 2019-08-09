import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCcq0-t29l-p2z5lwrs28eBEss26BWQSH0",
  authDomain: "e-commerce-1b0fa.firebaseapp.com",
  databaseURL: "https://e-commerce-1b0fa.firebaseio.com",
  projectId: "e-commerce-1b0fa",
  storageBucket: "",
  messagingSenderId: "196035547531",
  appId: "1:196035547531:web:8bdffce25ea9060e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;