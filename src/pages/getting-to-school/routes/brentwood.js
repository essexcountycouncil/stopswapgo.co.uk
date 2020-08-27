import React from "react"
import { Link } from 'gatsby'
import Layout from "../../../layout/layout-h2s-with-newsletter-no-banner"

const Brentwood = () => (
	<Layout>
		<h1>Schools in Brentwood</h1>

		<p>Select your school from the list below to see the available map options:</p>
		<ul>
			<li><Link to="becket-keys">Becket Keys School</Link></li>
			<li><Link to="brentwood-county-high">Brentwood County High School</Link></li>
			<li><Link to="brentwood-ursuline-convent">Brentwood Ursuline Convent High School</Link></li>
		</ul>

	</Layout>
)

export default Brentwood
