import React from "react";
import './FaceRecognition.css';



const FaceRecognition = () => {

//    // Your PAT (Personal Access Token) can be found in the portal under Authentification
//     const PAT = '';
//     // Specify the correct user_id/app_id pairings
//     // Since you're making inferences outside your app's scope
//     const USER_ID = 'mrpaul';       
//     const APP_ID = '****************';
//     // Change these to whatever model and image URL you want to use
//     const MODEL_ID = 'general-image-recognition';
//     const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
//     const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

//     ///////////////////////////////////////////////////////////////////////////////////
//     // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
//     ///////////////////////////////////////////////////////////////////////////////////

//     const raw = JSON.stringify({
//         "user_app_id": {
//             "user_id": USER_ID,
//             "app_id": APP_ID
//         },
//         "inputs": [
//             {
//                 "data": {
//                     "image": {
//                         "url": IMAGE_URL
//                     }
//                 }
//             }
//         ]
//     });

//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Authorization': 'Key ' + PAT
//         },
//         body: raw
//     };

//     // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
//     // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
//     // this will default to the latest version_id

//     fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));

    return(
        <div className="image_centre">
            <img alt="" src='' />
        </div>
    )
}

export default FaceRecognition;