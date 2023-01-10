import React from "react";
import "./Nav.css";
import ProfileIcon from "../../assets/profile-icon.jpg";
import LogoIcon from "../../assets/stan-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  function openMenu() {
    document.body.classList += " menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <div id="nav">
      <div className="nav__container">
        <div className="nav__left">
          <div className="nav__logo">
            <Link to="/">
              <img className="nav__logo--img" src={LogoIcon} alt="" />
            </Link>
          </div>
          <ul className="nav__links">
            <Link to="/Programs" className="nav__link">
              TV Shows
            </Link>
            <Link to="/Programs" className="nav__link">
              Movies
            </Link>
            <Link to="/MyList" className="nav__link">
              My List
            </Link>
          </ul>
        </div>
        <div className="nav__right">
          {/* <FontAwesomeIcon
            className="search-bar__icon"
            icon="fa-solid fa-magnifying-glass"
          /> */}
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon className="btn__menu" icon="bars" />
          </button>
          <div className="nav__profile--wrapper">
            <img className="nav__profile" src={ProfileIcon} alt="" />
            <span>Bailey</span>
          </div>
          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <FontAwesomeIcon icon="times" />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/" className="menu__link" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/Programs" className="menu__link" onClick={closeMenu}>
                  Search
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/MyList" className="menu__link" onClick={closeMenu}>
                  My List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
