import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import charytatywneImg from '../../static/img/char.png';
import charytatywneImgHover from '../../static/img/char_hover.png';
import indywidualneImg from '../../static/img/ind.png';
import indywidualneImgHover from '../../static/img/ind_hover.png';
import HoverImage from '../components//HoverImage';

export const ImgDiv = styled.div`
  display:flex;
  opacity: 0.6;
  align-items: center;
  height: 250px;
  font-size:30px;
  color:#C11B30;
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
          <div style={{marginBottom: '50px'}}>
            <div className="columns is-gapless" style={{marginTop: '150px'}}>
              <div className="column  " style={{padding: '0px'}}>
                <Link to="/warsztaty/charytatywne"><HoverImage src={charytatywneImg} hoverSrc={charytatywneImgHover} width='100%' /></Link>
              </div>
              <div className="column " style={{padding: '0px'}}>
                <Link to="/warsztaty/indywidualne"><HoverImage src={indywidualneImg}  hoverSrc={indywidualneImgHover} width='100%' /></Link>
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
