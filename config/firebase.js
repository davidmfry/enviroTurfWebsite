// Initialize
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD1L7J20YhcGtz4pCi_gWbRrSRra3g6e80",
    authDomain: "enviroturfbackend.firebaseapp.com",
    databaseURL: "https://enviroturfbackend.firebaseio.com",
    projectId: "enviroturfbackend",
    storageBucket: "enviroturfbackend.appspot.com",
    messagingSenderId: "37648242895"
};

// Makes sure you only have one firebase initialized
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();