import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby';
import styled from 'styled-components'

import Layout from '../components/Layout'
import MasonryGallery from '../components/MasonryGallery';


export const ImgDiv = styled.div`
      position: absolute;
	    top: 0; right: 0;
	    bottom: 0; left: 0;
	    width: 300px;
	    height: 200px; 
	    text-align: center;
	    background-color: rgba(0,0,0,0.8);
	    opacity: 0;
	    -webkit-transition: opacity 0.6s;
	    -moz-transition: opacity 0.6s;
	    transition: opacity 0.6s;
       vertical-align:middle;
       line-height:200px;

  :hover {
    opacity: 1;
  }
`

export const IndexPageTemplate = ({
  mainpitch
}) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section" style={{padding: '1rem 1.5rem 3rem 1.5rem'}}>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content" style={{fontFamily: 'Lato', fontSize: '18px'}}>
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
      <Link to="/kategoria/praca" style={{lineHeight: '0'}}><img src="/img/praca.png" className="masonry-img" alt="praca" width="100%" height="200px;"/>
      <ImgDiv>

        <h3>BOOM!</h3>
          
        </ImgDiv>
           </Link>
        <Link to="/kategoria/pasja" style={{lineHeight: '0'}}><img src="/img/pasja1.png" className="masonry-img" alt="pasja" width="100%" height="400px;"/></Link>
        <Link to="/kategoria/ja" style={{lineHeight: '0'}}><img src="/img/ja.png" className="masonry-img" alt="Masonry Brick #7" width="100%" height="800px"/> </Link>    
        <Link to="/kategoria/pieniadze" style={{lineHeight: '0'}}><img src="/img/pieniadze1.png" className="masonry-img" alt="pieniadze" width="100%" height="220px"/> </Link>    
        <Link to="/kategoria/milosc" style={{lineHeight: '0'}}><img src="/img/milosc.png" className="masonry-img" alt="Masonry Brick #5" width="100%" height="160px"/> </Link>    
        <Link to="/kategoria/przyjaciele" style={{lineHeight: '0'}}><img src="/img/przyjaciele.jpg" className="masonry-img" alt="przyjaciele" width="100%" height="450px"/> </Link> 
        <Link to="/kategoria/wiedza" style={{lineHeight: '0'}}><span width="100%" height="320px"/> </Link>   
        <Link to="/kategoria/wiedza" style={{lineHeight: '0'}}><img src="/img/wiedza1.png" className="masonry-img" alt="wiedza" width="100%" height="320px"/> </Link>   
        <Link to="/kategoria/rodzina" style={{lineHeight: '0'}}><img src="/img/rodzina.jpg" className="masonry-img" alt="Masonry Brick #8" width="100%" height="400px" style={{height: '0px'}} />   </Link> 
        <Link to="/kategoria/rodzina" style={{lineHeight: '0'}}><img src="/img/rodzina.jpg" className="masonry-img" alt="Masonry Brick #8" width="100%" height="400px"  />   </Link>  
        <Link to="/kategoria/wiedza" style={{lineHeight: '0'}}><span width="100%" height="320px"/> </Link>   
        <Link to="/kategoria/podroze" style={{lineHeight: '0'}}><img src="/img/podroze1.png" className="masonry-img" alt="podroze" width="100%" height="400px"  />   </Link>   
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
