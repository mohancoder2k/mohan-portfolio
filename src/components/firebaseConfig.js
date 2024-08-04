// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyD1FdyBXb_-vtlCzTRqjqSKg4DZl2L-HSE",
    authDomain: "resume-store-ca16c.firebaseapp.com",
    databaseURL: "https://resume-store-ca16c-default-rtdb.firebaseio.com/",
    projectId: "resume-store-ca16c",
    storageBucket: "resume-store-ca16c.appspot.com",
    messagingSenderId: "785591663982",
    appId: "1:785591663982:web:71385c064f2982261e557f"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
