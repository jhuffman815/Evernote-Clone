import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const firebase = require('firebase');
require('firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyDML9gRZETBXoOuPWbb1K8gEBYz1Jhxfro",
  authDomain: "evernote-clone-a5884.firebaseapp.com",
  databaseURL: "https://evernote-clone-a5884.firebaseio.com",
  projectId: "evernote-clone-a5884",
  storageBucket: "evernote-clone-a5884.appspot.com",
  messagingSenderId: "68431180055",
  appId: "1:68431180055:web:7168e31442b36efb"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <App />,
  document.getElementById('evernote-container')
);
