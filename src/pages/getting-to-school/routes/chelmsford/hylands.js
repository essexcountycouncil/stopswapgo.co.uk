import React from "react"
import { Link } from 'gatsby'
import map from "./G2S_CHELM_Hylands - map.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const Hylands = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/chelmsford"
			one="Schools in Chelmsford"
			two="Hylands School" />
	
		<h1>Hylands School</h1>
		<img src={map} />

		<h2>Getting to and from Hylands School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>

		<h2>Address</h2>
		<p><a href="https://www.hylands-tkat.org/parents/student-transport/">Hylands School</a>,<br/>
		Writtle<br/>
		Chelmsford<br/>
		Essex<br/>
		CM1 3ET
		</p>


		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>

		<h2>Walking routes</h2>
		<p>The housing estate next to the school has a good network of footpaths, enabling quick access to the school. There are also footpaths at the back of the school which link to the popular riverside route into Chelmsford.</p>

		<h2>Cycling routes</h2>
		<p>The riverside route mentioned for walkers is also part of <a href="https://www.sustrans.org.uk/find-a-route-on-the-national-cycle-network/route-1/">the National Cycle Network route 1</a>. This is a very popular route to ride into town. There are tracks that link directly to the school.<a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">The Chelmsford cycle map</a> provides information on this route, both near the school and beyond.</p>

		<h2>Park &amp; Ride</h2>
		<p><a href="https://www.essexhighways.org/Transport-and-Roads/Getting-Around/Bus/Park-and-Ride.aspx">Park &amp; Ride at Chelmsford</a> could help you on your journey.</p>

		<h2>Bus routes</h2>
		<p>Plenty of buses pass Hylands School, linking up central Chelmsford with the villages to the west. There are <a href="https://www.google.co.uk/maps/place/Hylands+School/@51.7277438,0.4433804,17.83z/data=!4m5!3m4!1s0x47d8ebb2472fc627:0xbffc66e7347d819!8m2!3d51.7284889!4d0.4415788">bus stops outside the front of the school</a>.</p>

	</Layout>
)

export default Hylands