import React from "react"
import { Link } from 'gatsby'
import map from "./G2S_CHELM_ChCH - map.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const ChelmsfordCountryHigh = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/chelmsford"
			one="Schools in Chelmsford"
			two="Chelmsford County High School for Girls" />
	
		<h1>Chelmsford County High School for Girls</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Chelmsford County High School for Girls" title="A map showing cycle and walking routes to and from Chelmsford County High School for Girls" />

		<h2>Getting to and from Chelmsford County High School for Girls</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>

		<h2>Address</h2>
		<p><a href="https://www.cchsg.com/">Chelmsford County High School for Girls</a>,<br/>
		Broomfield Road<br/>
		Chelmsford<br/>
		Essex<br/>
		CM1 1RW
		</p>


		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>

		<h2>Walking routes</h2>
		<p>There’s lots of footpaths around Chelmsford County High School which provide short-cuts to avoid the traffic. For example, walking down the back of the Avenues to the north of the school.</p>

		<h2>Cycling routes</h2>
		<p>Cycle lanes are available in both directions near Broomfield Road. There are also lots of much quieter roads you can use. <a href="https://www.sustrans.org.uk/find-a-route-on-the-national-cycle-network/route-1/">National Cycle Network route 1</a> follows the river not far from the school and joins central Chelmsford to Writtle and Chelmer Village.</p>

		<h2>Park &amp; Ride</h2>
		<p><a href="https://www.essexhighways.org/Transport-and-Roads/Getting-Around/Bus/Park-and-Ride.aspx">Park &amp; Ride at Chelmsford</a> could help you on your journey.</p>

		<h2>Bus routes</h2>
		<p>Broomfield Road is one of the main routes into Chelmsford, meaning Chelmsford County High School is well served for buses. Services from Broomfield, the Walthams, Great Leighs and Braintree have stops near the school. <a href="https://www.openstreetmap.org/node/474893111"> Chelmsford bus station is about 5 minute walk</a>.</p>

		<h2>Train routes</h2>
		<p><a href="https://www.nationalrail.co.uk/stations_destinations/CHM.aspx">Chelmsford train station</a> has trains to and from Shenfield, Ingatestone, Witham and Colchester, amongst others. Lots of County High students get the train to school, which is only half a mile&rsquo;s walk from the station. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools, chat to staff about this.</p>

	</Layout>
)

export default ChelmsfordCountryHigh