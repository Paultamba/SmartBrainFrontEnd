import React from 'react';
import { useState } from 'react';
// import Clarifai  from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';


function App({onInputChange, onButtonSubmit, onRouteChange}) {
  const[input, setInput] = useState('');
  const[route, setRoute] = useState('Signin');
  const[isSignedIn, setIsSignedIn] = useState(false)

  onInputChange = (event) => {
    setInput(event.target.value);
    console.log({input})
  }

  onButtonSubmit= () =>{
    console.log("Click");

  }
  onRouteChange = (route ) => {
    setRoute(route)
    if(route === 'home'){
     return setIsSignedIn(true);
    }
    else{
      return setIsSignedIn(false);
    }
    
  }
 
  
 
  return (
    <>
    <div className="App">
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      { route === 'home' ?
        <div>
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} 
                     onButtonSubmit={onButtonSubmit}/>
      <FaceRecognition /> 
      </div>:
      (
        
          route === 'Signin'?
          <Signin onRouteChange={onRouteChange} />:        

          <Register onRouteChange={onRouteChange}/>
        
        
      )
}
      
    </div>
    </>
  );
}

export default App;
