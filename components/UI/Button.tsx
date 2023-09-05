'use client'

import React from 'react';
import {ButtonProps} from "@/types";

const Button = ({text, styles, onClick, type = 'button'}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`button ${styles}`}
            onClick={onClick}
            role='button'
        >
            {text}
        </button>
    );
};

export default Button;
