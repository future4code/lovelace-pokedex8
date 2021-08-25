import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import DetailsPage from "../pages/DetailsPage/DetailsPage";


function Router() {
    return (
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>
    
            <Route exact path="/Pokedex">
              <Pokedex />
            </Route>

            <Route exact path="/details/:nome"> 
              <DetailsPage/>
            </Route>

            
          </Switch>
        </BrowserRouter>
      );
    };
    
    export default Router;