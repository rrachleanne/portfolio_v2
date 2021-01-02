import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// create button styles and size
const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
    }) => {
        // if style has not been applied to button it will automatically default to the first button in the array of STYLES
        const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle 
        : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize) 
        ? buttonSize 
        : SIZES[0];

        return(
            
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
                    {children}
                </button>
           
           
        )
    }