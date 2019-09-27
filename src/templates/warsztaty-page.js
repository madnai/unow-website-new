import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

// export const WarsztatyPageTemplate = ({
//   image,
//   title,
//   heading,
//   description,
//   intro,
//   main, zxcvbn m
//   testimonials,
//   fullImage,
//   pricing,
// }) => (
//   <div className="content">
//     <div
//       className="full-width-image-container margin-top-0"
//       style={{
//         backgroundImage: `url(${
//           !!image.childImageSharp ? image.childImageSharp.fluid.src : image
//         })`,
//       }}
//     >
//       <h2
//         className="has-text-weight-bold is-size-1"
//         style={{
//           boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
//           backgroundColor: '#f40',
//           color: 'white',
//           padding: '1rem',
//         }}
//       >
//         {title}
//       </h2>
//     </div>
//     <section className="section section--gradient">
//       <div className="container">
//         <div className="section">
//           <div className="columns">
//             <div className="column is-7 is-offset-1">
//               <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
//               <p>{description}</p>
//             </div>
//           </div>
//           <div className="columns">
//             <div className="column is-10 is-offset-1">
//               <Features gridItems={intro.blurbs} />
//               <div className="columns">
//                 <div className="column is-7">
//                   <h3 className="has-text-weight-semibold is-size-3">
//                     {main.heading}
//                   </h3>
//                   <p>{main.description}</p>
//                 </div>
//               </div>
//               <div className="tile is-ancestor">
//                 <div className="tile is-vertical">
//                   <div className="tile">
//                     <div className="tile is-parent is-vertical">
//                       <article className="tile is-child">
//                         <PreviewCompatibleImage imageInfo={main.image1} />
//                       </article>
//                     </div>
//                     <div className="tile is-parent">
//                       <article className="tile is-child">
//                         <PreviewCompatibleImage imageInfo={main.image2} />
//                       </article>
//                     </div>
//                   </div>
//                   <div className="tile is-parent">
//                     <article className="tile is-child">
//                       <PreviewCompatibleImage imageInfo={main.image3} />
//                     </article>
//                   </div>
//                 </div>
//               </div>
//               <Testimonials testimonials={testimonials} />
//               <div
//                 className="full-width-image-container"
//                 style={{
//                   backgroundImage: `url(${
//                     fullImage.childImageSharp
//                       ? fullImage.childImageSharp.fluid.src
//                       : fullImage
//                   })`,
//                 }}
//               />
//               <h2 className="has-text-weight-semibold is-size-2">
//                 {pricing.heading}
//               </h2>
//               <p className="is-size-5">{pricing.description}</p>
//               <Pricing data={pricing.plans} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </div>
// )


const WarsztatyPage = ({data}) => {
   const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      {/* <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      /> */}
      {frontmatter.title}
    </Layout>
  )
}

export default WarsztatyPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
