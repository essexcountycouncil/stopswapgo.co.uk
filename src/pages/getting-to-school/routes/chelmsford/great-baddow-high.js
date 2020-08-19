import React from "react"
import { Link } from 'gatsby'
import map from "./G2S_CHELM_GBHS - map.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const GreatBaddowHigh = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/chelmsford"
			one="Schools in Chelmsford"
			two="Great Baddow High School" />
	
		<h1>Great Baddow High School</h1>
		<img src={map} />

		<h2>Getting to and from Great Baddow High School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>

		<h2>Address</h2>
		<p><a href="https://www.gbhs.co.uk/809/transport-to-school">Great Baddow High School</a>,<br/>
		Duffield Road<br/>
		Chelmsford<br/>
		Essex<br/>
		CM2 9RZ
		</p>


		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>

		<h2>Walking routes</h2>
		<p>The housing estate next to the school has a good network of footpaths, giving quick access to the school. The school has access by footpaths and pavements on all sides and there&rsquo;s a zebra crossing on Duffield Road right outside the main entrance. The <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Chelmsford cycle map</a> also works for planning walking journeys.</p>

		<h2>Cycling routes</h2>
		<p>Many of the short-cuts described for walkers work for cyclists too. The <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Chelmsford cycle map</a> shows the best cycle routes both near the school and beyond.</p>

		<h2>Park &amp; Ride</h2>
		<p><a href="https://www.essexhighways.org/Transport-and-Roads/Getting-Around/Bus/Park-and-Ride.aspx">Park &amp; Ride at Chelmsford</a> could help you on your journey.</p>

		<h2>Bus routes</h2>
		<p>There are plenty of buses which connect the school with other parts of Great Baddow, as well as Galleywood on the edge of Chelmsford. A number of buses go right past the main entrance</p>

	</Layout>
)

export default GreatBaddowHigh