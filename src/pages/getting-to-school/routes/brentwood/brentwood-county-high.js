import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_BrentwoodBecketKeys.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const BecketKeys = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/brentwood"
			one="Schools in Brentwood"
			two="Brentwood County High School" />
	
		<h1>Brentwood County High School</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Brentwood County High School" title="A map showing cycle and walking routes to and from Brentwood County High School" />
		<h2>Getting to and from Brentwood County High School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.bchs.essex.sch.uk/">Brentwood County High School</a><br/>
		Shenfield Common<br/>
		Seven Arches Road<br/>
		Brentwood<br/>
		Essex<br/>
		CM14 4JF</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>
		<h2>Walking routes</h2>
		<p>The school is near the centre of Brentwood and quite well served by footpaths and short-cuts. There are pavements on both sides of Ingrave Road and Seven Arches Road approaching the school, as well as a zebra crossing right outside the school. The school entrance is well back from the road.</p>
		<h2>Cycling routes</h2>
		<p>There is a short route separated from the road approaching the school from Ingrave Road and Seven Arches Road. This benefits cyclists as there are good sightlines for road safety. The school features on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Brentwood cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>There are no public bus routes on Seven Arches Road but there are plenty on Ingrave Road, just a couple of hundred metres from the school gate. The front of the school is only a quarter of a mile from the high street, which has lots of services connecting Brentwood with Shenfield, Ingatestone, Chelmsford, Ongar and north-east London. The stops are well-placed, with waiting shelters and seats.</p>
		<h2>Train routes</h2>
		<p>The school is well situated and less than 15 minutes’ walk to Brentwood station away almost all on quiet residential roads.</p>
		<p>Brentwood has trains to  the main line at Shenfield station, a very short ride away, which is a major hub for trains in Essex. It has quick, direct lines to Chelmsford, Billericay and parts of north-east London. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools.</p>

	</Layout>
)

export default BecketKeys