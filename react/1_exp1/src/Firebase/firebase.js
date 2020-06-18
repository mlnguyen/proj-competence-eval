import firebase from 'firebase';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyD2m74UTkB_Ky_GhwQS6eJrOBkYvm-Pt8E",
  authDomain: "fir-9fbc6.firebaseapp.com",
  databaseURL: "https://fir-9fbc6.firebaseio.com",
  projectId: "fir-9fbc6",
  storageBucket: "fir-9fbc6.appspot.com",
  messagingSenderId: "179501502962"
};
firebase.initializeApp(config);

export default firebase;