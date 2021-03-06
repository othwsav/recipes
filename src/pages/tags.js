import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import setupTags from '../utils/setupTags'
import Seo from '../components/SEO'
import slugify from 'slugify'



const Tags = ({ 
    data:{
        allContentfulRecipe:{
            nodes: recipes
        }
    } }) => {
    
    const newTags = setupTags(recipes)
    return (
        <Layout>
			<Seo title="Tags"/>
            <main className="page">
                <section className="tags-page">
                    {newTags.map((tag, i) => {
                        const [text, value] = tag,
                            slug = slugify(text, {lower: true})
                        return (
                            <Link key={i} to={`/tags/${slug}`} className="tag">
                                <h5>{text}</h5>
                                <p>{value} recipe{value>1 ? 's' : ''}</p>
                            </Link>
                        )
                    })}
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
{
    allContentfulRecipe {
        nodes {
            content {
                tags
            }
        }
    }
}
`

export default Tags
