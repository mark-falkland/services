import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import initStore from "./store";

import Navbar from "components/Navbar";

import HomePage from "./pages/Home";
import FaqPage from "./pages/Faq";
import ServicesPage from "./pages/Services";
import ServiceDetailPage from "./pages/serviceDetail";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ProfilePage from "./pages/Profile";
import Sidebar from "components/Sidebar";

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Navbar id="navbar-clone" />
        <Sidebar />
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/services/:serviceId">
            <ServiceDetailPage />
          </Route>
          <Route path="/services">
            <ServicesPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/faq">
            <FaqPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
