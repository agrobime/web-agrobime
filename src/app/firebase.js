import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAmrboSjyDCN8_KVTNFgYn_LQ0OeNqjtkc",
  authDomain: "agrobimedatos.firebaseapp.com",
  databaseURL: "https://agrobimedatos-default-rtdb.firebaseio.com",
  projectId: "agrobimedatos",
  storageBucket: "agrobimedatos.appspot.com",
  messagingSenderId: "376110261171",
  appId: "1:376110261171:web:80d3e641ddc3e36b8de1c6"
};
// Initialize Firebase
var firebaseDb = firebase.initializeApp(firebaseConfig);

export default firebaseDb.database().ref();