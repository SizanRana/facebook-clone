import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDEUnBSsTuTBklZsh4eK5HRiB5p3boaaU",
  authDomain: "facebook-adfbf.firebaseapp.com",
  projectId: "facebook-adfbf",
  storageBucket: "facebook-adfbf.appspot.com",
  messagingSenderId: "737614888604",
  appId: "1:737614888604:web:c92ef681d80aff142cf759",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
