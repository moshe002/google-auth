// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkMzqgj2ZKSg4wC98MjKupx1eiVKvpwks",
  authDomain: "authenticator-dd40a.firebaseapp.com",
  projectId: "authenticator-dd40a",
  storageBucket: "authenticator-dd40a.appspot.com",
  messagingSenderId: "951583617105",
  appId: "1:951583617105:web:cc4da81ea4218f42f5c870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("profilePic", profilePic)

  })
  .catch((error) => {
      console.log(error);
  });
};