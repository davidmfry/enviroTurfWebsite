// Initialize
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAIXNIgzTSrP8TFIpfTZaRRkw06f0YL5R8",
    authDomain: "enviroturf-cd0d2.firebaseapp.com",
    databaseURL: "https://enviroturf-cd0d2.firebaseio.com",
    projectId: "enviroturf-cd0d2",
    storageBucket: "",
    messagingSenderId: "943344115166"
};

// Makes sure you only have one firebase initialized
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();