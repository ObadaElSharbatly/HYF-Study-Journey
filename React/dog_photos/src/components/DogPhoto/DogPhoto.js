import React, { useState }  from 'react'

import Button from "../Button/Button";
import DogGallery from "../DogGallery/DogGallery";
function DogPhoto () {

    const [dogPhotos, setDogPhotos] = useState([]);

    function getDogPhoto () {
       fetch("https://dog.ceo/api/breeds/image/random")
       .then( Response => Response.json())
       .then( jsonObj => setDogPhotos([ ...dogPhotos, jsonObj.message])) 
    }

    return (
        <>
             <Button getDogPhoto={getDogPhoto} />
             <DogGallery dogPhotos={dogPhotos}/>
        </>
    )
}
 
export default DogPhoto;