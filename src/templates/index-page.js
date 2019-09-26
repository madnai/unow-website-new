import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Masonry from '../components/Masonry';

const PHOTO_SET = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200",
    srcSet: [
      "https://source.unsplash.com/2ShvY8Lf6l0/500x375 500w",
      "https://source.unsplash.com/2ShvY8Lf6l0/800x600 800w",
      "https://source.unsplash.com/2ShvY8Lf6l0/1024x768 1024w",
      "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200 1600w"
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/1600x1600",
    srcSet: [
      "https://source.unsplash.com/Dm-qxdynoEc/500x500 500w",
      "https://source.unsplash.com/Dm-qxdynoEc/800x800 800w",
      "https://source.unsplash.com/Dm-qxdynoEc/1024x1024 1024w",
      "https://source.unsplash.com/Dm-qxdynoEc/1600x1600 1600w"
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/1200x1600",
    srcSet: [
      "https://source.unsplash.com/qDkso9nvCg0/375x500 375w",
      "https://source.unsplash.com/qDkso9nvCg0/600x800 600w",
      "https://source.unsplash.com/qDkso9nvCg0/768x1024 768w",
      "https://source.unsplash.com/qDkso9nvCg0/1200x1600 1200w"
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/1200x1600",
    srcSet: [
      "https://source.unsplash.com/iecJiKe_RNg/375x500 375w",
      "https://source.unsplash.com/iecJiKe_RNg/600x800 600w",
      "https://source.unsplash.com/iecJiKe_RNg/768x1024 768w",
      "https://source.unsplash.com/iecJiKe_RNg/1200x1600 1200w"
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/1200x1600",
    srcSet: [
      "https://source.unsplash.com/epcsn8Ed8kY/375x500 375w",
      "https://source.unsplash.com/epcsn8Ed8kY/600x800 600w",
      "https://source.unsplash.com/epcsn8Ed8kY/768x1024 768w",
      "https://source.unsplash.com/epcsn8Ed8kY/1200x1600 1200w"
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 4
  },
];

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
    <section>
    <Masonry>
        <img src="https://unsplash.it/700/500?image=1" className="masonry-img" alt="Masonry Brick #1" width="100%" height="400px;"/>
        <img src="https://unsplash.it/700/900?image=25" className="masonry-img" alt="Masonry Brick #2" width="100%" height="200px;"/>     
        <img src="https://unsplash.it/700/900?image=46" className="masonry-img" alt="Masonry Brick #3" width="100%" height="220px"/>     
        <img src="https://unsplash.it/700/900?image=38" className="masonry-img" alt="Masonry Brick #4" width="100%" height="220px"/>     
        <img src="https://unsplash.it/700/900?image=57" className="masonry-img" alt="Masonry Brick #5" width="100%" height="160px"/>     
        <img src="https://unsplash.it/700/900?image=78" className="masonry-img" alt="Masonry Brick #6" width="100%" height="450px"/>     
        <img src="https://unsplash.it/700/900?image=34" className="masonry-img" alt="Masonry Brick #7" width="100%" height="150px"/>     
        <img src="https://unsplash.it/700/900?image=33" className="masonry-img" alt="Masonry Brick #8" width="100%" height="320px"/>    
        <img src="https://unsplash.it/700/900?image=2" className="masonry-img" alt="Masonry Brick #8" width="100%" height="280px"/>     
      </Masonry>
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
