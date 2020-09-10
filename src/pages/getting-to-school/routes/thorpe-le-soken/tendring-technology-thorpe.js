import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SRouteFinal_V02_Thorpe-Le-SokenTendringTechCollege.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const TendringTechnology = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/thorpe-le-soken"
			one="Schools in Thorpe-le-Soken"
			two="Tendring Technology College Thorpe Campus" />
	
		<h1>Tendring Technology College Thorpe Campus</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Tendring Technology College Thorpe Campus" title="A map showing cycle and walking routes to and from Tendring Technology College Thorpe Campus" />
		<h2>Getting to and from Tendring Technology College Thorpe Campus</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://sites.google.com/aetinet.org/tendring-technology-college">Tendring Technology College Thorpe Campus</a><br/>
		Thorpe Campus<br/>
		Landermere Road<br/>
		Thorpe-le-Soken<br/>
		Essex<br/>
		CO16 0LQ</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at college time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for college.</p>
		<h2>Walking routes</h2>
		<p>Thorpe isn’t a very big place, so it’s easy to walk from any part of it to the college. There are pavements throughout and the High Street has a zebra crossing and several crossing islands. There are also off-road footpaths around the back of the school, joining up two separate housing estates.</p>
		<h2>Cycling routes</h2>
		<p>The roads through Thorpe are pretty straight, meaning both cyclists and drivers have good sight-lines to help them keep safe. This includes the road coming up from <a href="https://www.google.co.uk/maps/place/Thorpe-le-Soken/@51.8481891,1.1608085,17.64z/data=!4m5!3m4!1s0x47d972a9c89c18ed:0xaf03b543d7ba17ad!8m2!3d51.8478516!4d1.1611833">Thorpe station</a>, less than a mile away.</p>
		<h2>Bus routes</h2>
		<p>Thorpe is well connected by buses to Weeley, Clacton, Kirby,Frinton and Walton. Although buses don’t run directly past the college, they all go along the High Street, less than 200 metres from the college front gate.</p>
		<h2>Train routes</h2>
		<p>Thorpe train station is less than a mile walk, with pavements the whole way and no need to cross any roads other than the High Street. Thorpe station connects to Clacton and Walton in one direction, and Colchester in the other, taking in a number of other village stations. Greater Anglia offer <a href="https://www.greateranglia.co.uk/tickets-fares/business-travel/schoolcollege-travel-discounts">discounts on train travel for students</a> at some schools and colleges.</p>
	</Layout>
)

export default TendringTechnology