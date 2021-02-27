import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Feature from "../components/feature"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header
      heading="Craig Edney Starter"
      headline="Eden Design System."
      subHeadline="Custom made web design system by Craig Edney."
    />
    <Feature />
  </Layout>
)

export default IndexPage
