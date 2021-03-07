import React from 'react'
import ImgPrev from '../components/ImgPrev'
import ColourPicker from '../components/ColourPicker'
import ShadeFinder from '../components/ShadeFinder'

const BannerUpload = (props) => (
    <section id="bannerplain" lassName="style2">
        <div className="inner">
            <div className="content">
            <img src="src\assets\images\logo.png" alt="" />
            <figure>
            <ImgPrev />
            <figcaption>1. Upload a profile image <br />
            2. Use the colour picker to find your shade <br />
            3. Click on one of our shades to see products
            </figcaption>
            </figure>
            <div className="colourPicker">    
              
            </div>
            </div>
        </div>
    </section>
)



export default BannerUpload
//
