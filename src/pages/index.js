import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Display from "../components/display"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <About></About>
      <Display></Display>
  </Layout>
)

export default IndexPage
