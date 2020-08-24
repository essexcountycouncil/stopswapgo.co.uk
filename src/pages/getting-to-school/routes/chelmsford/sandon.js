import React from "react"
import { Link } from 'gatsby'
import map from "./G2S_CHELM_Sandon - map.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const Sandon = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/chelmsford"
			one="Schools in Chelmsford"
			two="The Sandon School" />
	
		<h1>The Sandon School</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from The Sandon School" title="A map showing cycle and walking routes to and from The Sandon School" />

		<h2>Getting to and from Sandon School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>

		<h2>Address</h2>
		<p><a href="https://www.sandon.essex.sch.uk/504/school-transport">The Sandon School</a>,<br/>
		Molrams Lane<br/>
		Sandon<br/>
		Chelmsford<br/>
		Essex<br/>
		CM2 7AQ 
		</p>


		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>

		<h2>Walking routes</h2>
		<p>Molrams Lane is opposite the school and has an excellent foot/cycle path called the Bringey. This provides excellent direct off-road access to large parts of Great Baddow, heading underneath the Baddow Bypass. There&rsquo;s a zebra crossing at either end, on Church Road in Baddow and at Molrams Lane outside the school. <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">The Chelmsford cycle map</a> also helps plan walking journeys.</p>

		<h2>Cycling routes</h2>
		<p>The Bringey, linking the school to the centre of Great Baddow, provides safe cycle access to the school from many neighbouring residential areas. There are many other short-cuts, for walkers and cyclists. <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">The Chelmsford cycle map</a> provides information on the full network, both near the school and beyond.</p>

		<h2>Park &amp; Ride</h2>
		<p><a href="https://www.essexhighways.org/Transport-and-Roads/Getting-Around/Bus/Park-and-Ride.aspx">Park &amp; Ride at Chelmsford</a> could help you on your journey.</p>

		<h2>Bus routes</h2>
		<p>A <a href="https://www.google.co.uk/maps/place/Molrams+Lane/@51.7199439,0.5171866,17.65z/data=!4m5!3m4!1s0x47d8e9a95cd40663:0xdd17c7dbca3d8058!8m2!3d51.7203061!4d0.5160677">large number of buses stop</a> within a few hundred metres of the school. These come from Maldon and South Woodham, pass along Maldon Road and through lots of villages. The stops have shelters and raised kerbs to help when waiting and boarding.</p>

	</Layout>
)

export default Sandon