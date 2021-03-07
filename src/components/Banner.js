import React from 'react'
import { Link } from 'gatsby'
const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
            <img src="src\assets\images\logo.png" alt="" />
            <h1>myShade</h1>
            </header>
            <div className="content">
                <p>Find the right shade for your foundation.</p>
                <ul className="actions">
                    <li><Link to="/photo" className="button next scrolly">Get Started</Link></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
