import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvailableDevices from "../../assets/available-devices.png";
import AppStore from "../../assets/app-store.png";
import GooglePlay from "../../assets/google-play.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer__container">
            <div className="footer__left">
              <div className="footer__links">
                <Link to="/" className="footer__link">
                  Home
                </Link>
                <span className="footer__spacer">|</span>
                <Link to="/" className="footer__link">
                  Terms & Conditions
                </Link>
                <span className="footer__spacer">|</span>
                <Link to="/" className="footer__link">
                  Privacy Policy
                </Link>
                <span className="footer__spacer">|</span>
                <Link to="/" className="footer__link">
                  Help
                </Link>
              </div>
              <div className="footer__copyright">
                Copyright &copy; 2022 STON.
              </div>
              <div className="footer__social">
                <Link to="/" className="footer__social--link">
                  <FontAwesomeIcon
                    className="footer__social--icon"
                    icon="fa-brands fa-facebook-f"
                  />
                </Link>
                <Link to="/" className="footer__social--link">
                  <FontAwesomeIcon
                    className="footer__social--icon"
                    icon="fa-brands fa-twitter"
                  />
                </Link>
                <Link to="/" className="footer__social--link">
                  <FontAwesomeIcon
                    className="footer__social--icon"
                    icon="fa-brands fa-instagram"
                  />
                </Link>
              </div>
            </div>
            <div className="footer__right">
              <div className="footer__available">
                <span className="footer__available--text">Available on</span>
                <img
                  className="footer__available--img"
                  src={AvailableDevices}
                  alt=""
                />
              </div>
              <div className="footer__download">
                <img
                  className="footer__download--icon footer__download--apple"
                  src={AppStore}
                  alt=""
                />
                <img
                  className="footer__download--icon"
                  src={GooglePlay}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
