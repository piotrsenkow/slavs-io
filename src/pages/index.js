import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Gif from "../components/gif"
import Projectinfo from "../components/projectinfo"
import RoadmapComponent from "../components/roadmapcomponent"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Gif></Gif>
      {/* <Projectinfo></Projectinfo> */}
      <RoadmapComponent></RoadmapComponent>
  </Layout>
)

export default IndexPage
