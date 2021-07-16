import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import slugify from 'slugify';

const RecipesList = ({ recipes = [] }) => {
    return (
        <section className="recipes-list">
            {recipes.map((recipe) => {
                const {id, title, image, prepTime, cookTime} = recipe,
                    gatsbyImageData = getImage(image),
                    slug = slugify(title, {lower: true})

                return (
                        <Link className="recipe" to={`/${slug}`} key={id}>
                            <GatsbyImage image={gatsbyImageData} className="recipe-img" alt={title} />
                            <h5>{title}</h5>
                            <p>Prep : {prepTime}min | Cook : {cookTime}min</p>
                        </Link>
                    )
            })}
        </section>
    )
}

export default RecipesList
