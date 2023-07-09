// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7q371VUf9KT8ilxFT2H699Snyl3N6BQI",
  authDomain: "medical-assistance-9bc23.firebaseapp.com",
  projectId: "medical-assistance-9bc23",
  storageBucket: "medical-assistance-9bc23.appspot.com",
  messagingSenderId: "169662450272",
  appId: "1:169662450272:web:a8efef3eba39ac45ff9105"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app