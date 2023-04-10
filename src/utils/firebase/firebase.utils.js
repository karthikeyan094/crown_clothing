import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup, signInWithRedirect,GoogleAuthProvider} from 'firebase/auth';

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
export const signInWithGooglePopUp = () => signInWithPopup(auth,provider);

