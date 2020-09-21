import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2S_RouteFinal_V01_BasildonBasildonUpperAcademy.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const BasildonUpper = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/basildon"
			one="Schools in Basildon"
			two="Basildon Upper Academy" />
	
		<h1>Basildon Upper Academy</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Basildon Upper Academy" title="A map showing cycle and walking routes to and from Basildon Upper Academy" />
		<h2>Getting to and from Basildon Upper Academy</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.basildonacademies.org.uk/">Basildon Upper Academy</a><br/>
		Wickford Avenue<br/>
		Pitsea<br/>
		Basildon<br/>
		Essex<br/>
		SS13 3HL</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school or college.</p>
		<h2>Walking routes</h2>
		<p>The academy  is very well served by footpaths and short-cuts. The estate surrounding the academy has a large number of footpaths, meaning you’ll always travel a shorter distance walking between two points than if you drove. A bit further afield, towards the town centre and the Lower Academy, there’s a bridge and an underpass to cross the busy St Mayne. There’s also a zebra crossing right outside the school on Wickford Avenue.</p>
		<h2>Cycling routes</h2>
		<p>Basildon is well designed for cycling. The roads are fairly straight, providing good sight-lines. All the parts of the cycling network are shown on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Basildon cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>Directly outside the front of the school are bus stops in both directions. Routes join the school and areas of Vange and Pitsea  to the town centre. The stops both have raised kerbs to help with getting on and off.</p>
	</Layout>
)

export default BasildonUpper