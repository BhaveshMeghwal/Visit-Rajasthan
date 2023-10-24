// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from 'firebase/database'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGaMXYVAlbI7IF8tvIfLgwZF6SYfCJMnM",
    authDomain: "rajasthan-tourism-ffd3e.firebaseapp.com",
    databaseURL: "https://rajasthan-tourism-ffd3e-default-rtdb.firebaseio.com",
    projectId: "rajasthan-tourism-ffd3e",
    storageBucket: "rajasthan-tourism-ffd3e.appspot.com",
    messagingSenderId: "481651726287",
    appId: "1:481651726287:web:a7c648e7bd68edd06be4ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const musicDb = getStorage(app);
const imageDb = getStorage(app);
const songsDb = getStorage(app);

export { database,musicDb,imageDb,songsDb, ref, onValue };