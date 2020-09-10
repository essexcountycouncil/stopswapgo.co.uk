import React from "react"
import { Link } from 'gatsby'
import Layout from "../../../layout/layout-h2s-with-newsletter-no-banner"

const Clacton = () => (
	<Layout>
		<h1>Schools in Clacton</h1>

		<p>Select your school from the list below to see the available map options:</p>
		<ul>
			<li><Link to="clacton-coastal">Clacton Coastal Academy</Link></li>
			<li><Link to="clacton-county-high">Clacton County High School</Link></li>
		</ul>

	</Layout>
)

export default Clacton
