import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOHkNan_hjyxVSvdqM7y0MFJ6Y997796A",
  authDomain: "crown-clothing-db-54d3b.firebaseapp.com",
  projectId: "crown-clothing-db-54d3b",
  storageBucket: "crown-clothing-db-54d3b.appspot.com",
  messagingSenderId: "543531319782",
  appId: "1:543531319782:web:6193ff24560de1850bd627",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db=getFirestore();

export const createUserDocumentFromAuth=async (userAuth)=>{
  const userDocref=doc(db,'users',userAuth.uid)
  console.log(userDocref)
  const userSnapshot=await getDoc(userDocref);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
}