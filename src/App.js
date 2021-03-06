import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Alert from "./components/alert/alert.component";
import Loader from "./components/loader/loader.component";
import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import {
  selectIsLoading,
  selectLoadingMessage
} from "./redux/loading/loading.selectors";
import { setAlert } from "./redux/alert/alert.actions";
import { checkUserSession } from "./redux/user/user.actions";

import "./App.scss";

const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const Contact = lazy(() => import("./pages/contact/contact.component"));
const PrivacyPolicy = lazy(() =>
  import("./pages/privacy-policy/privacy-policy.component")
);
const Philosphy = lazy(() => import("./pages/philosophy/philosophy.component"));
const Gallery = lazy(() => import("./pages/gallery/gallery.component"));
const SignInPage = lazy(() =>
  import("./pages/sign-in-page/sign-in-page.component")
);
const CartPage = lazy(() => import("./pages/cart-page/cart-page.component"));
const Checkout = lazy(() => import("./pages/checkout/checkout.component"));
const Admin = lazy(() => import("./pages/admin/admin.component"));

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isLoading: selectIsLoading,
  loadingMessage: selectLoadingMessage
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  setAlert: message => dispatch(setAlert(message))
});

const App = ({
  checkUserSession,
  currentUser,
  setAlert,
  isLoading,
  loadingMessage
}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  useEffect(() => {
    if (currentUser) {
      const { userName } = currentUser;
      setAlert(`Welcome, ${userName}`);
    }
  }, [currentUser, setAlert]);

  return (
    <div>
      <div className="content">
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/philosophy" component={Philosphy} />
              <Route path="/contact" component={Contact} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/checkout" component={Checkout} />
              <Route
                path="/admin"
                render={() => (currentUser ? <Admin /> : <Redirect to={"/"} />)}
              />
              <Route
                exact
                path="/login"
                render={() =>
                  currentUser ? <Redirect to={"/"} /> : <SignInPage />
                }
              />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </ErrorBoundary>
        {isLoading && <Loader message={loadingMessage} />}
      </div>
      <Header />
      <Footer horizontal />
      <Alert />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
