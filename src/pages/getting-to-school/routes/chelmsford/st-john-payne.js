import React from "react"
import { Link } from 'gatsby'
import map from "./G2S_CHELM_SJP - map.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const StJohnPayne = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/chelmsford"
			one="Schools in Chelmsford"
			two="St John Payne Catholic School" />
	
		<h1>St John Payne Catholic School</h1>
		<img src={map} />

		<h2>Getting to and from St John Payne Catholic School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>

		<h2>Address</h2>
		<p><a href="https://www.sjp.essex.sch.uk/">St John Payne Catholic School</a>,<br/>
		Patching Hall Lane<br/>
		Chelmsford<br/>
		Essex<br/>
		CM1 4BS 
		</p>


		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>

		<h2>Walking routes</h2>
		<p>The housing estate next to the school has lots of footpaths giving quick access to the school. The major junction nearby, between Patching Hall Lane and Broomfield Road, has four-way lights, with pelican crossings to help pedestrians. Patching Hall Lane and Partridge Avenue, alongside the school, have road islands, helping people cross safely. Speed bumps also help make the road safer.</p>

		<h2>Cycling routes</h2>
		<p>Lots of the pavements nearby are split in two lanes, for walkers and cyclists. The main entrance to the school has a cycle lane on the school side. <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">The Chelmsford cycle map</a> provides information on this route, both near the school and beyond.</p>

		<h2>Park &amp; Ride</h2>
		<p><a href="https://www.essexhighways.org/Transport-and-Roads/Getting-Around/Bus/Park-and-Ride.aspx">Park &amp; Ride at Chelmsford</a> could help you on your journey.</p>

		<h2>Bus routes</h2>
		<p>Being so close to Broomfield Road helps with buses, as it’s a major corridor into town from Braintree and the villages to the north. There are lots of bus stops very close to the school.</p>

	</Layout>
)

export default StJohnPayne