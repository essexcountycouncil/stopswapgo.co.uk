import React from "react"
import { useStaticQuery, graphql } from "gatsby"
export default () =>
<div class="impact">
  <div class="hero campaign" style={{backgroundImage: "url("+node.image.file.url+")"}}>
    <div class="overlay"></div>
    <div class="overlay-box">
      <div class="overlay-content">
        <div class="content-heading"><a href={node.url}>{node.title}</a></div>
        <p>{node.teaser}</p>
      </div>
    </div>
  </div>
</div>