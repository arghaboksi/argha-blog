import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'
import styles from './post.module.scss'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <div style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" + ")" }}>
      <Layout>
        <div className={styles.container}>
          <Title text={post.frontmatter.title}></Title>
          <div style={{ width: '100%', height: '400px', backgroundColor: '#fafafa', backgroundImage: 'Url(' + post.frontmatter.imageLarge + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginBottom: '30px' }}></div>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
        imageLarge
      }
    }
  }
`