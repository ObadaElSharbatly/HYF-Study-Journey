import React, { useContext } from 'react';
import { ScreenSizeContext } from '../context/ScreenSizeContext';

function AvatarPicture (props) {
    const {src} = useContext(ScreenSizeContext);
    const {name, url, size} = src;


    return(
        <>
            <img src={url} alt="avatar" width="200"/>
        </>
    )
};

export default AvatarPicture;