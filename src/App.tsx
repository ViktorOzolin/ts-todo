import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import TodosPage from "./pages/TodosPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" exact />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};

export default App;
