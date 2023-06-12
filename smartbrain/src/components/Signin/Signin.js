import React from "react";


const Signin = ({onRouteChange}) => {



    return(
        <div className="Login_form">
            <h2>Sign In</h2>
            <form>
                <input type="text" placeholder="Username"/>
                <br />
                <input type="password" placeholder="Current-Password"/>
                <br />
                <button onClick={()=>onRouteChange('home')} 
                type="Submit">Sign In</button>

                <p onClick={()=>onRouteChange('Register')}>Register</p>
            </form> 
            </div> 
    )
}

export default Signin;