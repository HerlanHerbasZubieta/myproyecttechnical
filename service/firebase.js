
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmBHYlKcdHsiGITRC4ql0aE0j4KBu3R6o",
  authDomain: "proyect-nextjs.firebaseapp.com",
  projectId: "proyect-nextjs",
  storageBucket: "proyect-nextjs.appspot.com",
  messagingSenderId: "513709447254",
  appId: "1:513709447254:web:189b87bf3b21033d1603f7"
};


const firebase = initializeApp(firebaseConfig);
export default firebase