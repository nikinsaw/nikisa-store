import React from "react";

import "./custom-button.styles.scss";


// the button is a presentational component i.e. functional component without state.
// Here CustomButton is flexible and reusable with styling associated with it.
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
