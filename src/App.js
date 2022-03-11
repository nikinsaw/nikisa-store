import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { connect } from "react-redux"

import "./App.css"

import HomePage from "./pages/hompage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import Header from "./components/header/header.component"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import { setCurrentUser } from "./redux/user/user.actions"

class App extends React.Component {
  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // createUserProfileDocument(user)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="shop" element={<ShopPage />}></Route>
          <Route
            exact
            path="signin"
            element={
              currentUser ? (
                <Navigate replace to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            } //so that user is not able to view signin page when already signed in
          ></Route>
        </Routes>
      </div>
    )
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
