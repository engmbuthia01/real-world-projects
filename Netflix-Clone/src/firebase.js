import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCR-NLiQqGUuv6auFlZoqlpGyu426xkUqY",
  authDomain: "netflix-clone-db116.firebaseapp.com",
  projectId: "netflix-clone-db116",
  storageBucket: "netflix-clone-db116.firebasestorage.app",
  messagingSenderId: "970661942636",
  appId: "1:970661942636:web:7113b4162c7b7da01a4f49",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
