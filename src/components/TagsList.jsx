import { Link } from 'gatsby'
import React from 'react'
import slugify from 'slugify'
import setupTags from '../utils/setupTags'

const TagsList = ({ recipes }) => {
    const newTags = setupTags(recipes)
    return (
        <section className="tag-container">
            <h4>recipes</h4>
            <div className="tags-list">
                {newTags.map((tag, i) => {
                    const [text, value] = tag,
                        slug = slugify(text, {lower: true})

                    return <Link key={i} to={`/tags/${slug}`}>{text} ({value})</Link>
                })}
            </div>
        </section>
    )
}

export default TagsList
