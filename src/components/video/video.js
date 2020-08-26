import React from "react"
const Video = ({ videoSrcURL, ...props }) => (
  <video className="video" controls>
    <source src={videoSrcURL} type="video/mp4" />
  </video>
)
export default Video