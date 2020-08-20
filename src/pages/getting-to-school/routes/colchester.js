import React from "react"
import { Link } from 'gatsby'
import Layout from "../../../layout/layout-h2s-with-newsletter-no-banner"

const Colchester = () => (
	<Layout>
		<h1>Schools in Colchester</h1>

		<p>Select your school from the list below to see the available map options:</p>
		<ul>
			<li><Link to="colchester-county-high">Colchester County High School</Link></li>
			<li><Link to="colchester-institute">Colchester Institute</Link></li>
			<li><Link to="colchester-royal-grammar">Colchester Royal Grammar</Link></li>
			<li><Link to="colchester-sixth-form">Colchester Sixth Form College</Link></li>
			<li><Link to="philip-morant">Philip Morant</Link></li>
			<li><Link to="st-benedict">St Benedicts</Link></li>
			<li><Link to="st-helena">St Helena</Link></li>
		</ul>

	</Layout>
)

export default Colchester
