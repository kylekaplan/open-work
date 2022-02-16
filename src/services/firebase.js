import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET
}

let instance = null
let db = null

export default function getFirebase() {
  if (instance) return instance
  instance = initializeApp(config)
  return instance
}

export function getDb() {
  if (db) return db
  db = getFirestore()
  return db
}
