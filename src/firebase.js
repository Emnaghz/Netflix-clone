// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJhRJ-FRVojZD5r1GtmvuSJF-SgxK6JC4",
  authDomain: "netflix-clone-8eb41.firebaseapp.com",
  projectId: "netflix-clone-8eb41",
  storageBucket: "netflix-clone-8eb41.appspot.com",
  messagingSenderId: "942129639300",
  appId: "1:942129639300:web:d83e821a9692d6dbfd37d1",
};

const app = initializeApp(firebaseConfig);
// const db = app.firestore()
const auth = getAuth(app);

export { auth };
// export default db;