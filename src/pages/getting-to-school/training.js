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
      <p>Stop.Swap.GO! has teamed up with the <a href="https://saferessexroads.org/">Safer Essex Roads Partnership</a> to offer children and young people going into Years 7 through to 13 cycling and walking training.</p>
      <p>Using <a href="https://bikeability.org.uk/">Bikeability</a>, we’ll show your child how to keep safe on the roads and streets to make getting to school or college by walking and cycling a breeze.</p>
      <p>The cycling training will take place at a local venue and the sessions are taught one to one or two to one. We will need a parent or guardian to accompany the child for the training. The child will need a bike and a helmet. The cost of this course is £25 and will take place over 2 hours.</p>
      <p>The walking training, together with the cost, venue and school or college group will be discussed once you have submitted a request.</p>
      <p>To get started, enter your details in the training request form and hit ‘Submit’:</p>

      <SignupTraining></SignupTraining>

  		<p className="small">Please note, the Safer Essex Roads Partnership will use your information to administer Bikeability. Your information and personal information will be shared with the course instructors for the duration of the course. Information will be retained for the duration of eligibility for Bikeability services. For more information regarding your rights and our commitments visit our <Link to="https://www.essex.gov.uk/privacy-environment-and-transport">privacy notice</Link>.</p>
  	</Layout>
  )
}

export default Training
