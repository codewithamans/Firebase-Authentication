import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDKRtdlwHh0dP__M8nJTF_lWJqOVR9M6v8",
  authDomain: "carbide-kite-338911.firebaseapp.com",
  projectId: "carbide-kite-338911",
  storageBucket: "carbide-kite-338911.appspot.com",
  messagingSenderId: "290268819991",
  appId: "1:290268819991:web:7e970c9d54ef55f4112252",
  measurementId: "G-0H87P3WXZY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
