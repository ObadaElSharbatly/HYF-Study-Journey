import React, { useContext } from 'react';
import { ScreenSizeContext } from '../context/ScreenSizeContext';

function ScreenSize (props) {
const {width, height} = useContext(ScreenSizeContext);

    return(
        <>
        <h2> {width}px / {height}px </h2>
        </>
    )
};

export default ScreenSize;