import React from 'react'
import img from '../images/hero-credit-card-03-992.jpg'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "copy/hero-3.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "hero-credit-card-03-992.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
    const data = useStaticQuery(getImages);
    console.log(data)

    return (
      <section className="images">
        <article className="single-image">
          <h3>basic image</h3>
          <img src={img} width="100%" />
        </article>
        <article className="single-image">
          <h3>fixed image/blur</h3>
          <Image fixed={data.fixed.childImageSharp.fixed}></Image>
        </article>
        <article className="single-image">
          <h3>fluid image/svg</h3>
          <Image fluid={data.fluid.childImageSharp.fluid}></Image>
        </article>
      </section>
    )
}

export default Images