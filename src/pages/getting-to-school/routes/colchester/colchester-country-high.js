import React from "react"
import { Link } from 'gatsby'
import map from "./G2S School Page - Col County High - Map.png"
import Layout from "../../../../layout/layout-h2s-with-newsletter-no-banner"

const ColchesterCountryHigh = () => (
	<Layout>
	
		<h1>Colchester County High School for Girls</h1>
		<img src={map} />

		<h2>Getting to and from Colchester County High School for Girls</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead </p>

		<h2>Address</h2>
		<p><a href="https://www.cchsg.com/">Colchester County High School for Girls</a>,<br/>
		Norman Way<br/>
		Colchester<br/>
		Essex<br/>
		CO3 3US
		</p>

		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>

		<h2>Walking routes</h2>
		<p>There’s lots of footpaths around Colchester County High School and its neighbouring schools. They’re a perfect way to dodge the traffic. The Norman Way route between Lexden Road and Shrub End Road provides an ideal sneaky short-cut for walkers.</p>

		<h2>Cycling routes</h2>
		<p>Norman Way, as described above, is also a local cycle way.. It links with <a href="https://www.sustrans.org.uk/find-a-route-on-the-national-cycle-network/route-1/">National Cycle Network route 1</a> into central Colchester, as well as other off-road routes through <a href="https://www.colchester.gov.uk/info/cbc-article/?catid=country-parks-and-local-nature-reserves&amp;amp;id=KA-01615">Hilly Fields nature reserve</a>. Those same routes also head south of the school site, joining up with many residential areas,. <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">The Colchester cycle map</a> can show you other routes which may help.</p>

		<h2>Park &amp; Ride</h2>
		<p><a href="https://www.essexhighways.org/Transport-and-Roads/Getting-Around/Bus/Park-and-Ride.aspx">Park &amp; Ride at Colchester</a> could help you on your journey. </p>

		<h2>Bus routes</h2>
		<p>Lexden Road and Shrub End Road/Maldon Road are both major bus routes into and out of central Colchester. They and border the school to the north and south. Stops on both roads have waiting shelters and seats. The stops link to villages just outside Colchester like Marks Tey, Layer-de-la-Haye and beyond.</p>

		<h2>Train routes</h2>
		<p>Colchester County High School is about a mile and a half walk from Colchester Town train station, which provides quick access to the main East Anglian line and places like Manningtree, Witham, Clacton and Harwich-Dovercourt. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools, chat to staff about this.</p>

	</Layout>
)

export default ColchesterCountryHigh