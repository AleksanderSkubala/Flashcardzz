import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';
import router from './router';
import store from './store';

const configOptions = {
  apiKey: "AIzaSyD2HmFHOY3iuC-w0Da9tWhF8XfcRPe15I0",
  authDomain: "flashcardzz.firebaseapp.com",
  databaseURL: "https://flashcardzz.firebaseio.com",
  projectId: "flashcardzz",
  storageBucket: "flashcardzz.appspot.com",
  messagingSenderId: "178818432212",
  appId: "1:178818432212:web:796649b1c9c4f21f0d8f41",
  measurementId: "G-6GM9YGJ0XP",
};

firebase.initializeApp(configOptions);
firebase.analytics();

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
  if (router.currentRoute.meta.redirect && !user) {
    router.push('/login');
  } else if (router.currentRoute.meta.login && user) {
    router.back();
  }
});

export const db = firebase.firestore();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
