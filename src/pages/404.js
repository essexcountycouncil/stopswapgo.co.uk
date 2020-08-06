import React from "react"
import { Link } from 'gatsby'
import Layout from "../layout/layout"

const NotFoundPage = () => (
  <Layout>
    <h1>Something's missing</h1>
    <p>Sorry, the page you are looking for cannot be found. It may have been removed, had its name changed, or is temporarily unavailable.</p>
		<p>You can return to the previous page using your browser's 'back' button, or browse the <Link to="/">homepage</Link> for the information you're looking for.</p>  
  </Layout>
)

export default NotFoundPage
