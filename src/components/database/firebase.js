import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCANrl64kHi73_CVcRO_kOz6pw7X4AKu0k",
  authDomain: "tsredi.firebaseapp.com",
  databaseURL: "https://tsredi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tsredi",
  storageBucket: "tsredi.appspot.com",
  messagingSenderId: "14159112150",
  appId: "1:14159112150:web:a243101fc5cbebdce66677",
}

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
