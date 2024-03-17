import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./fb-config";

/** 
 * actions pour initialiser la base de donnée firestore
*/

// Initialiser l'appli Firebase
const app = initializeApp(firebaseConfig);

// Obtenir une connexion à la BD Firestore
export const bd = getFirestore(app);

// Noms des collections Firestore utilisées dans l'appli
export const collUtilisateurs = 'utilisateurs';