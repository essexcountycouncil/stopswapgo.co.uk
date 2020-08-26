import React, { useState } from "react"
import { useForm } from "react-hook-form";
import axios from "axios"
import { Link } from 'gatsby'
import Layout from "../../layout/layout-h2s-with-newsletter-no-banner"
import SignupTraining from "../../components/signup-training/signup-training"

const Training = () => {
  return (
  	<Layout>
  		<h1>Training offer</h1>
      <p>Stop.Swap.<i>GO!</i> has teamed up with the <a href="https://saferessexroads.org/">Safer Essex Roads Partnership</a> to offer children and young people going into Years 7 through to 13 cycling and walking training during the summer holidays!</p>
      <p>Using <a href="https://bikeability.org.uk/">Bikeability</a>, we’ll show your child how to keep safe on the roads and streets to make getting to school or college in September by walking, cycling, or scooting a breeze. The training takes place at our Park & Ride sites in Chelmsford and Colchester.</p>
      <p>The training will take place in small groups. We’ll make sure we keep everyone COVID-19 safe by running sessions according to which school or college your child is due to attend and ages.</p>
      <p>To get started, enter your details in the training request form and hit ‘Submit’:</p>

      <SignupTraining></SignupTraining>


  		<p className="small">Please note, the Safer Essex Roads Partnership will use your information to administer Bikeability. Your information and personal information will be shared with the course instructors for the duration of the course. Information will be retained for the duration of eligibility for Bikeability services. For more information regarding your rights and our commitments visit our <Link to="https://www.essex.gov.uk/privacy-environment-and-transport">privacy notice</Link>.</p>
  	</Layout>
  )
}

export default Training
