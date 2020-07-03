import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const getData = graphql`
 query {
    site {
      info:siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
const Header = () => {
    const {
    site: {
      info: {
        description,
        person: {
          age,
          name
        },
        title
      },
    }
  } = useStaticQuery(getData);

    return (
        <div>
            <h2>title: {title}</h2>
        </div>
    )
}

export default Header
