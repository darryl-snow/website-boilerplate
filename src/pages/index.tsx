import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = (): React.ReactElement => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World!</h1>
    <p>Welcome to your new site.</p>
  </Layout>
)

export default IndexPage
