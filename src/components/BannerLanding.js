import React from 'react'
import ShadeFinder from '../components/ShadeFinder'

const BannerLanding = (props) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
            <img src="src\assets\images\logo.png" alt="" />
                <h1>Upload your image to get started</h1>
            </header>
            <div className="content">
                <ShadeFinder />
            </div>
        </div>
    </section>
)



export default BannerLanding
//
