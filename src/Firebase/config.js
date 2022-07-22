
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAtQwUx3kwCoziFNSLTQRbDIoBP-tMsLdE",
  authDomain: "eccomerce-9e5ea.firebaseapp.com",
  projectId: "eccomerce-9e5ea",
  storageBucket: "eccomerce-9e5ea.appspot.com",
  messagingSenderId: "375524951232",
  appId: "1:375524951232:web:8d78314ef0912d16951925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//funcion para exportar app
export default function FireBase() {
    return app
}