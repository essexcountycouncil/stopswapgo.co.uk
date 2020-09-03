import React from "react"
import { Link } from 'gatsby'
import map from "./SSGG2SMapRouteFinal_V01_BasildonWoodlands.png"
import Layout from "../../../../layout/routes"
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs"

const Woodlands = () => (

	<Layout>
		<Breadcrumbs
			urlOne="/getting-to-school/routes/basildon"
			one="Schools in Basildon"
			two="Woodlands School" />
	
		<h1>Woodlands School</h1>
		<img src={map} alt="A map showing cycle and walking routes to and from Woodlands School" title="A map showing cycle and walking routes to and from Woodlands School" />
		<h2>Getting to and from Woodlands School</h2>
		<p>These routes and maps are suggestions of how you could stop taking the car and swap to cycling, walking, or scooting to school. They don’t show every possible route and you could have fun finding a way that works for you. If you know a safe way that gets you there even quicker, that’s great! Take that route instead.</p>
		<h2>Address</h2>
		<p><a href="https://www.woodlandsschool.org/">Woodlands School</a><br/>
		Woodlands Approach<br/>
		Off Nether Mayne<br/>
		Basildon<br/>
		Essex<br/>
		SS16 5BA</p>
		<h2>Heavy traffic zone</h2>
		<p>The highlighted heavy traffic zone on the map shows the area that will have the heaviest traffic at school time. By using alternate routes and a mix of walking and cycling, you can avoid sitting in traffic and being late for school or college.</p>
		<h2>Walking routes</h2>
		<p>Like most of Basildon, the area around the school is very well served by footpaths and short-cuts. Considering it’s on a main road, it’s fortunate to have footpaths approaching from both sides along the road. The road also has a wide pavement on the opposite side, and both a pelican crossing and a foot bridge crossing it near the school.</p>
		<h2>Cycling routes</h2>
		<p>Basildon is well designed for cycling. The footpaths on either side of the school entrance and Nether Mayne are also cycle paths, which provides bike access from both north and south. The school is also very close to National Cycle Network route 13, a traffic-free route heading through Basildon from north to south. All route aspects of the network are shown on the <a href="https://www.essexhighways.org/getting-around/cycling/routes-and-maps.aspx">Basildon cycle map</a>.</p>
		<h2>Bus routes</h2>
		<p>Many bus services travel in both directions on Nether Mayne, with sheltered bus stops with seating on both sides. Woodlands School is also only half a mile from the <a href="https://www.google.co.uk/maps/place/Basildon+Town+Centre/@51.5687882,0.4587702,19.29z/data=!4m5!3m4!1s0x47d8c6905d6e9c0f:0x3e4fef7776e1fe6c!8m2!3d51.5688214!4d0.4590549">main bus station</a> in Basildon, with many bus services connecting to the local area and beyond.. </p>
		<h2>Train Routes</h2>
		<p>Woodlands is less than half a mile walk from <a href="https://www.google.co.uk/maps/place/Basildon/@51.5678633,0.4557624,17.68z/data=!4m5!3m4!1s0x47d8c691b8218a3b:0xd6e3566318e3e45a!8m2!3d51.5681621!4d0.4567849">Basildon train station</a>, which provides quick connections to other stations in the Basildon area, like Laindon and Pitsea, and onwards to either London or Southend. C2C trains, who operate the line, offer a term time <a href="https://www.c2c-online.co.uk/tickets-and-fares/smart-student/">Smart Student</a> season ticket offer, for those students aged 16+.</p>
	</Layout>
)

export default Woodlands