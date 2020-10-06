import React from 'react'
import Error from 'next/error'
import Layout from '../layouts/layout'

const NotFound = () => (
  <Layout>
    <Error statusCode={404} />
  </Layout>
)

export default NotFound
