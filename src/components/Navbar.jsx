import { Link } from 'gatsby'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [show, setshow] = useState(false)

    const navLinks = [
        {
            to: '',
            name: 'Home'
        },
        {
            to: 'recipes',
            name: 'Recipes'
        },
        {
            to: 'tags',
            name: 'Tags'
        },
        {
            to: 'about',
            name: 'About'
        }
    ]
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/" className="logo">
                        <span>Simple</span>
                        <span>Recipes</span>
                    </Link>
                    <button className="nav-btn" onClick={() => setshow(!show)}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
                <div className={`nav-links${show ? ' show-links' : ''}`}>
                    {navLinks.map((link, i) => (
                        <Link to={"/" + link.to} key={i} activeClassName="active-link" className="nav-link" onClick={() => setshow(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <div className="nav-link contact-link">
                        <Link to="/contact" className="btn" onClick={() => setshow(false)}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
