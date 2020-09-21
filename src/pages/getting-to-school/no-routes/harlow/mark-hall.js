import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V02_HarlowMarkHall.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const MarkHallAcademy = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/harlow"
			one="Schools in Harlow"
			two="Mark Hall Academy" />
	
		<h1>Mark Hall Academy</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Mark Hall Academy" title="A map showing cycle and walking routes to and from Mark Hall Academy" />
		<h2>Getting to and from Mark Hall Academy</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://mha.attrust.org.uk/">Mark Hall Academy</a><br/>
		First Avenue<br/>
		Harlow<br/>
		Essex<br/>
		CM17 9LR</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late.</p>
		<h2>Walking routes</h2>
		<p>The academy and surrounding area is very well served by footpaths and short-cuts. There are many footpaths cutting through the housing estates and an especially wide pavement at the front of the academy. An underpass helps pedestrians cross First Avenue safely.</p>
		<p>A number of <a href="https://www.harlow.gov.uk/parking/car-parks">Harlow Council car parks</a> allow you to park your car before walking the remaining distance. A free ticket valid for an hour must be displayed, otherwise a fine will be issued.</p>
		<h2>Cycling routes</h2>
		<p>As with walking, Harlow is well designed for cycling. First Avenue, directly outside the academy has a line on the wide pavement separating cyclists and walkers. <a href="https://www.sustrans.org.uk/find-a-route-on-the-national-cycle-network/route-1">National Cycle Network Route 1</a> passes from east to west through Harlow, and passes through Old Harlow around 250 metres from the academy. The academy features on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Harlow cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>As First Avenue is one of the main roads into Harlow, a large number of buses go past the academy. Some stops have shelter and seating, and shortly after passing the academy the road has a bus-only lane, meaning you can drive past static car traffic.</p>
		<h2>Train Routes</h2>
		<p>It’s less than a mile walk to <a href="https://www.greateranglia.co.uk/travel-information/station-information/hwm">Harlow Mill train station</a>, heading through Old Harlow. The station is on the London to Cambridge line and will suit students living near any of its stations. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some academies.</p>
	</Layout>
)

export default MarkHallAcademy