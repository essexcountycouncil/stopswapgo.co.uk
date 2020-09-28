import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useForm } from "react-hook-form";
import axios from "axios"
import { Link } from 'gatsby'
import Layout from "../../layout/sub-page"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SignupTraining from "../../components/signup-training/signup-training"

const Training = () => {
  const data = useStaticQuery(graphql`
  {
    contentfulTraining {
      title
      content {
        json
      }
      smallPrint {
        json
      }
    }
  }
  `)  
  return (
  	<Layout>
      <h1>{data.contentfulTraining.title}</h1>
      {documentToReactComponents(data.contentfulTraining.content.json)}
      <SignupTraining></SignupTraining>
  		{documentToReactComponents(data.contentfulTraining.smallPrint.json)}
  	</Layout>
  )
}

export default Training