import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup, signInWithRedirect,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLCTRwRwbmFCwtboB1bQSeb5WtApaBymw",
  authDomain: "crwn-60a7d.firebaseapp.com",
  projectId: "crwn-60a7d",
  storageBucket: "crwn-60a7d.appspot.com",
  messagingSenderId: "510616746421",
  appId: "1:510616746421:web:4066f9ace01c1120d581fc"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.getCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentWithAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    //if user doesn't exist
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        } catch (error) {
            console.log("error creating the user", error.message);            
        }
    }
    return userDocRef;
}

