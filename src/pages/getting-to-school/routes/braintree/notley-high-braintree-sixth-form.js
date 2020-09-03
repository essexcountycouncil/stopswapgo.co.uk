import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V02_BraintreeNotleySixform.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const NotleyHigh = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/braintree"
			one="Schools in Braintree"
			two="Notley High School and Braintree Sixth Form" />
	
		<h1>Notley High School and Braintree Sixth Form</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Notley High School and Braintree Sixth Form" title="A map showing cycle and walking routes to and from Notley High School and Braintree Sixth Form" />
		<h2>Getting to and from Notley High School and Braintree Sixth Form</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.notleyhigh.com/">Notley High School and Braintree Sixth Form</a><br/>
		Notley Road<br/>
		Braintree<br/>
		Essex<br/>
		CM7 1WY</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school. </p>
		<h2>Walking routes</h2>
		<p>Notley High School and Braintree Sixth Form has a zebra crossing right outside and there’s an adjacent footbridge over the A120. These help students stay safe and avoid traffic on their walk from Great Notley and outlying villages.</p>
		<h2>Cycling routes</h2>
		<p>The footbridge over the A120 is ramped and split in half for walkers and cyclists. On the other side of the bridge from the school and college, the cycle path goes through Great Notley to route 16 of the National Cycle Network and the off-road Flitch Way, which runs along a disused railway line. The <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Braintree cycle map</a> provides information on the cycle network, both near the school and beyond.</p>
		<h2>Bus routes</h2>
		<p>Notley High School and Braintree Sixth Form has bus stops in both directions right outside which are serviced by lots of bus routes. Some go into town, and others go to nearby estates and villages. Braintree bus station is just over a mile from the school and sixth-form college and offers connections to towns and villages around Braintree as well as Chelmsford and Colchester.</p>
		<h2>Train routes</h2>
		<p>Notley High School and Braintree Sixth Form is less than a mile from <a href="https://www.nationalrail.co.uk/stations/BTR/details.html">Braintree train station</a>, where services to Cressing, White Notley and Witham run hourly. Greater Anglia offers <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools, chat to staff about this.</p>
	</Layout>
)

export default NotleyHigh