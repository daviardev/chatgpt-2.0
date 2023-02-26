import { initializeApp, getApps, getApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.PUBLIC_NEXT_APIKEY,
  authDomain: process.env.PUBLIC_NEXT_AUTHDOMAIN,
  projectId: process.env.PUBLIC_NEXT_PROJECTID,
  storageBucket: process.env.PUBLIC_NEXT_STORAGEBUCKET,
  messagingSenderId: process.env.PUBLIC_NEXT_MESSAGINGSENDERID,
  appId: process.env.PUBLIC_NEXT_APPID
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
