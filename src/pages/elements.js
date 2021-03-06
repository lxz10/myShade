import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic09 from '../assets/images/pic09.png'
import col2 from '../assets/images/col2.png'
import col3 from '../assets/images/col3.png'
import col4 from '../assets/images/col4.png'
import col5 from '../assets/images/col5.png'
import col6 from '../assets/images/col6.png'
import col7 from '../assets/images/col7.png'
import col8 from '../assets/images/col8.png'
import col9 from '../assets/images/col9.png'
import col10 from '../assets/images/col10.png'
import col11 from '../assets/images/col11.png'
import col12 from '../assets/images/col12.png'
import col13 from '../assets/images/col13.png'
import col14 from '../assets/images/col14.png'
import col15 from '../assets/images/col15.png'
import col16 from '../assets/images/col16.png'
import col17 from '../assets/images/col17.png'
import col18 from '../assets/images/col18.png'
import col19 from '../assets/images/col19.png'
import col20 from '../assets/images/col20.png'

const Elements = (props) => (
    <Layout>
        <Helmet>
            <title>Elements - Forty by HTML5 UP</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Elements</h1>
                    </header>
                    <h3>Image</h3>
                    <div className="box alt">
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><img src={pic09} alt="hi" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col3} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col4} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col5} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col6} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col7} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col8} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col9} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col10} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col11} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col12} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col13} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col14} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col15} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col16} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col17} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col18} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col19} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={col20} alt="" /></span></div>
                        </div>
                    </div>

                                <h4>Left &amp; Right</h4>
                                <p><span className="image left"><img src={pic09} alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget tempus vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.</p>
                                <p><span className="image right"><img src={pic09} alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget tempus vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.</p>

                                <h3>Box</h3>
                                <div className="box">
                                    <p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                                </div>

                                <h3>Preformatted</h3>
                                <pre><code>i = 0;

                                print 'It took ' + i + ' iterations to sort the deck.';
                                </code></pre>

                        </div>
                
                
            </section>

        </div>

    </Layout>
)

export default Elements