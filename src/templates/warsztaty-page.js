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


const WarsztatyPage = ({data}) => {

  const { frontmatter } = data.markdownRemark

    return (
      <Layout>
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="tile">
                  <h1 className="title">
                    {frontmatter.title}
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
                             backgroundImage: `url(${frontmatter.image1.childImageSharp.fluid.src})`,
                            }} >charytatywne</ImgDiv>
              </div>
              <div className="column is-half">
                <ImgDiv style={{backgroundImage: `url(${frontmatter.image2.childImageSharp.fluid.src})`}}
                                >indywidualne</ImgDiv>            
              </div>
            </div>
          </div>
        </div>
        
      </Layout>
    )
  }


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
