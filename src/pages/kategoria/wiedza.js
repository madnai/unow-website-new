import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '50px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '100px'}}>wiedza</h1>
          <p style={{fontStyle: 'italic'}}>
          Ogół wiadomości zdobytych dzięki<br></br> 
          badaniom, uczeniu się i zdobywaniu<br></br>
           informacji. Przydatna w różnych sferach <br></br>
           życia oraz niezbędna do nauczania.
          </p>
         </div>
         <div className="column is-6">
           <img src='/img/kategorie/wiedza.png'></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}