import React from "react"
import { Link } from 'gatsby'
import Layout from "../../layout/layout-h2s-with-newsletter-no-banner"

const Routes = () => (
	<Layout>
		<h1>Routes</h1>
		<p>Here you’ll find our latest walking and cycling maps for the areas around your school. Just click your town and then your school name to find your map and work out the best route from your house, using the information and links provided.</p>
		<p>Our maps offer:</p>
		<ul>
			<li>walking, cycling and scooting routes around schools</li>
			<li>drop-off and pick-up zone ideas</li>
			<li>areas that are usually a traffic nightmare</li>
			<li>park and ride stops (where available)</li>
		</ul>

		<p>We’ve tried and tested these routes but they’re just a starting point. You might know a better route so use our maps as a guide. Better yet if you know a secret route that we haven’t included, share it with our community on social media #StopSwapGO</p>
		<p>Below each map is a little description of the routes suggested if you’re coming in from different areas.</p>

		<div className="notice notice-middle">
			<h2>We’re working on your map!</h2>
			<p>Your route map isn’t ready yet, but your school is on the list. Check back here or follow us on <Link to="https://www.instagram.com/stopswapgo/">Instagram</Link>, <Link to="https://www.facebook.com/stopswapgo">Facebook</Link>, and <Link to="https://twitter.com/stopswapgoessex">Twitter</Link> as we’ll launch new routes in for schools over the coming weeks and months.</p>
		</div>

		<h2>Choose your town or city</h2>
		<p>Select the area your school is in from the list to see available map options:</p>
		<ul>
			<li><Link to="/getting-to-school/routes/chelmsford">Chelmsford</Link></li>
			<li><Link to="/getting-to-school/routes/colchester">Colchester</Link></li>
		</ul>
	</Layout>
)

export default Routes
