import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <p>Just trying to figure out this programming thing</p>
      <p>
        <Link to="/contact">My Contact Page</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
