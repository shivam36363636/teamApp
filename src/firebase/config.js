import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2HNOrC5_evG5UJdXLKvATIos3GySjMP4",
  authDomain: "thedojosite-25b57.firebaseapp.com",
  projectId: "thedojosite-25b57",
  storageBucket: "thedojosite-25b57.appspot.com",
  messagingSenderId: "667402073224",
  appId: "1:667402073224:web:6fb6643d947b3737a55b3d",
};

//initialize app
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const timestamp = Timestamp.now();
const storage = getStorage(app);
export { db, auth, timestamp, storage };
