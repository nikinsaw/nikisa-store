import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firestore = firebase.firestore()

firestore
  .collection("users")
  .doc("4Aj2SrEIVZYcwuLLRTdg")
  .collection("cartItems")
  .doc("123b66Od39RTrd5Njhsz")

firestore.doc("/users/4Aj2SrEIVZYcwuLLRTdg/cartItems/123b66Od39RTrd5Njhsz")
firestore.collection("/users/4Aj2SrEIVZYcwuLLRTdg/cartItems")
