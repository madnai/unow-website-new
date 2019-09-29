import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import styled from 'styled-components'

export const ImgDiv = styled.div`
display:flex;
opacity: 0.6;
align-items: center;
height: 250px;
font-size:30px;
color:red;
font-weight: bold;
justify-content:center;

:hover {
  cursor: pointer;
  opacity: 1;
}
`


class WarsztatyPage extends React.Component {

  

  constructor(props) {
    super(props)
  }

  state = {hovered: false}

  render() {
    return (
      
      <Layout>
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="tile">
                  <h1 className="title">
                    {this.props.data.markdownRemark.frontmatter.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half ">
                <ImgDiv style={{
                             backgroundImage: `url(${this.props.data.markdownRemark.frontmatter.image1.childImageSharp.fluid.src})`,
                            }} >charytatywne</ImgDiv>
              </div>
              <div className="column is-half">
              <ImgDiv className={this.state.hovered ? 'hovered' : ''} style={{
                                         backgroundImage: `url(${this.props.data.markdownRemark.frontmatter.image2.childImageSharp.fluid.src})`
                                      }}
                                        >indywidualne</ImgDiv>            
              </div>
            </div>
          </div>
        </div>
        
      </Layout>
    )
  }
}
// const WarsztatyPage = ({data}) => {
//    const { frontmatter } = data.markdownRemark

//    function toggleHover(e) {
//       return 0;
//    }; 

//   return (
//     <Layout>
//       {/* <ProductPageTemplate
//         image={frontmatter.image}
//         title={frontmatter.title}
//         heading={frontmatter.heading}
//         description={frontmatter.description}
//         intro={frontmatter.intro}
//         main={frontmatter.main}
//         testimonials={frontmatter.testimonials}
//         fullImage={frontmatter.full_image}
//         pricing={frontmatter.pricing}
//       /> */}
//       <div className="section">
//         <div className="columns">
//           <div className="column is-10 is-offset-1">
//             <div className="content">
//               <div className="tile">
//                 <h1 className="title">
//                   {frontmatter.title}
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="section">
//         <div className="container">
//           <div className="columns">
//             <div className="column is-half ">
//               {console.log(frontmatter.image1.childImageSharp.fluid.src)}
//               {/* <PreviewCompatibleImage imageInfo={{
//                 image: frontmatter.image1,
//                 imageStyle: {opacity: '0.6'}
//               }} /> */}
//               <div id="imgg1" style={{display: 'flex',
//                           zIndex: '1',
//                           alignItems: 'center', 
//                           opacity: '0.6',
//                           height: '250px',
//                           justifyContent: 'center', 
//                           fontSize: '30px', 
//                           color: 'red', 
//                           fontWeight: 'bold',
//                           backgroundImage: `url(${frontmatter.image1.childImageSharp.fluid.src})`,
//                           ":hover": { cursor: "pointer", backgroundColor: "#ffff9b", color: "#fd0808" }}}
//                           onClick={() => alert('asdas')}
//                           >charytatywne</div>
//             </div>
//             <div className="column is-half">
//               {/* <PreviewCompatibleImage imageInfo={{
//                 image: frontmatter.image2,
//                 imageStyle: {opacity: '0.6'}
//               }} /> */}
//             <div style={{display: 'flex',
//                                       alignItems: 'center', 
//                                       opacity: '0.6',
//                                       height: '250px',
//                                       justifyContent: 'center', 
//                                       fontSize: '30px', 
//                                       color: 'red', 
//                                       fontWeight: 'bold',
//                                       backgroundImage: `url(${frontmatter.image2.childImageSharp.fluid.src})`}}>indywidualne</div>            
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </Layout>
//   )
// }

export default WarsztatyPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image1 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
