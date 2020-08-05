import React from "react"
import { Link } from 'gatsby'
import Layout from "../../layout/layout-h2s-with-newsletter-no-banner"

const Training = () => (
	<Layout>
		<h1>Training offer</h1>
		<p>Stop.Swap.GO! has teamed up with the <Link to="https://saferessexroads.org/">Safer Essex Roads Partnership</Link> to offer children going into Years 7 through to 13 cycling and walking training during the summer holidays!</p>
		<p>Using <Link to="https://bikeability.org.uk/">Bikeability</Link>, we’ll show your child how to keep safe on the roads and streets to make getting to school in September by walking, cycling, or scooting a breeze. The training takes place at our Park & Ride sites in Chelmsford and Colchester.</p>
		<p>The training will take place in small groups. We’ll make sure we keep everyone COVID-19 safe by running sessions according to which school your child is due to attend and ages.</p>
		<p>To get started, email the <a href="mailto:saferessexroads@essexhighways.org?subject=Stop.Swap.GO! training">Safer Essex Roads Partnership</a> with the following details:</p>
		<ol>
			<li>What type of training would you like, walking, cycling or both?</li>
			<li>If you want cycling training, does your child have a bike and helmet?</li>
			<li>What school will your child be going to in September?</li>
			<li>What year group will your child be in?</li>
		</ol>
		<p class="small">Please note, the Safer Essex Roads Partnership will use your information to administer Bikeability. Your information and personal information will be shared with the course instructors for the duration of the course. Information will be retained for the duration of eligibility for Bikeability services. For more information regarding your rights and our commitments visit our <Link to="https://www.essex.gov.uk/privacy-environment-and-transport">privacy notice</Link>.</p>
	</Layout>
)

export default Training
