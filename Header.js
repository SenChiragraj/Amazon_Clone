import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./styles/Header.css";
import {Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

export default function Header() {
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [{ basket, user }, dispatch] = useStateValue({});

  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <img
            // onClick={refreshPage}
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className="header__logo"
            alt=""
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">Hello guest</span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </div>

        <div className="header__optionBasket">
          <Link to={"/checkout"}>
            <ShoppingBasketIcon />
          </Link>
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </>
  );
}
