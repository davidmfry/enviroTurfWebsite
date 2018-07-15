// Initialize
import * as firebase from 'firebase';

// Dev Config

// const config = {
//     apiKey: "AIzaSyD1L7J20YhcGtz4pCi_gWbRrSRra3g6e80",
//     authDomain: "enviroturfbackend.firebaseapp.com",
//     databaseURL: "https://enviroturfbackend.firebaseio.com",
//     projectId: "enviroturfbackend",
//     storageBucket: "enviroturfbackend.appspot.com",
//     messagingSenderId: "37648242895"
// };

// Production Config

const config = {
    apiKey: "AIzaSyC5criSvQCU8vFgbYQRu0ZgRqzll1ljdRA",
    authDomain: "enviroturf-production-backend.firebaseapp.com",
    databaseURL: "https://enviroturf-production-backend.firebaseio.com",
    projectId: "enviroturf-production-backend",
    storageBucket: "",
    messagingSenderId: "73588798403"
};


export const homepageDBId = "-LGwp2zviwPGVvEJLTAc";

// Makes sure you only have one firebase initialized
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();