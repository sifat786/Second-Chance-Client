import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoogq_ybgqcgXxwTII9w6cG45D0ZMfZL0",
  authDomain: "second-chance-8f474.firebaseapp.com",
  projectId: "second-chance-8f474",
  storageBucket: "second-chance-8f474.appspot.com",
  messagingSenderId: "93260317372",
  appId: "1:93260317372:web:db3874355efdf8782ec6b9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;