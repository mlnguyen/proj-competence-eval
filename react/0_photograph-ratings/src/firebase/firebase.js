import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBK3vEC-oEZFdNR7ORL8iMo4dUMpWLIv2Y",
    authDomain: "photograph-ratings-c.firebaseapp.com",
    databaseURL: "https://photograph-ratings-c.firebaseio.com",
    projectId: "photograph-ratings-c",
    storageBucket: "photograph-ratings-c.appspot.com",
    messagingSenderId: "806157163448"
};

firebase.initializeApp(config);

export default firebase;