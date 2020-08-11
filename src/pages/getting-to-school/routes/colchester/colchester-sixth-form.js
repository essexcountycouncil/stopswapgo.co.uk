import React from "react"
import { Link } from 'gatsby'
import map from "./G2S School Page - Col 6th - Map.png"
import Layout from "../../../../layout/layout-h2s-with-newsletter-no-banner"

const ColchesterSixthForm = () => (
	<Layout>

		<h1>Colchester Sixth Form College</h1>
		<img src={map} />

		<h2>Getting to and from Colchester Sixth Form College</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>

		<h2>Address</h2>
		<p><a href="https://www.colchsfc.ac.uk/about/">Colchester Sixth Form College</a>,<br/>
		North Hill<br/>
		Colchester<br/>
		Essex<br/>
		CO1 1SN
		</p>

		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>

		<h2>Walking routes</h2>
		<p>There’s lots of footpaths around Colchester Sixth Form which means getting there by cycling and walking is easy. The college has nearby underpasses, which mean you don’t have to cross the busy main roads, plus the footbridge over Balkerne Hill.</p>

		<h2>Cycling routes</h2>
		<p>The college is very close to plenty of cycle routes, with <a href="https://www.sustrans.org.uk/find-a-route-on-the-national-cycle-network/route-1/">National Cycle Network route 1</a> passing along the high street about 100 metres from the front entrance. This links up with Colchester Town train station and the riverside cycleway, but also the off-road bridge over the busy Balkerne Hill provides good access to <a href="https://www.colchester.gov.uk/info/cbc-article/?catid=country-parks-and-local-nature-reserves&amp;amp;id=KA-01615">Hilly Fields nature reserve</a> and the west of Colchester. </p>

		<h2>Park &amp; Ride</h2>
		<p><a href="https://www.essexhighways.org/Transport-and-Roads/Getting-Around/Bus/Park-and-Ride.aspx">Park &amp; Ride at Colchester</a> could help you on your journey. </p>

		<h2>Bus routes</h2>
		<p>The college is a very short walk from many bus stops for buses coming into Colchester. North Hill and the High Street are right on its doorstep. Colchester bus station is less than half a mile’s walk through the centre of town, which is mostly pedestrianised.</p>

		<h2>Train routes</h2>
		<p>The college is under a mile’s walk from <a href="https://www.nationalrail.co.uk/stations/COL/details.html">the mainline Colchester station</a>. This provides quick access via the main East Anglian line to places like Manningtree, Witham, Marks Tey and Kelvedon. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools, chat to staff about this.</p>

	</Layout>
)

export default ColchesterSixthForm