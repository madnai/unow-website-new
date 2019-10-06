import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '50px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '100px'}}>miłość</h1>
          <p style={{fontStyle: 'italic'}}>
          Zgodnie z definicją miłość to głębokie<br>
          </br> uczucie do drugiej osoby, któremu zwykle<br>
          </br> towarzyszy pożądanie, silna więź, jaka<br>
          </br> łączy ludzi sobie bliskich. To rodzaj<br>
          </br> uczucia, typ relacji międzyludzkich,<br>
          </br> zachowań i postaw.
          </p>
         </div>
         <div className="column is-7">
           <img src='/img/kategorie/milosc.png'></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}