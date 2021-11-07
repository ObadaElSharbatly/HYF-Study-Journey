import React  from 'react'

function DogGallery ({dogPhotos}) {

    return (
        <>
            <div className="img-con">
                {dogPhotos.length === 0 ? 
                <p> Get your first dog by clicking the button! </p> : 
                dogPhotos.map((dog, key) => {
                    return (
                        <div key={key} data-testid={key}>
                            <img src={dog} alt={`dog${key}`} width="50"/>
                        </div>
                    )
                })}

               
            </div>
        </>
    )
}
 
export default DogGallery;