import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import MasonryGallery from '../components/MasonryGallery';

export const IndexPageTemplate = ({
  mainpitch
}) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h1 className="title">{mainpitch.subtitle}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section style={{marginTop: '-200px'}}> {/* TODO: ustaw margines w innym miejscu */}
      <MasonryGallery>
        <img src="https://unsplash.it/700/500?image=1" className="masonry-img" alt="Masonry Brick #1" width="100%" height="400px;"/>
        <img src="https://unsplash.it/700/900?image=25" className="masonry-img" alt="Masonry Brick #2" width="100%" height="200px;"/>     
        <img src="https://unsplash.it/700/900?image=46" className="masonry-img" alt="Masonry Brick #3" width="100%" height="220px"/>     
        <img src="https://unsplash.it/700/900?image=38" className="masonry-img" alt="Masonry Brick #4" width="100%" height="220px"/>     
        <img src="https://unsplash.it/700/900?image=57" className="masonry-img" alt="Masonry Brick #5" width="100%" height="160px"/>     
        <img src="https://unsplash.it/700/900?image=78" className="masonry-img" alt="Masonry Brick #6" width="100%" height="450px"/>     
        <img src="https://unsplash.it/700/900?image=34" className="masonry-img" alt="Masonry Brick #7" width="100%" height="150px"/>     
        <img src="https://unsplash.it/700/900?image=33" className="masonry-img" alt="Masonry Brick #8" width="100%" height="320px"/>    
        <img src="https://unsplash.it/700/900?image=2" className="masonry-img" alt="Masonry Brick #8" width="100%" height="280px" style={{height: '145px'}}/>     
      </MasonryGallery>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch {
          title
          subtitle
          description
        }
      }
    }
  }
`
