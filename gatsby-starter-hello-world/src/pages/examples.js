import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const examples = ({data}) => {
    return (
      <Layout>
        <div>
          <h2>Hello from examples</h2>
          <Header></Header>
          <HeaderStatic></HeaderStatic>
        <h5>{data.site.info.author}</h5>
        </div>
      </Layout>
    )
}

export const data = graphql`
         query MyQuery {
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
       `
export default examples