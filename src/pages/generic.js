import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Iframe from 'react-iframe'
import { Link } from 'gatsby'
import InstagramEmbed from 'react-instagram-embed';

import pic01 from '../assets/images/col32.png'
import n5 from '../assets/images/feed/n5.jpg'
import a from '../assets/images/feed/1.jpg'
import b from '../assets/images/feed/nowaste.png'
import ob from '../assets/images/feed/ob.png'
import uoma from '../assets/images/feed/uoma.jpg'
import minted from '../assets/images/feed/minted.jpg'
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
                            <div className="col1">
                            <div className="skin"><img src={pic01} alt="hi" /></div>
                            </div>
                            <div className="col2">
                            <h1>#360</h1>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><Link to="/elements" className="button">Discover more shades</Link></li>
                            <li><Link to="/landing" className="button special">Share with a friend</Link></li>
                        </ul>
                    </header>
                    
                    <div id="main">
                <section id="two">
                    </section>
                    <section id="one" className="tiles-clear">
                        <article style={{backgroundImage: `url(${a})`}}>
                            <header className="major">
                                <h3>Kiitana</h3>
                                <p>Fashion, beauty, lifestyle</p>
                            </header>
                            <Link to="https://www.instagram.com/kiitana/?hl=en" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${uoma})`}}>
                            <header className="major">
                                <h3>UOMA - Say What?! Foundation</h3>
                                <p>Click here to buy</p>
                            </header>
                            <Link to="https://uomabeauty.co.uk/products/say-what-foundation?variant=37128480194744" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${ob})`}}>
                            <header className="major">
                                <h3>Only Bells</h3>
                                <p>Beauty, lifestyle</p>
                            </header>
                            <Link to="https://www.youtube.com/c/OnlyBells/videos" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${b})`}}>
                            <Link to="https://www.goingzerowaste.com/blog/10-zero-waste-makeup-brands/" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${minted})`}}>
                            <header className="major">
                                <h3>Skin by Minted</h3>
                                <p>Click here to buy</p>
                            </header>
                            <Link to="https://www.mentedcosmetics.com/products/skin-by-mented?variant=18208782450753" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${n5})`}}>
                            <header className="major">
                                <h3>Nikkie Tutorials</h3>
                                <p>Full Face Using ONLY Black-Owned Makeup Brands</p>
                            </header>
                            <Link to="https://youtu.be/kM1sLvik2ho" className="link primary"></Link>
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