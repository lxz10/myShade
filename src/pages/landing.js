import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerUpload from '../components/BannerUpload'
import ImgPrev from '../components/ImgPrev'

import pic01 from '../assets/images/prof1.jpg'
import pic02 from '../assets/images/prof2.jpg'
import pic03 from '../assets/images/prof3.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>myShade</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerUpload />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Choosing the perfect photo</h2>
                    </header>
                    <p>Upload a profile image of yourself. For best results,</p>
                    <ul>
                        <li>Use natural lighting</li>
                        <li>Have a clear background</li>
                        <li>Take the picture without wearing make-up</li>
                        <li>Use an original image without filters</li>
                    </ul>
                    <p>For the perfect image, see our examples below</p>
                    <div className="box alt">
                        <div className="grid-wrapper">
                        <div className="col-3"><span className="image fit"><img src={pic01} alt="hi" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic02} alt="hi" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic03} alt="hi" /></span></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Landing