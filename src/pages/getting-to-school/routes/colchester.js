import React from "react"
import { Link } from 'gatsby'
import Layout from "../../../layout/layout-h2s"

const Colchester = () => (
	<Layout>
		<h1>Schools in Colchester</h1>

		<h2>We’re working on your map!</h2>
		<p>Your route map isn’t ready yet, but your school is on the list. Check back here or follow us on Instagram, Facebook, or Twitter as we’ll launch new routes in for schools over the coming weeks and months.</p>
		<p>Select your school from the list below to see the available map options:</p>
		<ul>
			<li><Link to="colchester-country-high">Colchester County High School</Link></li>
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
