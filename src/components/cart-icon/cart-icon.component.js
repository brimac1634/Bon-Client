import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const CartIcon = ({ itemCount, enlarge }) => (
  <div className={`cart-icon ${enlarge ? "enlarge" : null}`}>
    <div className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

export default connect(mapStateToProps, null)(CartIcon);
