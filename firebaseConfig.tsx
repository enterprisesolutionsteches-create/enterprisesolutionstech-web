import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCSvpxWoKSU8rB9JMnF6yNjiWN1Cqnh1lA",
  authDomain: "enterprisesolutionstech-f9162.firebaseapp.com",
  projectId: "enterprisesolutionstech-f9162",
  storageBucket: "enterprisesolutionstech-f9162.firebasestorage.app",
  messagingSenderId: "1015541875267",
  appId: "1:1015541875267:web:8b1e4a43e80d46f7490af6",
  measurementId: "G-8S2Y6HYQGR"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app); 

const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db, storage };
