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
import uoma from '../assets/images/feed/pr1.jpg'
import in4 from '../assets/images/feed/in4.jpg'
import in3 from '../assets/images/feed/in3.jpg'
import atmos from '../assets/images/feed/pr5.jpg'
import atmos1 from '../assets/images/feed/pr2.jpg'
import minted from '../assets/images/feed/pr7.jpg'
import pic02 from '../assets/images/youtube2.jpeg'
import pic03 from '../assets/images/youtube3.jpg'

const Shade = (props) => (
    <Layout>
        <Helmet>
            <title>Your Shade - myShade</title>
            <meta name="description" content="Shade Page" />
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
                            <li><Link to="/discover" className="button">Discover more shades</Link></li>
                            <li><Link to="/photo" className="button special">Share with a friend</Link></li>
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
                            <Link to="https://www.rarebeauty.com/products/liquid-touch-weightless-foundation?variant=34493778919559" className="link primary">
                                <button className="button special2">460W Rare Beauty</button>
                            </Link>
                        </article>
                        <article style={{backgroundImage: `url(${minted})`}}>
                            <Link to="https://www.mentedcosmetics.com/products/skin-by-mented?variant=18208782450753" className="link primary">
                                <button className="button special2">610 Origins</button>
                            </Link>
                        </article>
                        <article style={{backgroundImage: `url(${n5})`}}>
                            <header className="major">
                                <h3>Nikkie Tutorials</h3>
                                <p>Full Face Using ONLY Black-Owned Makeup Brands</p>
                            </header>
                            <Link to="https://youtu.be/kM1sLvik2ho" className="link primary"></Link>
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
                        <article style={{backgroundImage: `url(${in4})`}}>
                            <header className="major">
                                <h3>Robert Welsh</h3>
                                <p>How To Prep Oily Skin For Makeup</p>
                            </header>
                            <Link to="https://youtu.be/u8bkTsosCVE" className="link primary"></Link>
                        </article>
                        
                        <article style={{backgroundImage: `url(${atmos1})`}}>
                                <Link to="https://www.beautylish.com/s/becca-light-shifter-finishing-veil-atmospheric-5" className="link primary">
                                <button className="button special2">Atmospheric 5 Becca Cosmetics</button>
                                </Link>
                        </article>
                        
                        <article style={{backgroundImage: `url(${atmos})`}}>
                            <Link to="https://www.superdrug.com/Make-Up/Face/Foundation/Liquid-Foundation/L'Oreal-Paris-True-Match-Foundation-8-N-Cappuccino-30ml/p/546209" className="link primary">
                                <button className="button special2">Cappuccino 125 L'Oreal</button>
                            </Link>
                        </article>
                        <article style={{backgroundImage: `url(${in3})`}}>
                            <header className="major">
                                <h3>Jessica Pimentel</h3>
                                <p>5 Best Natural-Looking Foundations</p>
                            </header>
                            <Link to="https://youtu.be/-LnA6GjA_HA" className="link primary"></Link>
                        </article>
                    </section>
                    
                </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Shade
//<span className="image main"><img src={pic11} alt="" /></span>