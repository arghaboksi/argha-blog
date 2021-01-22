import React from "react"
import Layout from '../components/layout'
import Title from '../components/title'
import ArticleList from '../components/article-list'

export default () => (
  <div style={{backgroundImage: "url("+ "https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" + ")"}}>
    <Layout>
      <Title text="Welcome!" />
      <h3>
        Here I document Articles that I find insightful.
    </h3>
      <ArticleList />
    </Layout>
  </div>
)

// An example of page query from inside of a page component
// export const query = graphql `query {
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }`
