import "./header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import { useStateValue } from "../../utils/stateProvider";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const { user, email, logoutHandler } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clcik");
  };

  const menuClose = () => {
    setIsMenuOpen(false);
    console.log(close);
  };

  return (
    <div className={`header ${isMenuOpen ? "menuOpen" : ""}`}>
      <div className="LogoAndHeaderAndSearch">
        <div className="header__logo">
          <Link >
            <MenuIcon
              className="header__logoImage"
              onClick={handleClick}
              style={{ fontSize: "3rem" }}
            />
          </Link>
          <Link to="/" className="header__logoTitle">
            E-Shop
          </Link>
        </div>

        {/* Меню за мобилни устройства */}
        <div className={`nav__dropdown ${isMenuOpen ? "menuOpen" : ""}`}>
          <Link to="/" className="nav__itemLineZeroTest" onClick={menuClose}>
            Home
          </Link>
          <Link
            to="/catalog"
            className="nav__itemLineZeroTest"
            onClick={menuClose}
          >
            Catalog
          </Link>
          <Link
            to="/about"
            className="nav__itemLineZeroTest"
            onClick={menuClose}
          >
            About Us
          </Link>
          <Link
            to="/basket"
            className="nav__itemLineZeroTest"
            onClick={menuClose}
          >
            Your Basket
            <span className="nav__basketCount">{basket.length}</span>
          </Link>
          <Link
            to="/"
            className="nav__itemLineZeroTest"
            onClick={menuClose}
          >
            Payment
          </Link>
          <Link
            to="/"
            className="nav__itemLineZeroTest"
            onClick={menuClose}
          >
            Delivery
          </Link>
        </div>

        <div className="nav__catalog">
          <Link to="/catalog" className="nav__itemLineZero">
            Catalog{" "}
          </Link>
        </div>

        <div className="nav__catalog">
          <Link to="/about" className="nav__itemLineZero">
            About Us
          </Link>
        </div>
      </div>

      <div className="rightSide">
        <div className="header__nav">
          <span className="nav__itemLineOne">
            Hello {user ? email : "Guest"}
          </span>
        </div>

        <div className="nav__item">
          {user ? (
            <div className="logout">
              <button onClick={logoutHandler} className="logOutButton">
                Logout
              </button>
            </div>
          ) : (
            <div className="loginAndRegister">
              <Link to="/login" onClick={menuClose}>
                <span className="nav__signin">Sign In</span>
              </Link>

              <Link to="/register" onClick={menuClose}>
                <span className="nav__register">Register</span>
              </Link>
            </div>
          )}
        </div>

        <div className="nav__description">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__basket">
          <Link to="/basket" className="nav__basketIconLink" onClick={menuClose}>
            <ShoppingBasketIcon
              className="itemBasket"
              style={{ fontSize: "3rem" }}
            />
          </Link>
        <span className="nav__basketCount">{basket.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
