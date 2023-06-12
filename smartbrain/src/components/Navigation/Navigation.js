import React from "react";
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
    return(
        // <nav className="nav_menu" style={{display: 'flex', justifyContent: 'flex-end'}}>
        //     <p onClick={()=>onRouteChange('Signin')}>Sign Out</p>
        // </nav>
    <>
   { isSignedIn?

            <nav className="nav_menu" style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('Signin')}>Sign Out</p>
            </nav>:
     
            <nav className="nav_menu" style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('Signin')}>SignIn</p>
                <p onClick={() => onRouteChange('Register')}>Register</p>
            </nav> }
            </>
    )
    
}

export default Navigation;