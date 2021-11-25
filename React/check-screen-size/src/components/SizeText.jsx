import React, { useContext } from 'react';
import { ScreenSizeContext } from '../context/ScreenSizeContext';

function SizeText (props) {
    const {src} = useContext(ScreenSizeContext);
    const {name, url, size} = src;
    return(
        <>
        <p className="text">You got <span className="avatar-name">{name}</span> picture because your screen size is <span className="screen-size">{size}</span></p>
        </>
    )
};

export default SizeText;