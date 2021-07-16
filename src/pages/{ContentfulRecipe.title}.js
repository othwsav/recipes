import { faClock, faHistory, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'


const RecipeTemplate = ({ data }) => {
    const {
        title,
        cookTime,
        content,
        description: { description },
        prepTime,
        servings,
        image
    } = data.contentfulRecipe,
    gatsbyImageData =  getImage(image),
    {ingredients, instructions, tags, tools} = content

    return (
        <Layout>
            <main className="page">
                <div className="recipe-page">
                    {/* hero */}
                    <section className="recipe-hero">
                        <GatsbyImage image={gatsbyImageData} alt={title} className="about-img" />
                        <article className="recipe-info">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            {/* icons */}
                            <div className="recipe-icons">
                                <article>
                                    <FontAwesomeIcon icon={faClock} />
                                    <h5>prep Time</h5>
                                    <p>{prepTime} min</p>
                                </article>
                                <article>
                                    <FontAwesomeIcon icon={faHistory} />
                                    <h5>cook Time</h5>
                                    <p>{cookTime} min</p>
                                </article>
                                <article>
                                    <FontAwesomeIcon icon={faUsers} />
                                    <h5>servings</h5>
                                    <p>{servings}</p>
                                </article>
                            </div>
                            {/* tags */}
                            <p className="recipe-tags">
                                Tags : {tags.map((tag,i) => {
                                    return (
                                    <Link to={`/${tag}`} key={i}>
                                        {tag}
                                    </Link>)
                                })}
                            </p>
                        </article>
                    </section>

                    {/* rest of the content */}
                    <section className="recipe-content">
                        <article>
                            <h4>instructions</h4>
                            {instructions.map((item, i) => {
                                return (
                                    <div key={i} className="single-instruction">
                                        <header>
                                            <p>step {i+1}</p>
                                            <div></div>
                                        </header>
                                        <p>{item}</p>
                                    </div>
                                )
                            })}
                        </article>
                        <article className="second-column">
                            <div>
                                <h4>ingredients</h4>
                                {ingredients.map((item, i) => {
                                    return (
                                        <p key={i} className="single-ingredient">
                                            {item}
                                        </p>
                                    )
                                })}
                            </div>
                            <div>
                                <h4>tools</h4>
                                {tools.map((item, i) => {
                                    return (
                                        <p key={i} className="single-tool">
                                            {item}
                                        </p>
                                    )
                                })}
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </Layout>
    )
}

export const query = graphql`
query getSingleRecipe($title: String) {
    contentfulRecipe(title: {
        eq: $title
    }) {
        title
        cookTime
        content {
            ingredients
            instructions
            tags
            tools
        }
        description {
            description
        }
        prepTime
        servings
        image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
    }
}
`

export default RecipeTemplate
