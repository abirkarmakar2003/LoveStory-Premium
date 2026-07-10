import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQMOVIHGZo48ok87t8v7dZvlRCFw4P460",
  authDomain: "lovestory-premium.firebaseapp.com",
  projectId: "lovestory-premium",
  storageBucket: "lovestory-premium.firebasestorage.app",
  messagingSenderId: "461215061284",
  appId: "1:461215061284:web:9cb864fdeae0553dbbcfb1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase Connected Successfully ✅");
window.db = db;
window.saveResponse = async function(data){

    try{

        await addDoc(collection(db,"responses"),data);

        console.log("Response Saved ✅");

    }catch(e){

        console.error(e);

    }

}