import React from "react"
import { Link } from "gatsby"
import { Layout } from '../components/layout' 

// markup
const NotFoundPage = () => {
  return <Layout pageTitle="Page not found">
    <p>
      ページが見つかりませんでした。
      <Link to="/">top</Link>
    </p>
  </Layout>
}

export default NotFoundPage
