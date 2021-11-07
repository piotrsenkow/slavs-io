import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Gif from "../components/gif"
import Roadmap from "../components/roadmap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Gif></Gif>
      {/* <Roadmap></Roadmap> */}
      <About></About>
  </Layout>
)

export default IndexPage
