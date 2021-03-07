import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../assets/images/logo.png'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><span className="image shades"><img src={logo} alt="" /></span></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">myShade</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
