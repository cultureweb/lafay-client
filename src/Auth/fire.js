import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHevp3utcA9vcYM00nVTP7PfHFwpRohJE",
  authDomain: "lafay-f3411.firebaseapp.com",
  projectId: "lafay-f3411",
  storageBucket: "lafay-f3411.appspot.com",
  messagingSenderId: "1003061641683",
  appId: "1:1003061641683:web:dfd24bdfe24c0bd73e2f26",
  measurementId: "G-BE7X1XPEBQ",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
