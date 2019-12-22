import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBbN0VEHXGRbpLyQgXie1KS4ybi9Ns4KoM",
  authDomain: "inventory-df25f.firebaseapp.com",
  databaseURL: "https://inventory-df25f.firebaseio.com",
  projectId: "inventory-df25f",
  storageBucket: "inventory-df25f.appspot.com",
  messagingSenderId: "497410555526",
  appId: "1:497410555526:web:cf90e06c3014e99406db07"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
