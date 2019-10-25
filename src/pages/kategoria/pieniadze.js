import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '100px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '50px'}}>pieniądze</h1>
          <p style={{fontStyle: 'italic', fontSize: '14px'}}>
          To materialny, bądź niematerialny środek<br></br>
           płatniczy, który można wymienić na<br></br> 
           usługę lub towar. 
          </p>
          <p style={{opacity: '0.5', fontSize: '12px', marginTop: '5px'}}>
          Pieniądze to kategoria, w której należy zawrzeć<br></br>
           wszystkie rzeczy, które można kupić. To te<br></br>
            marzenia, które możesz dotknąć i realnie je mieć.<br></br>
             To również kategoria o której musisz wiedzieć, że<br></br>
              urzeczywistnia się najszybciej. To znaczy, że<br></br>
               większość materialnych rzeczy, które pragniesz<br></br>
                mieć staje się faktem. 
          </p>
         </div>
         <div className="column is-6">
           <img src='/img/kategorie/pieniadze.png'></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}