import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_HarlowBMATStemAcademy.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const BmatStemAcademy = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/harlow"
			one="Schools in Harlow"
			two="BMAT STEM Academy" />
	
		<h1>BMAT STEM Academy</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from BMAT STEM Academy" title="A map showing cycle and walking routes to and from BMAT STEM Academy" />
		<h2>Getting to and from BMAT STEM Academy</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.bmatstemacademy.org/">BMAT STEM Academy</a><br/>
		Velizy Avenue<br/>
		Harlow<br/>
		Essex<br/>
		CM20 3EZ</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late.</p>
		<h2>Walking routes</h2>
		<p>The academy and surrounding area is very well served by footpaths and short-cuts. There are many footpaths cutting through the housing estates and separate walkways alongside the main roads into town. There is an underpass under Velizy Avenue from the town centre.</p>
		<p>A number of <a href="https://www.harlow.gov.uk/parking/car-parks">Harlow Council car parks</a> allow you to park your car before walking the remaining distance.. A free ticket valid for an hour must be displayed, otherwise a fine will be issued.</p>
		<h2>Cycling routes</h2>
		<p>As with walking, Harlow is well designed for cycling. Many of the main roads mentioned for walking have fully separated cycleways, providing the opportunity to glide past the traffic. <a href="https://www.sustrans.org.uk/find-a-route-on-the-national-cycle-network/route-1">National Cycle Network Route 1</a> passes from east to west through Harlow, just a few hundred metres from the school. The academy features on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Harlow cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>A number of buses pass through the town’s bus station and stop opposite the academy on Velizy Avenue. As this is main hub for buses in Harlow, it’s ideally placed to benefit the academy. It has shelter and seating, as well as interactive screens telling you how long before the next bus service will arrive.</p>
		<h2>Train Routes</h2>
		<p><a href="https://www.greateranglia.co.uk/travel-information/station-information/hwn">Harlow train station</a> is approximately a mile away. The station is on the London to Cambridge line and will suit students living near any of its stations. Greater Anglia offer discounts on train travel for students at some academies.</p>
	</Layout>
)

export default BmatStemAcademy