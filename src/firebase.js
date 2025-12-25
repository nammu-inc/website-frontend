import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXs4x9SNUi1v9Xk8TgTAGhgPbOqILduJs",
  authDomain: "nammu-stavis-v1.firebaseapp.com",
  projectId: "nammu-stavis-v1",
  storageBucket: "nammu-stavis-v1.firebasestorage.app",
  messagingSenderId: "536145875155",
  appId: "1:536145875155:web:fcfb4448014562c45f0426",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
