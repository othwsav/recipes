import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import RecipesList from '../components/RecipesList'
import Seo from '../components/SEO'

const About = ({ 
        data:{
            allContentfulRecipe:{
                nodes:recipes
            }
        }
    }) => {
    return (
        <Layout>
			<Seo title="About"/>
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
                <section className="featured-recipes">
                    <h5>Look at this Awesomesouce!</h5>
                    <RecipesList recipes={recipes}/>
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
{
    allContentfulRecipe(
            sort: {fields: title, order: ASC}
            filter: {featured: {eq: true}}
        ) {
            nodes {
                id
                title
                cookTime
                prepTime
                content {
                    tags
                }
                image {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
        }
    }
}
`
export default About
