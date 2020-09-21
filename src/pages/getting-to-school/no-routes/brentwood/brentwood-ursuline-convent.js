import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_BrentwoodBrentwoodUrsuline.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const BecketKeys = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/brentwood"
			one="Schools in Brentwood"
			two="Brentwood Ursuline Convent High School" />
	
		<h1>Brentwood Ursuline Convent High School</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Brentwood Ursuline Convent High School" title="A map showing cycle and walking routes to and from Brentwood Ursuline Convent High School" />
		<h2>Getting to and from Brentwood Ursuline Convent High School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="http://www.brentwoodursuline.co.uk/school-life/transport">Brentwood Ursuline Convent High School</a><br/>
		Queens Road<br/>
		Brentwood<br/>
		Essex<br/>
		CM14 4EX</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>
		<h2>Walking routes</h2>
		<p>The school is very near to the centre of Brentwood and quite well served by footpaths and short-cuts. There are pavements on both sides of Queens Road, as well as zebra crossings and pelican crossings nearby in both directions.</p>
		<h2>Cycling routes</h2>
		<p>Although there are no formal cycle routes near to the school, Queens Road has good sight-lines for cyclists. The <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Brentwood cycle map</a> will cover other areas of the town so you can easily find other routes to get to school.</p>
		<h2>Bus routes</h2>
		<p>There are no public bus routes which go directly past the school on Queens Road. However, the front of the school is only a quarter of a mile from both the high street and Ingrave Road, which have plenty of services connecting Brentwood with Shenfield, Ingatestone, Chelmsford, Ongar and north-east London. The stops are well-placed, with waiting shelters and seats.</p>
		<h2>Train routes</h2>
		<p>The school is less than 15 minutes walk from Brentwood station. The route to Brentwood station from the school has full pavements on quiet residential roads, with no major roads to cross. Brentwood links up with  Shenfield station, a very short ride away, which is a major hub for trains in Essex. It has quick, direct lines to Chelmsford, Billericay and parts of north-east London. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools.</p>


	</Layout>
)

export default BecketKeys