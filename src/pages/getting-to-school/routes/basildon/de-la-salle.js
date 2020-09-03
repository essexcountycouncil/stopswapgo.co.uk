import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_BasildonDeLaSalle.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const DeLaSalle = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/basildon"
			one="Schools in Basildon"
			two="De La Salle School" />
	
		<h1>De La Salle School</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from De La Salle School" title="A map showing cycle and walking routes to and from De La Salle School" />
		<h2>Getting to and from De La Salle School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.dlsbasildon.org/">De La Salle School</a><br/>
		Ghyllgrove<br/>
		Basildon<br/>
		Essex<br/>
		SS14 2LA</p>
		<h2>Heavy traffic zone</h2>
		<p>The school is very well served by footpaths and short-cuts. The school is almost completely hidden from any roads, with a footpath heading right down the front of the main building. The neighbouring estates are full of footpaths enabling walkers to cut between houses. There’s an <a href="https://www.google.co.uk/maps/@51.5818282,0.4623109,17.36z/data=!5m1!1e3">underpass for walkers</a> to cross the busy A1235.</p>
		<h2>Walking routes</h2>
		<p>The academy  is very well served by footpaths and short-cuts. As well as the usual alleys joining up streets and closes, there’s also a pedestrian bridge over the busy Broadmayne along one side of the school. The pavements are nice and wide, and the nearby roads have both pelican and zebra crossings.</p>
		<h2>Cycling routes</h2>
		<p>Basildon is well designed for cycling. The whole of the A1235 to the north side of the school site has an off-road cycle path on the far side of the road, and <a href="https://www.google.co.uk/maps/@51.5818282,0.4623109,17.36z/data=!5m1!1e3">the underpass</a> allows riders to cross safely. The section of Ghyllgrove, the road to the school, approaching the back gates also has an off-road cycle path alongside it. All these parts of the network are shown on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Basildon cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>Plenty of bus services travel along Whitmore Way, less than half a mile walk from the school, and connect to Basildon town centre and the bus station. There’s also a <a href="https://www.google.co.uk/maps/@51.5819028,0.4624315,17z/data=!5m1!1e3">slip road from the A1235</a> if you’re travelling west, reserved for buses and cyclists, which allows rapid access into the rear entrance of the school.</p>
	</Layout>
)

export default DeLaSalle