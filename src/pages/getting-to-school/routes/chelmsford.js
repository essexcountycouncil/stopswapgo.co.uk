import React from "react"
import { Link } from 'gatsby'
import Layout from "../../../layout/layout-h2s-with-newsletter-no-banner"

const Chelmsford = () => (
	<Layout>
		<h1>Schools in Chelmsford</h1>

		<p>Select your school from the list below to see the available map options:</p>
		<ul>
			<li><Link to="chelmsford-county-high">Chelmsford County High School</Link></li>
			<li><Link to="great-baddow-high">Great Baddow</Link></li>
			<li><Link to="hylands">Hylands</Link></li>
			<li><Link to="king-edward-grammar">King Edward VI Grammar</Link></li>
			<li><Link to="moulsham-high">Moulsham</Link></li>
			<li><Link to="sandon">Sandon</Link></li>
			<li><Link to="st-john-payne">St John Payne</Link></li>
			<li><Link to="boswells">The Boswells</Link></li>
		</ul>

	</Layout>
)

export default Chelmsford