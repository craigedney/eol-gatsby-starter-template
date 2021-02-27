/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer
        facebook=""
        instagram=""
        twitter=""
        github=""
        company="Company"
        developer="Craig Edney"
        developerLink="https://www.craigedney.ai/"
      />
    </>
  )
}

export default Layout
