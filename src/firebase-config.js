import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "hr-task.firebaseapp.com",
    projectId: "hr-task",
    storageBucket: "hr-task.appspot.com",
    messagingSenderId: "212923785814",
    appId: "1:212923785814:web:3312d8434dd4e6959a11f7",
    measurementId: "G-C4VRG9JMJR"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);