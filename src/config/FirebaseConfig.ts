import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyBYTRn9MkMAURQhiK2KGrEIr5x9ZvDnZ7Q",
    authDomain: "notes-reactfire-sample.firebaseapp.com",
    projectId: "notes-reactfire-sample",
    storageBucket: "notes-reactfire-sample.appspot.com",
    messagingSenderId: "128632741472",
    appId: "1:128632741472:web:fd91563f3254a1ff246d05",
    measurementId: "G-LR2RD7FQ15"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export default getFirestore()