import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Nav from "./views/Nav/Nav";
import Footer from "./views/Footer/Footer"
import UploadProductPage from './views/UploadProductPage/UploadProductPage'
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';
import HistoryPage from './views/HistoryPage/HistoryPage';
import Home from './views/Home/Home';
import "./App.css";
import education from "./views/Activities/education";
import disaster from "./views/Activities/disaster";
import health from "./views/Activities/health";
import livelihood from "./views/Activities/livelihood";
import Contact from "./views/Contact/Contact";
import About from "./views/Home/section/About";

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Nav/>
      <div style={{ paddingTop: '35px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} / >
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
           <Route exact path="/home" component={Auth(Home, null)} />
           <Route exact path="/education" component={Auth(education, null)} />
           <Route exact path="/disaster" component={Auth(disaster, null)} />
           <Route exact path="/health" component={Auth(health, null)} />
           <Route exact path="/livelihood" component={Auth(livelihood, null)} />
           <Route exact path="/contact" component={Auth(Contact, null)} />
           <Route exact path="/about" component={Auth(About, null)} />
          



        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
