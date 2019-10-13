import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '50px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '100px'}}>przyjaciele</h1>
          <p style={{fontStyle: 'italic'}}>
          Osoby pozostające z kimś w bliskich,<br></br>
           serdecznych stosunkach. Ludzie na<br></br>
            których można polegać i liczyć na ich<br></br>
             wsparcie. 
          </p>
         </div>
         <div className="column is-6">
           <img src='/img/kategorie/przyjaciele.png'></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}