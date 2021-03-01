import React from "react";
import {Link} from "react-router-dom";


const Menu = () =>{
    return(
        <>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/search">Search</Link>
        
        </>
    );
}
export default Menu;