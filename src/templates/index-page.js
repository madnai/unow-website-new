import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import styled from 'styled-components'
import HoverImage from '../components/HoverImage';
import HoverImage2 from '../components/HoverImage2';
import Layout from '../components/Layout'
import MasonryGallery from '../components/MasonryGallery';
import milosc from '../../static/img/gallery/hover/milosc.png';
import praca from '../../static/img/gallery/hover/praca.png';
import pasja from '../../static/img/gallery/hover/pasja.png';
import przyjaciele from '../../static/img/gallery/hover/przyjaciele.png';
import podroze from '../../static/img/gallery/hover/podroze.png';
import pieniadze from '../../static/img/gallery/hover/pieniadze.png';
import ja from '../../static/img/gallery/hover/ja.png';
import rodzina from '../../static/img/gallery/hover/rodzina.png';
import wiedza from '../../static/img/gallery/hover/wiedza.png';
import TextLoop from "react-text-loop";




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
    {isBrowser ? (
      <section className="section section--gradient" style={{paddingTop: '1rem'}}>
      <div className="container">
        <div className="section" style={{padding: '0rem 1.5rem 3rem 1.5rem'}}>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content" style={{fontFamily: 'Lato', fontSize: '16px'}}>
                  <div className="tile">
                    <h1 className="title" style={{marginBottom: '0px'}}>{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h1 className="title" style={{marginBottom: '0px'}}>
                      {mainpitch.subtitle}{" "}
                      <TextLoop interval={4000}>
                        <span>będziesz.</span>
                        <span>możesz.</span>
                        <span>teraz.</span>
                      </TextLoop>
                    </h1>
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
    ) : (
      <section className="section section--gradient" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
      <div className="container">
        <div className="section" style={{padding: '0rem'}}>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content" style={{fontFamily: 'Lato', fontSize: '16px'}}>
                  <div className="tile">
                    <h1 className="title" style={{marginBottom: '0px'}}>{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h1 className="title" style={{marginBottom: '0px'}}>
                      {mainpitch.subtitle}{" "}
                      <TextLoop interval={4000}>
                        <span>będziesz.</span>
                        <span>możesz.</span>
                        <span>teraz.</span>
                      </TextLoop>
                    </h1>
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
    )}
     
    <BrowserView>
      <section style={{marginTop: '-200px', marginBottom: '-50px'}}> {/* TODO: ustaw margines w innym miejscu */}
        <MasonryGallery>
          <Link to="/kategoria/praca" style={{lineHeight: '0'}}>
            <HoverImage src="/img/gallery/praca.png" hoverSrc={praca} className="masonry-img" alt="praca" width="100%" ></HoverImage>
          </Link> 
          <Link to="/kategoria/pasja" style={{lineHeight: '0'}}>
            <HoverImage src="/img/gallery/pasja.png"  hoverSrc={pasja} className="masonry-img" alt="pasja" width="100%" />
          </Link>
          <Link to="/kategoria/ja" style={{lineHeight: '0'}}>
            <HoverImage src="/img/gallery/ja.png" hoverSrc={ja} className="masonry-img" alt="ja" width="100%" />
          </Link>    
          <Link to="/kategoria/pieniadze" style={{lineHeight: '0'}}>
            <HoverImage src="/img/gallery/pieniadze.png" hoverSrc={pieniadze} className="masonry-img" alt="pieniadze" width="100%" /> 
          </Link>    
          <Link to="/kategoria/milosc" style={{lineHeight: '0'}}>
            <HoverImage2 src="/img/gallery/milosc.png" hoverSrc={milosc} className="masonry-img" alt="milosc" width="100%" />
          </Link>    
          <Link to="/kategoria/przyjaciele" style={{lineHeight: '0'}}>
            <HoverImage src="/img/gallery/przyjaciele.png" hoverSrc={przyjaciele} className="masonry-img" alt="przyjaciele" width="100%" ></HoverImage>
          </Link> 
          <Link to="/kategoria/ddd" style={{lineHeight: '0'}}><span width="100%" /> </Link>   
          <Link to="/kategoria/wiedza" >
            <HoverImage2 src="/img/gallery/wiedza.png" hoverSrc={wiedza} className="masonry-img"   alt="wiedza" width="100%" /> 
          </Link>   
          <Link to="/kategoria/ddaad" style={{lineHeight: '0'}}><span width="100%" /> </Link>  
          <Link to="/kategoria/rodzina" style={{lineHeight: '0'}}>
            <HoverImage src="/img/gallery/rodzina.png" hoverSrc={rodzina} className="masonry-img" alt="rodzina1" width="100%" />
          </Link>  
          <Link to="/kategoria/wwwwww" style={{lineHeight: '0'}}><span width="100%" /> </Link>   
          <Link to="/kategoria/podroze" style={{lineHeight: '0'}}>
            <HoverImage src="/img/gallery/podroze.png" hoverSrc={podroze} className="masonry-img" alt="podroze" width="100%"  /> 
          </Link>     
        </MasonryGallery>
      </section>
    </BrowserView>
    <MobileView>
      <MasonryGallery>
        <Link to="/kategoria/praca" style={{lineHeight: '0'}}>
          <img src={praca} className="masonry-img" alt="praca" width="100%" />
        </Link> 
        <Link to="/kategoria/pasja" style={{lineHeight: '0'}}>
          <img src={pasja} className="masonry-img" alt="pasja" width="100%" />
        </Link>
        <Link to="/kategoria/ja" style={{lineHeight: '0'}}>
          <img src={ja} className="masonry-img" alt="ja" width="100%" />
        </Link>    
        <Link to="/kategoria/pieniadze" style={{lineHeight: '0'}}>
          <img src={pieniadze} className="masonry-img" alt="pieniadze" width="100%" /> 
        </Link>    
        <Link to="/kategoria/milosc" style={{lineHeight: '0'}}>
          <img src={milosc} className="masonry-img" alt="milosc" width="100%" />
        </Link>    
        <Link to="/kategoria/przyjaciele" style={{lineHeight: '0'}}>
          <img src={przyjaciele} className="masonry-img" alt="przyjaciele" width="100%" />
        </Link> 
        <Link to="/kategoria/wiedza" >
          <img src={wiedza} className="masonry-img"   alt="wiedza" width="100%" /> 
        </Link>   
        <Link to="/kategoria/rodzina" style={{lineHeight: '0'}}>
          <img src={rodzina} className="masonry-img" alt="rodzina1" width="100%" />
        </Link>  
        <Link to="/kategoria/podroze" style={{lineHeight: '0'}}>
          <img src={podroze} className="masonry-img" alt="podroze" width="100%"  /> 
        </Link>     
      </MasonryGallery>
    </MobileView>
  </div>
)

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
}

// const IndexPage =  ({ data }) => {
//   const { frontmatter } = data.markdownRemark

//   return (
//     <Layout>
//       <IndexPageTemplate
//         mainpitch={frontmatter.mainpitch}
//       />
//     </Layout>
//   )
// }

const IndexPage = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    }
  

  componentDidMount() {
    this.setState({ isClient: true })
  }

  render() {
    return (
      <React.Fragment key={this.state.isClient}>
          <Layout>
            <IndexPageTemplate
              mainpitch={this.props.data.markdownRemark.frontmatter.mainpitch}
            />
          </Layout>
          </React.Fragment>
        )
  }
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
