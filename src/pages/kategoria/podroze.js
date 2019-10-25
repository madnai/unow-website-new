import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '100px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '50px'}}>podróze</h1>
          <p style={{fontStyle: 'italic', fontSize: '14px'}}>
          Z definicji wiążą się ze zmiana miejsca<br></br>
           pobytu na okres stały lub tymczasowy.<br></br>
            Kojarzone są z odkrywaniem i<br></br>
             poznawaniem nowych kultur, przyrody i<br></br> 
             ludzi. 
          </p>
          <p style={{opacity: '0.5', fontSize: '12px', marginTop: '5px'}}>
          Kategoria podróże to odzwierciedlenie marzeń <br></br>
            związanych ze zwiedzaniem nowych miejsc. <br></br>
            Odkrywaniem wspaniałej przyrody <br></br>
            i poznawaniem ciekawych ludzi. <br></br>
            W tym miejscu trzeba przemyśleć, <br></br>
            gdzie pragniesz być, <br></br>
            jakim środkiem transportu dotrzesz <br></br>
            i jak zamierzasz spędzić podróż <br></br>
            - budżetowo czy ekskluzywnie. <br></br>
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