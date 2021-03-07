import React, { useState } from 'react';
import pic01 from '../assets/images/col15.png'
import pic02 from '../assets/images/col4.png'
import pic03 from '../assets/images/col10.png'

const ColourPicker = () => {

    return (
        <div class="content">
            <div className="box middle">
                <h4>Your Shades</h4>
                <div className="grid-wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                </div>
                <p>Click on your shade to find the best foundation products</p>
            </div>
        </div>
        
    );
}

export default ColourPicker;
/*
shades
350
360 - product page specific
370
*/