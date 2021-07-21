import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import Seo from '../components/SEO'

const Contact = ({ 
        data:{
            allContentfulRecipe:{
                nodes:recipes
            }
        }
    }) => {
    return (
        <Layout>
			<Seo title="Contact"/>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want To Get In Touch?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi culpa sequi sed fugiat rem delectus!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus, perspiciatis ipsam mollitia tempora inventore corporis quisquam esse velit sapiente!</p>
                    </article>
                    <article className="contact-form">
                        <form className="form contact-form" action="https://formspree.io/f/mgerlrrz" method="POST">
                            <div className="form-row">
                                <label htmlFor="name">your name</label>
                                <input type="text" name="name" id="name"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">your email</label>
                                <input type="text" name="email" id="email"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">your message</label>
                                <textarea name="message" id="message"/>
                            </div>
                            <button type="submit" className="btn block">submit</button>
                        </form>
                    </article>
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


export default Contact
