import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LayoutWithNewsletter from "../layout/60-day"
import { Link } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SignupSixtyDay from "../components/signup-sixty-day/signup-sixty-day"

const Challenge = () => {
  const data = useStaticQuery(graphql`
	{
	  contentfulSixtyDayChallenge {
	  	content {
	  		json
	  	}
	  }
	}
	`)
	return (
		<LayoutWithNewsletter>
			<h1>{data.contentfulSixtyDayChallenge.title}</h1>
			{documentToReactComponents(data.contentfulSixtyDayChallenge.content.json)}
	    <SignupSixtyDay></SignupSixtyDay>
		</LayoutWithNewsletter>
  )
}

export default Challenge
