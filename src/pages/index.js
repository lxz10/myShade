import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/youtube1.gif'
import pic02 from '../assets/images/youtube2.jpeg'
import pic03 from '../assets/images/youtube3.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                <section id="two">
                        <div className="inner">
                            <header className="major">
                            <img src="src\assets\images\logo.png" alt="" />
                                <h3>We're dedicated to finding the right shade to make you feel good</h3>
                            </header>
                            <p>In just three clicks, find your foundation shade and products just for you. It doesn't have to be hard to feel good. <br />
                            Are you ready to feel empowered?
                            </p>
                            <ul className="actions">
                                <li><Link to="/elements" className="button">Discover The Shades</Link></li>
                            </ul>
                        </div>
                    </section>
                    <section id="one" className="tiles">
                        <article>
                            <header className="major">
                                <p>"Looking good makes me feel more confident and like I can take on the stress. Plus, even if you had a bad day, at least you looked great so that's a nice consolation."</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
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

            </Layout>
        )
    }
}

export default HomeIndex