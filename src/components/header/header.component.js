import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import CartIcon from "../cart-icon/cart-icon.component";
import Trigger from "../compound/compound-trigger.component";
import Controller from "../compound/compound-controller.component";
import DropComponent from "../dropdown/drop-component.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import MenuButton from "../menu-button/menu-button.component";

import BonVLoad from "../../assets/BonVLoad.png";
import "./header.styles.scss";

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const Header = ({ currentUser, location }) => {
  const [showMenu, setShowMenu] = useState(false);
  const title = location.pathname.slice(1);
  return (
    <div className="header">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="logo" src={BonVLoad} alt="logo" />
        </Link>
        {title ? (
          <h1>{title}</h1>
        ) : (
          <h2>
            Men's
            <br /> Haberdashery
          </h2>
        )}
      </div>
      <div className="option-container">
        <div className={`options ${showMenu ? "show" : null}`}>
          <Link className="option" to={"/shop"}>
            SHOP
          </Link>
          <Link className="option" to={"/gallery"}>
            GALLERY
          </Link>
          <Link className="option" to={"/philosophy"}>
            PHILOSOPHY
          </Link>
          <Link className="option" to={"/contact"}>
            CONTACT
          </Link>
          {currentUser && (
            <Link className="option" to={"/admin"}>
              ADMIN
            </Link>
          )}
          <span className="apt-only">by appointment only</span>
        </div>
        <Controller>
          <Trigger>
            <div>
              <CartIcon enlarge={showMenu} />
            </div>
          </Trigger>
          <DropComponent>
            <CartDropdown />
          </DropComponent>
        </Controller>
        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <MenuButton showMenu={showMenu} />
        </div>
      </div>
    </div>
  );
};
export default withRouter(connect(mapStateToProps)(Header));
