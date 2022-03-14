import { initializeApp, getApp,getApps } from 'firebase/app';
import { getFirestore  } from 'firebase/firestore';
import { getStorage  } from 'firebase/storage';
import { getAuth  } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBrCgaiECQrfPg1FY3QDw71ZNPuC1b0FxY",
  authDomain: "srinternationalschool-26668.firebaseapp.com",
  projectId: "srinternationalschool-26668",
  storageBucket: "srinternationalschool-26668.appspot.com",
  messagingSenderId: "328617043870",
  appId: "1:328617043870:web:c51d9de716c7a90205988f",
  measurementId: "G-Q29ZC32BK7"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export { db, storage , auth};
export default app;