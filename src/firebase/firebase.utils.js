import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const config = {
  apiKey: "AIzaSyDNlavJivMblANCng8hYfpqhBEePz7MSAU",
  authDomain: "nikisa-store.firebaseapp.com",
  projectId: "nikisa-store",
  storageBucket: "nikisa-store.appspot.com",
  messagingSenderId: "407676874348",
  appId: "1:407676874348:web:f01b2ce55f71d83f3c7249",
  measurementId: "G-JGL5B8S8XS",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
