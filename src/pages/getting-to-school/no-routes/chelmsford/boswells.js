import React from "react"
import { Link } from 'gatsby'
import map from "./G2S_CHELM_Boswells - map.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const Boswells = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/chelmsford"
			one="Schools in Chelmsford"
			two="The Boswells School" />
	
		<h1>The Boswells School</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Boswells School" title="A map showing cycle and walking routes to and from Boswells School" />

		<h2>Getting to and from Boswells School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>

		<h2>Address</h2>
		<p><a href="https://www.boswells-school.com/">The Boswells School</a>,<br/>
		Burnham Road<br/>
		Chelmsford<br/>
		Essex<br/>
		CM1 6LY
		</p>


		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>

		<h2>Walking routes</h2>
		<p>Springfield has lots of walking options, with footpaths around The Boswells. From New Bowers Way, across Pump Lane will get you close to the school gate.</p>

		<h2>Cycling routes</h2>
		<p>As with walking, the same routes are available for cyclists, making it the quickest way for many students to get to school. It&rsquo;s also not far from the Bunny Walks, an off-road route providing easy access into the centre of Chelmsford. The <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Chelmsford cycle map</a> provides information on the cycle network, both near the school and beyond.</p>

		<h2>Park &amp; Ride</h2>
		<p><a href="https://www.essexhighways.org/Transport-and-Roads/Getting-Around/Bus/Park-and-Ride.aspx">Park &amp; Ride at Chelmsford</a> could help you on your journey.</p>

		<h2>Bus routes</h2>
		<p>The Boswells is close to major roads through Springfield. This gives everyone easy access to buses into town, without having them navigate the narrower roads around the site. Some people take buses into town which avoids the car traffic on Chelmer Valley Road.</p>

		<h2>Train routes</h2>
		<p><a href="https://www.nationalrail.co.uk/stations_destinations/CHM.aspx">Chelmsford train station</a> has trains to and from Shenfield, Ingatestone, Witham and Colchester, amongst others. Lots of Boswells students get the train to school. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools, chat to staff about this.</p>

	</Layout>
)

export default Boswells