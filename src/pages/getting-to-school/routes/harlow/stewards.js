import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_HarlowStewardsAcademy.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const StewardsAcademy = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/harlow"
			one="Schools in Harlow"
			two="Stewards Academy" />
	
		<h1>Stewards Academy</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Stewards Academy" title="A map showing cycle and walking routes to and from Stewards Academy" />
		<h2>Getting to and from Stewards Academy</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.stewardsacademy.org/">Stewards Academy</a><br/>
		Parnall Road<br/>
		Harlow<br/>
		Essex<br/>
		CM18 7NQ</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late.</p>
		<h2>Walking routes</h2>
		<p>The academy and surrounding area is very well served by footpaths and short-cuts. As well as the usual alleys joining up streets and closes, there’s also a lit, tarmacked path running all the way down the west side of the academy site. Coming from the opposite direction there’s a zebra crossing on Parnall Road near to the junction with Southern Way.</p>
		<p>A number of <a href="https://www.harlow.gov.uk/parking/car-parks">Harlow Council car parks</a> allow you to park your car before walking the remaining distance.. A free ticket valid for an hour must be displayed, otherwise a fine will be issued.</p>
		<h2>Cycling routes</h2>
		<p>As with walking, Harlow is well designed for cycling. The lit, tarmacked path running all the way down the west side of the academy is split down the middle to allow for cyclists and walkers to travel safely alongside one another. The main school entrance on Parnall Road has chicanes for cars which allow bikes to pass through without giving way. All these parts of the network are shown on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Harlow cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>Parnall Road, despite being a suburban residential road, is quite well served by buses. Bus services run through Staple Tye and the area in the south-west on their way into Harlow town centre. A number of the stops nearby have shelter and seating. Closer into the centre of town there are plenty of main roads where the bus lane allows you to pass the traffic jams.</p>
	</Layout>
)

export default StewardsAcademy