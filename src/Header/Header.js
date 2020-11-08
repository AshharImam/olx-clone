import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

const Header = () => {
  return (
    <div className="header">
      {/* <Link to="/"> */}
      <svg
        width="48px"
        height="48px"
        viewBox="0 0 1024 1024"
        data-aut-id="icon"
        class=""
        fill-rule="evenodd"
        className="header__logo"
      >
        <path
          class="rui-77aaa"
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
        <a href="#" className="header__optionLogin">
          Login
        </a>
        <a href="#" className="header__optionSellAnchor ">
          <div className="header__optionSell">
            <AddRoundedIcon className="header__addIcon bg--white" />
            Sell
          </div>
        </a>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Header;
