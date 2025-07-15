import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
return (
    <div> 
    <p className="header">{props.heading}</p>
    </div>
    )   
}
export default Navbar;