import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import './index.css'
import { graphql } from "gatsby"

export default class IndexPage extends React.Component {
  constructor(inProps) {
    super(inProps);
    console.log(inProps);
    this.data=inProps.data;
  }
  render() {
    return (
      //JSX
      <Layout>
        <Seo title="Home" />
        <div class="outerContainer">
          <h2>{this.data.site.siteMetadata.description}</h2>
          <h3>{this.data.site.siteMetadata.author}</h3>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
query{
  site{
    siteMetadata{
      title
      description
      author
    }
  }
}`
