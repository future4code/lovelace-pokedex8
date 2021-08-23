import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import DetailsPage from "../pages/DetailsPage";
import ErrorPage from "../pages/ErrorPage";



const Router = () => {
    return (
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
    
            <Route exact path="/pokedex">
              <Pokedex />
            </Route>

            <Route exact path="/details">
              <DetailsPage />
            </Route>

            <Route >
              <ErrorPage />
            </Route>

          </Switch>
        </BrowserRouter>
      );
    };
    
    export default Router;