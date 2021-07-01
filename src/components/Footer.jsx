import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer">
            <p>
                &copy;{` ${new Date().getFullYear()} `}
                <span>SimpleRecipes</span>
                {". Built with "}
                <a href="https://gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a>
                {" by "}
                <a href="https://othwsav.vercel.app/" target="_blank" rel="noreferrer">Othwsav</a>
            </p>
        </footer>
    )
}

export default Footer
