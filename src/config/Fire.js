import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBBhWMhrkpk_fOn0crD57vo_yeENwt605U",
    authDomain: "sisters-united-4cba8.firebaseapp.com",
    databaseURL: "https://sisters-united-4cba8.firebaseio.com/",
    projectId: "sisters-united-4cba8",
    storageBucket: "sisters-united-4cba8.appspot.com",
    messagingSenderId: "629203973389",
    appId: "1:629203973389:web:2f110536ac5323275bec44",
    measurementId: "G-E3XDJ65R9R"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;