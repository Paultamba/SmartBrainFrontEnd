import React from "react";


const Register = ({onRouteChange}) => {

    return(
        <div className="Login_form">
            <h2>Register</h2>
            <div>
                <input type="text" 
                placeholder="FullName"/>

                <br />
                <input type="emailaddress" 
                placeholder="Email"/>

                <br />
                <input type="text" 
                placeholder="Username"/>

                <br />
                <input type="password" 
                placeholder="current-Password"/>

                <br />
                <button 
                onClick={()=> onRouteChange('Signin')}
                type="Submit">Submit</button>
                
                <p onClick={() => onRouteChange('Signin')}>Sign In</p>
            </div> 
            </div> 
    )
}

export default Register;