import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SRouteFinal_V01_BasildonBasildonJamesHornsby.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const JamesHornsby = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/basildon"
			one="Schools in Basildon"
			two="James Hornsby School, The" />
	
		<h1>James Hornsby School, The</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from James Hornsby School, The" title="A map showing cycle and walking routes to and from James Hornsby School, The" />
		<h2>Getting to and from James Hornsby School, The</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.jameshornsby.essex.sch.uk/index.asp">James Hornsby School, The</a><br/>
		Leinster Road<br/>
		Laindon<br/>
		Basildon<br/>
		Essex<br/>
		SS15 5NX</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school or college.</p>
		<h2>Walking routes</h2>
		<p>The school is  very well served by footpaths and short-cuts. The estates near the school are full of footpaths cutting through them, and the two roads along the sides of the site have  pavements on either side and pelican crossings. A few hundred metres away is a pedestrian bridge, allowing walkers to cross St Nicholas Lane safely.</p>
		<h2>Cycling routes</h2>
		<p>Basildon is well designed for cycling. Alongside the school on St Nicholas Lane is an off-road cycle path, with a line separating it from the walking route. One of the neighbouring primary schools has a cycle path down one side, connecting James Hornsby School  with plenty more residential areas.The speed bumps along Leinster Road have gullies on the edge, meaning cyclists don’t have to go over the bump. All these parts of the network are shown on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Basildon cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>No buses travel along Leinster Road, but there are frequent buses into <a href="https://www.google.co.uk/maps/place/Basildon+Town+Centre/@51.5687131,0.4578608,18.29z/data=!4m5!3m4!1s0x47d8c6905d6e9c0f:0x3e4fef7776e1fe6c!8m2!3d51.5688214!4d0.4590547!5m1!1e3">Basildon town centre</a> from the bus station on St Nicholas Lane, right next to the school.</p>
	</Layout>
)

export default JamesHornsby