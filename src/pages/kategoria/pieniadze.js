import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '50px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '100px'}}>pieniądze</h1>
          <p style={{fontStyle: 'italic'}}>
          To materialny, bądź niematerialny środek<br></br>
           płatniczy, który można wymienić na<br></br> 
           usługę lub towar. 
          </p>
         </div>
         <div className="column is-7">
           <img src='/img/pieniadze.png'></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}