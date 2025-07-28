// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7NM23sahLSJ30GflfVoR7SqGkljKZlO0",
  authDomain: "example-project-c2003.firebaseapp.com",
  projectId: "example-project-c2003",
  storageBucket: "example-project-c2003.appspot.com",
  messagingSenderId: "529901804150",
  appId: "1:529901804150:web:4efea26695323da57e5d57",
  measurementId: "G-SEJ2Y35YWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
