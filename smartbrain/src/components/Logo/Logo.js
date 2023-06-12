import React from "react";
import './Logo.css';
import  Ladder from './ladder.png';

const Logo = () => {
    return(
        <div className="the_logo">
            <img src={Ladder} alt="Company Logo" />
        </div>
    )
}
export default Logo;