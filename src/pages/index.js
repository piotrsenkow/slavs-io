import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Gif from "../components/gif"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <About></About>
      <Gif></Gif>
  </Layout>
)

export default IndexPage
