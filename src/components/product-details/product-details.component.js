import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton
} from "react-share";

import { selectProduct } from "../../redux/shop/shop.selectors";
import { addItemStart } from "../../redux/cart/cart.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import HoverZoom from "../hover-zoom/hover-zoom.component";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/whatsapp.svg";

import "./product-details.styles.scss";

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(ownProps.match.params.productID)(state),
  cartError: state.cart.error
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemStart(item))
});

export const ProductDetails = ({ product, addItem, cartItems }) => {
  const { name, images, price, description, features } = product;
  const [currentImage, setImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);

  const quantityAvailable = product.quantity;

  const currentURL = window.location.href;

  return (
    <div className="product-details">
      <div className="panels">
        <div className="panel">
          <HoverZoom src={currentImage} alt="product image" />
          <div className="image-list">
            {images &&
              images.map((image, i) => (
                <div
                  key={i}
                  className="list-image"
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => setImage(image)}
                />
              ))}
          </div>
        </div>
        <div className="panel">
          <h1>{name}</h1>
          <span className="price">{`HKD$${price}`}</span>
          {quantityAvailable >= 1 ? (
            <div className="order">
              <FormInput
                id="quantity"
                name="quantity"
                type="number"
                min={1}
                max={quantityAvailable}
                value={quantity}
                label="Quantity"
                handleChange={e => setQuantity(Number(e.target))}
              />
              <CustomButton
                onClick={() => addItem({ item: product, quantity })}
              >
                Add to Cart
              </CustomButton>
            </div>
          ) : (
            <span className="order not-avail">Out of Stock</span>
          )}

          <p className="description">{description}</p>
          {features &&
            features.map((feature, i) => (
              <div key={i} className="feature">
                <span>&#8226;</span>
                <span>{feature}</span>
              </div>
            ))}
          <div className="share">
            <span>Share:</span>
            <div className="share-buttons">
              <FacebookShareButton
                className="share-btn"
                url={currentURL}
                hashtag="#bonvivantcollection"
              >
                <div className="icon">
                  <FacebookIcon />
                </div>
              </FacebookShareButton>
              <TwitterShareButton
                className="share-btn"
                url={currentURL}
                hashtags={["bonvivantcollection"]}
              >
                <div className="icon">
                  <TwitterIcon />
                </div>
              </TwitterShareButton>
              <WhatsappShareButton
                className="share-btn"
                url={currentURL}
                title="Bon Vivant Collection"
              >
                <div className="icon">
                  <WhatsappIcon />
                </div>
              </WhatsappShareButton>
              <EmailShareButton
                className="share-btn"
                url={currentURL}
                subject={`Bon Vivant Collection - ${name}`}
              >
                <div className="icon">
                  <EmailIcon />
                </div>
              </EmailShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
