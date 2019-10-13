import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '50px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '100px'}}>podróze</h1>
          <p style={{fontStyle: 'italic'}}>
          Z definicji wiążą się ze zmiana miejsca<br></br>
           pobytu na okres stały lub tymczasowy.<br></br>
            Kojarzone są z odkrywaniem i<br></br>
             poznawaniem nowych kultur, przyrody i<br></br> 
             ludzi. 
          </p>
         </div>
         <div className="column is-6">
           <img src='/img/kategorie/podroze.png'></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}