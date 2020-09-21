import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_BasildonBasildonLowerAcademy.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const BasildonLower = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/basildon"
			one="Schools in Basildon"
			two="Basildon Lower Academy" />
	
		<h1>Basildon Lower Academy</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Basildon Lower Academy" title="A map showing cycle and walking routes to and from Basildon Lower Academy" />
		<h2>Getting to and from Basildon Lower Academy</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.basildonacademies.org.uk/">Basildon Lower Academy</a><br/>
		Timberlog Close<br/>
		Basildon<br/>
		Essex<br/>
		SS14 1UX</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school or college.</p>
		<h2>Walking routes</h2>
		<p>The academy  is very well served by footpaths and short-cuts. As well as the usual alleys joining up streets and closes, there’s also a pedestrian bridge over the busy Broadmayne along one side of the school. The pavements are nice and wide, and the nearby roads have both pelican and zebra crossings.</p>
		<h2>Cycling routes</h2>
		<p>Basildon is well designed for cycling. There are plenty of off-road cycle routes connecting the school to housing estates and the town centre, and lots of cycle-friendly roads too. All these parts of the network are shown on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Basildon cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>The Lower Academy is well connected by bus to Basildon town centre,areas like Vange and Pitsea, as well as  Benfleet and Wickford. There are <a href="https://www.google.co.uk/maps/place/Barstable+School/@51.5741584,0.4877485,17z/data=!4m5!3m4!1s0x47d8c43c508cee03:0xfe6f0307469e07f!8m2!3d51.5738832!4d0.4878851">bus stops on both sides of Broadmayne</a> right next to the school, with the one on the far side easily accessed via a footbridge.</p>
	</Layout>
)

export default BasildonLower