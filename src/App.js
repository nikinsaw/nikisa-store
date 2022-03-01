import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/hompage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import Header from "./components/header/header.component"
import { auth } from "./firebase/firebase.utils"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="shop" element={<ShopPage />}></Route>
          <Route path="signin" element={<SignInAndSignUpPage />}></Route>
        </Routes>
      </div>
    )
  }
}

export default App
