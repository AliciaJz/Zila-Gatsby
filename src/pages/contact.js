import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact me!</h1>
      <p>
        Visit my Twitter{" "}
        <a href="https://twitter.com/zilaphono" target="_blank">
          @zilaphono
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
