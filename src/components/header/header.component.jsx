/* Higher order components are functions that take functions as arguments and return an upgraded component */

import React from "react"

import { Link } from "react-router-dom"
import { connect } from "react-redux" // connect is a higher order component which gives access to things related to redux

import { auth } from "../../firebase/firebase.utils"

import { ReactComponent as Logo } from "../../assets/nikisa.svg"

import "./header.styles.scss"

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="shop">
        SHOP
      </Link>
      <Link className="option" to="contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
)

/* naming of mapStateToProps can be anything but this is standard naming with redux */
/* mapStateToProps is a function which returns an object where the name of property will be the property to be passed with a value */
/* we get the state which is the top level root reducer from this function */
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header)
