import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm =({onInputChange,onButtonSubmit}) => {
    return(
        <>
        <p>This App is going to detect the face.Give a try!</p>
       <div className="the_form">
                
                <input type="text"  onChange={onInputChange}/>
                <button type="Submit"   onClick={onButtonSubmit}>Detect</button>
                <br />
        
        </div>
        
     </>
      
    )
}
export default ImageLinkForm;