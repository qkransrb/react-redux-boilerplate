import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/users" component={UserScreen} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
