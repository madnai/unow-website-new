import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '50px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '100px'}}>ja</h1>
          <p style={{fontStyle: 'italic'}}>
          Wyobrażenie oraz koncepcja na swój<br></br>
           temat. Subiektywna wizja siebie.
          </p>
         </div>
         <div className="column is-7">
           <img src='/img/kategorie/ja.png'></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}