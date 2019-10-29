import React from 'react'
import Layout from './Layout';

const Category = ({ categoryName, description, details, imgName  }) => {
  const imgURL = `/img/kategorie/${imgName}.png`;

  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '50px', marginRight: '-48px'}}>
       <div className="columns">
         <div className="column is-narrow is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '150px'}}>{categoryName}</h1>
          <p style={{fontStyle: 'italic', fontSize: '14px'}}>
          {description}
          </p>
          <p style={{opacity: '0.6', fontSize: '12px', marginTop: '5px', fontFamily: 'Lato', fontWeight: '300'}}>
          {details}
          </p>
         </div>
         <div className="column is-8">
           <img src={imgURL}></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}

export default Category;