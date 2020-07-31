import React from "react"
import Helmet from "react-helmet"
import LayoutH2sWithNewsletter from "../layout/layout-h2s-with-newsletter"
import PreviewServices from "../components/preview/preview-services"
import SocialFeed from "../components/social-feed/social-feed"

export default ({ data }) => {
  return (
    <LayoutH2sWithNewsletter>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous" />
    </Helmet>
    <div className="mantra" id="get-ready">
    	<h2 className="strapline">Get ready to Stop.Swap.<i>GO!</i></h2>
      <br/>
    	<h3>Hello! We’re making getting around Essex easier – and more rewarding – than ever.</h3>
      <p>More and more of us are <span>swapping from car to bus, bike or our own two feet</span>. And whether you’re off to the shops, visiting friends or family, or getting to and from work, we’re here to help keep you moving.</p>
      <p>Join our community for the latest events, news and journey info. We’ll also be giving away prizes – including the chance to win a bike and cycling accessories worth <span>£1,000</span> – with our <span>60 Day Challenge</span>.</p>
      <br/>
    </div>
  	<PreviewServices />
    <SocialFeed />
    </LayoutH2sWithNewsletter>
  )
}