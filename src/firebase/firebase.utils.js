import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDBjwqs4eraZz6_VqT0SVZFUN8nMtC_lLY",
    authDomain: "crwn-db-arrashi.firebaseapp.com",
    databaseURL: "https://crwn-db-arrashi.firebaseio.com",
    projectId: "crwn-db-arrashi",
    storageBucket: "crwn-db-arrashi.appspot.com",
    messagingSenderId: "627156853567",
    appId: "1:627156853567:web:c2edd83a5547fab6bb298a",
    measurementId: "G-9EXPTBJWFY"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log("error in create user", error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;