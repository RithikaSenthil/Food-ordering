import { initializeApp } from "firebase/app"
// import "firebase/firebase-storage"
import { getFirestore, serverTimestamp } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp(
    {
      apiKey: "AIzaSyD_BmKSB4CKCt_p-LaB--JBhrphOoYRpFo",
      authDomain:"food-20c8e.firebaseapp.com",
      projectId: "food-20c8e",
      storageBucket: "food-20c8e.appspot.com",
      messagingSenderId: "1058329945328",
      appId: "1:1058329945328:web:758b78797b58dac2018e35"
    }
);

 export const firestore = getFirestore(firebaseApp)
 export const auth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp)
 export const db={
    pizzas:'allProducts',
    
    formatedDoc:doc=>{
      return{id:doc.id,...doc.data()}
    },
    getCurrentTimeStamp:serverTimestamp,
  }