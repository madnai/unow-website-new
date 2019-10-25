import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '100px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '50px'}}>wiedza</h1>
          <p style={{fontStyle: 'italic', fontSize: '14px'}}>
          Ogół wiadomości zdobytych dzięki<br></br> 
          badaniom, uczeniu się i zdobywaniu<br></br>
           informacji. Przydatna w różnych sferach <br></br>
           życia oraz niezbędna do nauczania.
          </p>
          <p style={{opacity: '0.6', fontSize: '12px', marginTop: '5px', fontFamily: 'Lato', fontWeight: '300'}}>
          Wiedza jest kategorią, która ściśle wiąże się <br></br> 
          z rozwojem osobistym. To wszystkie rzeczy, <br></br> 
          które pragniemy robić, aby się doskonalić. <br></br> 
          Często również są to czynności, w których<br></br> 
          sprawdzamy swoje talenty.<br></br> 
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