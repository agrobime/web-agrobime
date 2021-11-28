import firebase from "firebase/app";
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyCVR1x_OL3iPDbFn8G1rUznrzTxlerD1w4",
  authDomain: "iotplatform-a8400.firebaseapp.com",
  databaseURL: "https://iotplatform-a8400.firebaseio.com",
  projectId: "iotplatform-a8400",
  storageBucket: "iotplatform-a8400.appspot.com",
  messagingSenderId: "32425788868",
  appId: "1:32425788868:web:eed5a4121ecc0366bb9091"
};
// Initialize Firebase
var firebaseDb = firebase.initializeApp(firebaseConfig);

export default firebaseDb.database().ref();