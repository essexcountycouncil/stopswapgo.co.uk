import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2S_RouteFinal_V01_Frinton-On-SeaTendringTechnology.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const TendringTechnology = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/frinton-on-sea"
			one="Schools in Frinton-on-Sea"
			two="Tendring Technology College Frinton Campus" />
	
		<h1>Tendring Technology College Frinton Campus</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Tendring Technology College Frinton Campus" title="A map showing cycle and walking routes to and from Tendring Technology College Frinton Campus" />
		<h2>Getting to and from Tendring Technology College Frinton Campus</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://sites.google.com/aetinet.org/tendring-technology-college">Tendring Technology College Frinton Campus</a><br/>
		Frinton Campus<br/>
		Rochford Way<br/>
		Frinton-on-Sea<br/>
		Essex<br/>
		CO13 0AZ</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at college time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for college.</p>
		<h2>Walking routes</h2>
		<p>Because of its central location, the Frinton campus isn’t much more than a mile and a half from anywhere in the Frinton to Walton area, meaning it’s well within walking distance for the majority of students. There’s a tarmacked footpath along the western side of the school through the local park, and plenty of footpaths cutting through the estates from all sides. There are plenty of crossing islands on the busy Elm Tree Avenue, helping students walk to school safely.</p>
		<h2>Cycling routes</h2>
		<p>The main roads near the school are pretty straight, meaning both cyclists and drivers have good sight-lines to help them keep safe. This includes the road coming up from Frinton-on-Sea station, less than a mile away. A similar distance away is the <a href="https://www.sustrans.org.uk/find-a-route-on-the-national-cycle-network/frinton-on-sea-to-clacton-on-sea#:~:text=The%20route%20starts%20at%20Frinton,%252C%20wide%20and%20traffic-free.">National Cycle Network route 150</a>, which runs all the way down the coast to Clacton.</p>
		<h2>Bus routes</h2>
		<p>There are plenty of bus services going right past the front of the school, heading round Frinton, Walton, Kirby and connecting to the train station. The Triangle shopping centre opposite the school has bus stops in both directions.</p>
		<h2>Train routes</h2>
		<p>Frinton train station is only a few hundred metres away and there is a pavement the whole way. Frinton station connects to Colchester, Kirby, Thorpe, Weeley and Wivenhoe. The line has a level crossing by the station to help with safe crossing. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some colleges.</p>
	</Layout>
)

export default TendringTechnology