import React from "react";
import About from "./About";
import Contact from "./Contact";
import Search from "./Search";

import Menu from "./Menu";
import {Route, Switch} from 'react-router-dom';


const Reatrouter = () =>{
    return(
        <>
        <Menu/>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/search" component={Search} />
        </Switch>
       
        </>
    );
}
export default Reatrouter;