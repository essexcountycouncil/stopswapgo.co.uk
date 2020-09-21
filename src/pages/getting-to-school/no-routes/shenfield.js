import React from "react"
import { Link } from 'gatsby'
import Layout from "../../../layout/layout-h2s-with-newsletter-no-banner"

const Shenfield = () => (
	<Layout>
		<h1>Schools in Shenfield</h1>

		<p>Select your school from the list below to see the available map options:</p>
		<ul>
			<li><Link to="shenfield-high">Shenfield High School</Link></li>
			<li><Link to="st-martins">St Martin’s School</Link></li>
		</ul>

	</Layout>
)

export default Shenfield
