import React, { createContext, useEffect, useState } from "react";

export const ScreenSizeContext = createContext();
export const ScreenSizeProvider = ({ children }) => {

    const useScreenSize = () => {
        const [width, setWidth] = useState(window.innerWidth);
        const [height, setHeight] = useState(window.innerHeight);
        const urls = [
            {
                name: "Kabaktash",
                url: "https://avatars.dicebear.com/api/adventurer/d.svg?skinColor[]=variant03&mouth[]=variant15",
                size: "Large",
            },
            {
                name: "Jorayna",
                url: "https://avatars.dicebear.com/api/adventurer/sdf.svg",
                size: "Medium",
            },
            {
                name: "Lomish",
                url: "https://avatars.dicebear.com/api/adventurer/ddas.svg?skinColor[]=variant03&mouth[]=variant01&accessoires[]=birthmark&hairColor[]=blonde03",
                size: "Small",
            },
        ];
        const [src, setSrc] = useState(urls[0])
        useEffect(() => {
            function handleResize() {
                setWidth(window.innerWidth)
                setHeight(window.innerHeight)

            }
            if (width > 900) { setSrc(urls[0]) }
            else if (width > 500) { setSrc(urls[1]) }
            else { setSrc(urls[2]) }
            window.addEventListener('resize', handleResize)

            return () => { window.removeEventListener('resize', handleResize) }

        }, [width, height])

        return { width, height, src }
    };

    const { width, height, src } = useScreenSize();

    return (
        <ScreenSizeContext.Provider value={ { width, height, src } }>
            { children }
        </ScreenSizeContext.Provider >
    )
}