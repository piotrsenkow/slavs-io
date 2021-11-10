import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Gif from "../components/gif"
import Projectinfo from "../components/projectinfo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Gif></Gif>
      <Projectinfo></Projectinfo>
      <About></About>
  </Layout>
)

export default IndexPage
