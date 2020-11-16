import React from "react";
import firebase from "firebase";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

import "./Header.css";
import { provider } from "../firebase";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/UserSlice";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signinWithfirebase = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        dispatch(login("user"));
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  const logoutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        dispatch(logout());
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <div className="header">
      {/* <Link to="/"> */}
      <svg
        width="48px"
        height="48px"
        viewBox="0 0 1024 1024"
        data-aut-id="icon"
        fillRule="evenodd"
        className="header__logo"
      >
        <path
          className="rui-77aaa"
          d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
        ></path>
      </svg>
      <div className="header__search header__search--city">
        <SearchIcon fontSize="large" className="header__searchIcon bg--white" />
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search city area or location"
        />
        <KeyboardArrowDownIcon
          fontSize="large"
          className="header__searchIcon bg--white"
        />
      </div>
      <div className="header__search header__search--items">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Find cars, mobile phones and more"
        />
        <SearchIcon fontSize="large" className="header__searchIcon bg--olx" />
      </div>
      <div className="header__option">
        {user === null && (
          <Link
            to=""
            onClick={signinWithfirebase}
            className="header__optionLogin"
          >
            Login
          </Link>
        )}
        <Link to="" onClick={logoutUser} className="header__optionSellAnchor ">
          <div className="header__optionSell">
            <AddRoundedIcon className="header__addIcon bg--white" />
            Sell
          </div>
        </Link>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Header;
