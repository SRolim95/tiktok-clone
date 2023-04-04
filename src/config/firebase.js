
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBnJYrsXanwBNBPYykyedQoxCduh02mrMk",
  authDomain: "tiktok---jornadadev-46f4f.firebaseapp.com",
  projectId: "tiktok---jornadadev-46f4f",
  storageBucket: "tiktok---jornadadev-46f4f.appspot.com",
  messagingSenderId: "483311908033",
  appId: "1:483311908033:web:1dbd58f0f2b7229acb9040"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;