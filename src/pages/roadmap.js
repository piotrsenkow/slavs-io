import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RoadmapComponent from "../components/roadmapcomponent"

const Roadmap = () => (
  <Layout>
    <SEO title="Roadmap" />
    <div>
        <RoadmapComponent></RoadmapComponent>
    </div>
  </Layout>
)

export default Roadmap
