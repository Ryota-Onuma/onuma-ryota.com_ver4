import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";//AniLinkのインストール
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
  title="aboutページ"
  description="これは初めてGatsby Siteのaboutページです。"
  article={true}
/>
  index
  <AniLink paintDrip to="/items/qiita" hex="#6EC0B9" duration={2}>
  Qiitaへのリンク
  </AniLink>
  <AniLink paintDrip to="/items/zenn" color="red">
  Zennへのリンク
  </AniLink>

  </Layout>
)

export default IndexPage
