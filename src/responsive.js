import {css} from "styled-components"



export const mobile = (props) => {
    return css `
      @media only screen and (min-device-width: 200px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
        ${props}
        }
    `;   
 };

export const tablet = (props) => {
    return css `
    @media only screen and (min-device-width: 768px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1) {
        ${props}
    }    
`;    
 };


export const desktop = (props) => {
    return css `
    @media screen and (min-device-width: 1281px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) { 
        ${props}
    }

    `;    
 };
