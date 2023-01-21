// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJFCCFg7GJS3uXvNWYik7z7F-_EQs25Co",
  authDomain: "news-portal-client-site.firebaseapp.com",
  projectId: "news-portal-client-site",
  storageBucket: "news-portal-client-site.appspot.com",
  messagingSenderId: "938027281371",
  appId: "1:938027281371:web:326a892f9c64fb4c5695fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;