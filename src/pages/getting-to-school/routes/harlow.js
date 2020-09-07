import React from "react"
import { Link } from 'gatsby'
import Layout from "../../../layout/layout-h2s-with-newsletter-no-banner"

const Harlow = () => (
	<Layout>
		<h1>Schools in Harlow</h1>

		<p>Select your school from the list below to see the available map options:</p>
		<ul>
			<li><Link to="bmat-stem">BMAT STEM Academy</Link></li>
			<li><Link to="burnt-mill">Burnt Mill Academy</Link></li>
			<li><Link to="mark-hall">Mark Hall Academy</Link></li>
			<li><Link to="passmores">Passmores Academy</Link></li>
			<li><Link to="frederick-gibberd">Sir Frederick Gibberd College</Link></li>
			<li><Link to="stewards">Stewards Academy</Link></li>
			<li><Link to="st-marks">St Mark’s West Essex Catholic School</Link></li>
		</ul>

	</Layout>
)

export default Harlow
