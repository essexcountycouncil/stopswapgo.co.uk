import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2S_RouteFinal_V01_ClactonClactonCoastalAcademy.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const ClactonAcademy = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/clacton"
			one="Schools in Clacton"
			two="Clacton Coastal Academy" />
	
		<h1>Clacton Coastal Academy</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Clacton Coastal Academy" title="A map showing cycle and walking routes to and from Clacton Coastal Academy" />
		<h2>Getting to and from Clacton Coastal Academy</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://sites.google.com/aetinet.org/clacton-coastal-academy">Clacton Coastal Academy</a><br/>
		Academy<br/>
		Pathfields Road<br/>
		Clacton-on-Sea<br/>
		Essex<br/>
		CO15 3JL</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>
		<h2>Walking routes</h2>
		<p>There’s lots of footpaths around the academy, a perfect way to dodge the traffic and take a short-cut. The nearby estate has pedestrian cut-throughs. There’s a well-lit footpath extending to the north of the school which connects directly to the housing estates in that direction.</p>
		<h2>Cycling routes</h2>
		<p>The off-road footpath to the north of the academy also has a lane for cyclists, meaning those students coming from the north by bike get a massive short-cut. This path also runs straight past the local BMX track.</p>
		<h2>Bus routes</h2>
		<p>The academy is not far from the centre of Clacton, so lots of bus services pass nearby on their way into town. The bus stops at both St Osyth Road and Old Road are less than half a mile away.</p>
		<h2>Train routes</h2>
		<p>The academy is under a mile from Clacton train station, which has regular services to Colchester, taking in Thorpe-le-Soken, Weeley and Great Bentley. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools, chat to staff about this.</p>
	</Layout>
)

export default ClactonAcademy