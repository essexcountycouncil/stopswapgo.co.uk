import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_BraintreeAlecHunter.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const AlecHunter = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/braintree"
			one="Schools in Braintree"
			two="Alec Hunter Academy" />
	
		<h1>Alec Hunter Academy</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Alec Hunter Academy" title="A map showing cycle and walking routes to and from Alec Hunter Academy" />
		<h2>Getting to and from Alec Hunter Academy</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="http://www.alechunter.org/">Alec Hunter Academy</a><br/>
		Stubbs Lane<br/>
		Braintree<br/>
		Essex<br/>
		CM7 3NR</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school. </p>
		<h2>Walking routes</h2>
		<p>Alec Hunter Academy has a decent network of footpaths nearby. There are footpaths both north and south of the school which link Stubbs Lane, where the main school entrance is, to the busier Millennium Way. From there, you’ll find a split pathway for walkers and cyclists, which is protected from the road by grass and hedges. On Stubbs Lane, there are pavements on both sides, and the school has pedestrian entrance points which are separate from the vehicle gates.</p>
		<h2>Cycling routes</h2>
		<p>The off-road split pathway on Millennium Way provides a safe journey for cyclists to Braintree town centre. In the other direction, a cycle path through St George’s Field allows bike access to the eastern side of Braintree. Just over a mile along this cycle path is the Flitch Way, an off-road path along a disused railway line, also known as route 16 of the National Cycle Network. View all of these paths and more on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Braintree cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>There are bus stops with services in both directions outside Alec Hunter Academy. One of the services goes to many of the small villages between Braintree and Witham as well as Braintree town centre. Braintree bus station is just over a mile from the school and connects to villages and towns around Braintree, as well as to Chelmsford and Colchester.</p>
		<h2>Train routes</h2>
		<p>Alec Hunter Academy is just over half a mile from <a href="https://www.nationalrail.co.uk/stations/BTP/details.html">Braintree Freeport Station</a> if you walk through the retail village. Train services from Braintree Freeport Station run hourly to Cressing, White Notley and Witham. Greater Anglia offers <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools, chat to staff about this.</p>

	</Layout>
)

export default AlecHunter