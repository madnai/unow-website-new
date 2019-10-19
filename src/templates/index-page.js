import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby';

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
                <div className="content" style={{fontFamily: 'Poppins', fontSize: '18px'}}>
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
      <MasonryGallery >
      <Link to="/kategoria/praca" style={{lineHeight: '0'}}><img src="/img/praca.jpg" className="masonry-img" alt="praca" width="100%" height="200px;"/>     </Link>
        <Link to="/kategoria/pasja" style={{lineHeight: '0'}}><img src="/img/pasja.jpg" className="masonry-img" alt="pasja" width="100%" height="400px;"/></Link>
        <Link to="/kategoria/ja" style={{lineHeight: '0'}}><img src="/img/ja_top.jpg" className="masonry-img" alt="Masonry Brick #3" width="100%" height="220px"/> </Link>    
        <Link to="/kategoria/pieniadze" style={{lineHeight: '0'}}><img src="/img/pieniadze.jpg" className="masonry-img" alt="pieniadze" width="100%" height="220px"/> </Link>    
        <Link to="/kategoria/milosc" style={{lineHeight: '0'}}><img src="/img/milosc.jpg" className="masonry-img" alt="Masonry Brick #5" width="100%" height="160px"/> </Link>    
        <Link to="/kategoria/przyjaciele" style={{lineHeight: '0'}}><img src="/img/przyjaciele.jpg" className="masonry-img" alt="przyjaciele" width="100%" height="450px"/> </Link>    
        <Link to="/kategoria/ja" style={{lineHeight: '0'}}><img src="/img/ja.jpg" className="masonry-img" alt="Masonry Brick #7" width="100%" height="150px"/> </Link>    
        <Link to="/kategoria/wiedza" style={{lineHeight: '0'}}><img src="/img/wiedza.jpg" className="masonry-img" alt="wiedza" width="100%" height="320px"/> </Link>   
        <Link to="/kategoria/rodzina" style={{lineHeight: '0'}}><img src="/img/rodzina.jpg" className="masonry-img" alt="Masonry Brick #8" width="100%" height="400px" style={{height: '0px'}} />   </Link> 
        <Link to="/kategoria/rodzina" style={{lineHeight: '0'}}><img src="/img/rodzina.jpg" className="masonry-img" alt="Masonry Brick #8" width="100%" height="400px"  />   </Link>  
        <Link to="/kategoria/ja" style={{lineHeight: '0'}}><img src="/img/ja_bottom.jpg" className="masonry-img" alt="Masonry Brick #8" width="100%" height="400px"  />   </Link> 
        <Link to="/kategoria/podroze" style={{lineHeight: '0'}}><img src="/img/podroze.jpg" className="masonry-img" alt="podroze" width="100%" height="400px"  />   </Link>   
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
