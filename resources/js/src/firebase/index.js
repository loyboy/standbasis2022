import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIDKJqKNDA9EnEaSpXu5_nFT5q3DznccM",
    authDomain: "plenti-africa.firebaseapp.com",
    databaseURL: "https://plenti-africa-default-rtdb.firebaseio.com",
    projectId: "plenti-africa",
    storageBucket: "plenti-africa.appspot.com",
    messagingSenderId: "478149965527",
    appId: "1:478149965527:web:0be655b1fe33db7fd12292",
    measurementId: "G-M4PPQQ7YLT"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }