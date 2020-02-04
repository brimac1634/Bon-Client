import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MediaQuery from "react-responsive";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { toggleMenu } from "../../redux/menu/menu.actions";

import CartIcon from "../cart-icon/cart-icon.component";
import Trigger from "../compound/compound-trigger.component";
import Controller from "../compound/compound-controller.component";
import DropComponent from "../dropdown/drop-component.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import MenuButton from "../menu-button/menu-button.component";

import BonVLoad from "../../assets/BonVLoad.png";
import "./header.styles.scss";

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu())
});

const Header = ({ currentUser, toggleMenu, location }) => {
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
      <div className="options">
        <MediaQuery minWidth={730}>
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
          <Controller>
            <Trigger>
              <div>
                <CartIcon />
              </div>
            </Trigger>
            <DropComponent>
              <CartDropdown />
            </DropComponent>
          </Controller>
        </MediaQuery>
        <MediaQuery maxWidth={730}>
          <MenuButton onClick={toggleMenu} />
        </MediaQuery>
      </div>
    </div>
  );
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
