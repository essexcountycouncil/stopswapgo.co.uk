import React from "react"
import { Link } from 'gatsby'
import Layout from "../../../layout/layout-h2s-with-newsletter-no-banner"

const Basildon = () => (
	<Layout>
		<h1>Schools in Basildon</h1>

		<p>Select your school from the list below to see the available map options:</p>
		<ul>
			<li><Link to="basildon-lower">Basildon Lower Academy</Link></li>
			<li><Link to="de-la-salle">De La Salle School</Link></li>
			<li><Link to="woodlands">Woodlands School</Link></li>
		</ul>

	</Layout>
)

export default Basildon
