import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_BraintreeTabor.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const NotleyHigh = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/braintree"
			one="Schools in Braintree"
			two="Tabor Academy" />
	
		<h1>Tabor Academy</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Becket Keys School" title="A map showing cycle and walking routes to and from Becket Keys School" />
		<h2>Getting to and from Tabor Academy</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://taboracademy.co.uk/school/about-tabor/school-transport/">Tabor Academy</a><br/>
		Panfield Lane<br/>
		Braintree<br/>
		Essex<br/>
		CM7 5XP</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>
		<h2>Walking routes</h2>
		<p>Tabor Academy has a zebra crossing and pavements outside which offer easy access to Braintree’s great network of footpaths. There are footpaths through the nearby estates and paths as well as crossing islands at mini roundabouts on the half-mile walk to Braintree town centre.</p>
		<h2>Cycling routes</h2>
		<p>There are dedicated cycle paths through parks near to Tabor Academy. Just under a mile away is the Flitch Way, route 16 of the National Cycle Network, which is an off-road cycle path on a disused railway line. The <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Braintree cycle map</a> provides information on cycle paths near the school.</p>
		<h2>Bus routes</h2>
		<p>The bus stops on Panfield Lane are just a few hundred metres from Tabor Academy. One of the services runs from many of the small villages to the north of Braintree to the town centre, passing Tabor Academy on the way. There are also bus stops on Rayne Road which have services to Rayne, Dunmow and smaller villages. It’s less than a mile to Braintree bus station from Tabor Academy, where you can get to surrounding towns and villages as well as Chelmsford and Colchester.</p>
		<h2>Train routes</h2>
		<p><a href="https://www.nationalrail.co.uk/stations_destinations/BTR.aspx">Braintree train station</a> is one mile from Tabor Academy through the town centre. Hourly services provide good access to Cressing, White Notley and Witham. Greater Anglia offers <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools: chat to staff about this.</p>
	</Layout>
)

export default NotleyHigh