import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '50px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '100px'}}>rodzina</h1>
          <p style={{fontStyle: 'italic'}}>
          Podstawowa, pierwotna, mała grupa <br></br>
          społeczna składająca się z rodziców, ich<br></br>
           dzieci (także adoptowanych) i krewnych.
          </p>
         </div>
         <div className="column is-7">
           <img src='/img/rodzina.png'></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}