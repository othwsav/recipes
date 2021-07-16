import React from 'react'
import Layout from '../components/Layout'
import '../assets/css/style.css'
import 'normalize.css'
import { StaticImage } from 'gatsby-plugin-image'
import AllRecipes from '../components/AllRecipes'


export default function Home () {
	return (
		<Layout>
			<main className="page">
				<header className="hero">
					<StaticImage
						src="../assets/images/main.jpeg"
						alt="eggs and flour"
						className="hero-img"
						placeholder="tracedSVG"
						layout="fullWidth" />
					<div className="hero-container">
						<div className="hero-text">
							<h1>Simple recipes</h1>
							<h4>no fluff, just recipes</h4>
						</div>
					</div>
				</header>
				<AllRecipes />
			</main>
		</Layout>
	)
}
