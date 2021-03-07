import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Iframe from 'react-iframe'
import { Link } from 'gatsby'

import pic01 from '../assets/images/col15.png'
import pic02 from '../assets/images/youtube2.jpeg'
import pic03 from '../assets/images/youtube3.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                    <img src="src\assets\images\logo.png" alt="" />
                        <div className="grid-wrapper">
                        <div className="circle-2"></div>
                        <h1>#149</h1>
                        </div>
                    </header>
                    <div id="main">
                <section id="two">
                        <div className="inner">
                            <p>Find the foundation colour that's right for you</p>
                        </div>
                    </section>
                    <section id="one" className="tiles">
                        <article>
                            <header className="major">
                                <p>Don't know where to start with foundation? Click to find out more</p>
                            </header>
                            <Link to="https://www.adorebeauty.com.au/make-up/foundation/guide/foundation-purpose" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Nyane Lebajoa</h3>
                                <p>Fashion blogger</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Nabela Noor</h3>
                                <p>Creator, activist, entrepreneur</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article>
                            <header className="major">
                                <p>"Makeup lets me channel my personality, and reflect what I am feeling or thinking."</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article>
                            <header className="major">
                                <p>"I started using makeup and it's honestly so empowering. You can make your face look like whatever you want it to, and it's like a painting."</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Shayla Mitchell</h3>
                                <p>Beauty vlogger</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    
                </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
//<span className="image main"><img src={pic11} alt="" /></span>