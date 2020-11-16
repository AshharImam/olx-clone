import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCHf0WZX2dVMcRFxqxKwO36KSDGY5Dtfg",
  authDomain: "olx-clone-2.firebaseapp.com",
  databaseURL: "https://olx-clone-2.firebaseio.com",
  projectId: "olx-clone-2",
  storageBucket: "olx-clone-2.appspot.com",
  messagingSenderId: "426415915588",
  appId: "1:426415915588:web:ca67f96f1cde98fa057211",
  measurementId: "G-7C6831KNGL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
var provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { provider };
