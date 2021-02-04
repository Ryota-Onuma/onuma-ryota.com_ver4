import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const QiitaPage = () => (
  <Layout>
    <SEO
  title="zennページ"
  description="これは初めてGatsby Siteのaboutページです。"
  article={true}
/>
  qiita
  <Link to={"/"}>トップページへのリンク</Link>
  </Layout>
)

export default QiitaPage
