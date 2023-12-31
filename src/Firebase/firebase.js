import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseauth = {
  apiKey: import.meta.env.VITE_REACT_APIKEY,
  authDomain: import.meta.env.VITE_REACT_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_REACT_APPID,
  measurementId: import.meta.env.VITE_REACT_MEASUREMENTID,
};

const app = initializeApp(firebaseauth);
const firebaseAuth = getAuth(app);
export default firebaseAuth;
// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// const firebase = {
//   apiKey: import.meta.env.VITE_REACT_APIKEY,
//   authDomain: import.meta.env.VITE_REACT_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_REACT_PROJECTID,
//   storageBucket: import.meta.env.VITE_REACT_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_REACT_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_REACT_APPID,
//   measurementId: import.meta.env.VITE_REACT_MEASUREMENTID,
// };import authentic from './firebase';

// const app = initializeApp(firebase);
// const authentic = getAuth(app);
// export default authentic;
