import React from "react"
import { Link } from "gatsby"


import Layout from "../../components/layout"
import SEO from "../../components/seo"
const ZennPage = () => (
  <Layout>
    <SEO
  title="zennページ"
  description="これは初めてGatsby Siteのaboutページです。"
  article={true}
/>
  zenn
  <Link to={"/"}>トップページへのリンク</Link>
  </Layout>
)

export default ZennPage
