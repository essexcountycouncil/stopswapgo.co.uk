import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_ShenfieldShenfield.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const ShenfieldHigh = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/shenfield"
			one="Schools in Shenfield"
			two="Shenfield High School" />
	
		<h1>Shenfield High School</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Shenfield High School" title="A map showing cycle and walking routes to and from Shenfield High School" />
		<h2>Getting to and from Shenfield High School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="http://www.shenfield.essex.sch.uk/">Shenfield High School</a><br/>
		Alexander Lane<br/>
		Shenfield<br/>
		Essex<br/>
		CM15 8RY</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school.</p>
		<h2>Walking routes</h2>
		<p>The roads for students to walk to school all have pavements on both sides. There are plenty of crossing islands on Chelmsford Road, making it safer for pedestrians.</p>
		<h2>Cycling routes</h2>
		<p>Directly outside the front of the school, both sides of Chelmsford Road have shared-use cycle routes. These clearly separate cyclists from walkers so everyone can travel safer. The <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Brentwood cycle map</a> shows you routes in and out from other parts of Brentwood.</p>
		<h2>Bus routes</h2>
		<p>The school is perfectly placed for students travelling by bus as it’s on the main route into Shenfield and Brentwood and links up with Ingatestone and Chelmsford. There are waiting shelters on both sides.</p>
		<h2>Train routes</h2>
		<p>Shenfield High is about 15 minutes walk from Shenfield station, which is a major hub for trains. It has quick, direct lines to Brentwood, Chelmsford, Billericay and parts of north-east London. There are footpaths and pavements nearly all the way and they’re on fairly quiet residential roads. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools.</p>


	</Layout>
)

export default ShenfieldHigh