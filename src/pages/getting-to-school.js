import React from "react"
import Helmet from "react-helmet"
import LayoutH2sWithNewsletter from "../layout/layout-h2s-with-newsletter"
import PreviewSchool from "../components/preview/preview-school"
import Social from "../components/social/social-g2s"

export default ({ data }) => {
  return (
    <LayoutH2sWithNewsletter>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous" />
    </Helmet>
    <div className="mantra" id="get-ready">
    	<h2 className="strapline">Stop.Swap.<i>GO!</i> to school in September</h2>
    	<h3>Rethink how your child goes back to school or college</h3>
      <p>Loads of people have swapped to cycling and walking around Essex to stay active during lockdown. We’re here to help you avoid traffic or long waits for the socially distanced bus when schools and colleges return. We’ll also help you get those steps in as well.</p>
      <p>So we’ve put together plenty of advice to help you make the swap, as well as walking and cycling maps to your school including suggested drop off and pick-up points that aren’t going to drag you through the busy town or to the school gates. They’ll help you avoid the traffic, stay healthy and help the environment.</p>
      <p>We have a ‘how to’ guide on swapping and we’ll be adding plenty more maps and information over time, so stay tuned. <i>GO!</i> sign up to our newsletter so you’re always up to date.</p>
      <p>We want to get everyone in schools and colleges to have a go at walking, cycling, or scooting, so the information here is for everyone. But we'll cover off some specifics if you receive transport from Essex County Council too.</p>
    </div>
  	<PreviewSchool />
    <Social />
    </LayoutH2sWithNewsletter>
  )
}