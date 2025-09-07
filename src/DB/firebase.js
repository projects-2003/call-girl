/* Replace the firebaseConfig values with your project's credentials */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
apiKey: "REPLACE_WITH_YOUR_API_KEY",
authDomain: "REPLACE_WITH_YOUR_AUTH_DOMAIN",
projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
storageBucket: "REPLACE_WITH_YOUR_BUCKET",
messagingSenderId: "REPLACE_WITH_YOUR_SENDER_ID",
appId: "REPLACE_WITH_YOUR_APP_ID",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);