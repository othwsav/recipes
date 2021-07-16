import { Link } from 'gatsby'
import React from 'react'
import setupTags from '../utils/setupTags'

const TagsList = ({ recipes }) => {
    const newTags = setupTags(recipes)
    return (
        <section className="tag-container">
            <h4>recipes</h4>
            <div className="tags-list">
                {newTags.map((tag, i) => {
                    const [text, value] = tag
                    return <Link key={i} to={`/${text}`}>{text} ({value})</Link>
                })}
            </div>
        </section>
    )
}

export default TagsList
