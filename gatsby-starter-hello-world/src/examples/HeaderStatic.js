import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            title
            person {
              age
              name
            }
            data
            description
            author
          }
        }
      }
    `}
    render={data => <h4>{data.site.info.description}</h4>}
  ></StaticQuery>
)

export default ComponentName
