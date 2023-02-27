const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getDatabase } = require('firebase/database');
const { getStorage } = require('firebase/storage');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlnnag51zFdPBpfE8yo1pskr_6SuodqQw",
  authDomain: "pinkvote-436c5.firebaseapp.com",
  databaseURL: "https://pinkvote-436c5-default-rtdb.firebaseio.com",
  projectId: "pinkvote-436c5",
  storageBucket: "pinkvote-436c5.appspot.com",
  messagingSenderId: "729744728227",
  appId: "1:729744728227:web:36999194650584337d5f16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
const db = getDatabase(app);
// const storage = getStorage(app);

exports.db = db;