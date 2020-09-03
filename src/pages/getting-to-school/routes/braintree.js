import React from "react"
import { Link } from 'gatsby'
import Layout from "../../../layout/layout-h2s-with-newsletter-no-banner"

const Brentwood = () => (
	<Layout>
		<h1>Schools in Braintree</h1>

		<p>Select your school from the list below to see the available map options:</p>
		<ul>
			<li><Link to="alec-hunter">Alec Hunter Academy</Link></li>
			<li><Link to="notley-high-braintree-sixth-form">Notley High School and Braintree Sixth Form</Link></li>
			<li><Link to="tabor">Tabor Academy</Link></li>
		</ul>

	</Layout>
)

export default Brentwood
