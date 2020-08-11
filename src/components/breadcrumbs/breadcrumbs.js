import React from "react"

export default ({urlOne, one, two}) =>
<nav className="breadcrumbs" aria-label="breadcrumbs">
  <ol>
    <li><a href={urlOne}>{one}</a></li>
    <li>{two}</li>
  </ol>
</nav>