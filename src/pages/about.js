import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'

const About = () => {
    return (
        <Layout>
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe debitis distinctio ipsam velit commodi?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Link to="/contact" className="btn">contact</Link>
                    </article>
                    <StaticImage
                    src="../assets/images/about.jpeg"
                    alt="person pouring salt in bowl"
                    className="about-img"
                    placeholder="blurred"/>
                </section>
            </main>
        </Layout>
    )
}

export default About
