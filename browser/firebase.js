'use strict';

// import firebase from 'firebase';
import config from '../secret/firebase.client.json'

const firebase = require("firebase");
require("firebase/auth");
require("firebase/database");

// console.log('firebase config:', config.firebase);
firebase.initializeApp(config.firebase);
export const fbDB = firebase.database();
export const fbAuth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// googleProvider.addScope('https://www.googleapis.com/auth/plus.login');
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();
