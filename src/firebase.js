import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwVu4in7HW9ivFmSqU0f7yp4OT5YMzAA4",
  authDomain: "clone-509d3.firebaseapp.com",
  projectId: "clone-509d3",
  storageBucket: "clone-509d3.appspot.com",
  messagingSenderId: "855847948291",
  appId: "1:855847948291:web:121165a6b01839cb42be36",
  measurementId: "G-TYK3HW1G3P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };