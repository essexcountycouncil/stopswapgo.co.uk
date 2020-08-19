import React from "react"
import { Link } from 'gatsby'
import map from "./G2S_CHELM_KEGS - map.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const KingEdward = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/chelmsford"
			one="Schools in Chelmsford"
			two="King Edward VI Grammar School" />
	
		<h1>King Edward VI Grammar School</h1>
		<img src={map} />

		<h2>Getting to and from King Edward VI Grammar School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>

		<h2>Address</h2>
		<p><a href="https://www.kegs.org.uk/transport2/707944.html">King Edward VI Grammar School</a>,<br/>
		Broomfield Road<br/>
		Chelmsford<br/>
		Essex<br/>
		CM1 3SX
		</p>


		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>

		<h2>Walking routes</h2>
		<p>There&rsquo;s a lot of footpaths around <a href="https://www.kegs.org.uk/transport2/707944.html">King Edward VI Grammar School</a> (KEGS). They&rsquo;re a perfect way to avoid traffic. From Swiss Avenue to Maltese Road, around the back of the school, or down the back of the Avenues, there&rsquo;s plenty of options for walking.</p>

		<h2>Cycling routes</h2>
		<p>Broomfield Road, where the school is, has cycle lanes on the road in both directions nearby. There are also lots of much quieter roads you can use, allowing you to bypass the congestion. The walking routes can also be used by cyclists. <a href="https://www.sustrans.org.uk/find-a-route-on-the-national-cycle-network/route-1/">National Cycle Network route 1</a> follows the river not far from the school, joining central Chelmsford to Writtle and Chelmer Village.</p>

		<h2>Park &amp; Ride</h2>
		<p><a href="https://www.essexhighways.org/Transport-and-Roads/Getting-Around/Bus/Park-and-Ride.aspx">Park &amp; Ride at Chelmsford</a> could help you on your journey.</p>

		<h2>Bus routes</h2>
		<p>Being on one of the main routes into Chelmsford, KEGS benefits from being close to bus services from Broomfield, the Walthams, Great Leighs and Braintree. For those going elsewhere <a href="https://www.openstreetmap.org/node/474893111">Chelmsford bus station</a> is about a 5 minute walk away.</p>

		<h2>Train routes</h2>
		<p><a href="https://www.nationalrail.co.uk/stations_destinations/CHM.aspx">Chelmsford train station</a> has trains to and from Shenfield, Ingatestone, Witham and Colchester, amongst others. Lots of KEGS students get the train to school. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools, chat to staff about this.</p>
	</Layout>
)

export default KingEdward