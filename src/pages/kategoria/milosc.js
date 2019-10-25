import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '100px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '50px'}}>miłość</h1>
          <p style={{fontStyle: 'italic', fontSize: '14px'}}>
          Zgodnie z definicją miłość to głębokie<br>
          </br> uczucie do drugiej osoby, któremu zwykle<br>
          </br> towarzyszy pożądanie, silna więź, jaka<br>
          </br> łączy ludzi sobie bliskich. To rodzaj<br>
          </br> uczucia, typ relacji międzyludzkich,<br>
          </br> zachowań i postaw.
          </p>
          <p style={{opacity: '0.6', fontSize: '12px', marginTop: '5px', fontFamily: 'Lato', fontWeight: '300'}}>
          Myśląc o kategorii miłość dajemy sobie czas <br></br>
          na zastanowienie się czym miłość jest sama w sobie. <br></br>
          Czasami są to ludzie, których kochamy, innym razem <br></br>
          relacje jakie chcemy budować.<br></br>
          Niekiedy uroczystości, uczucia i czynności.<br></br> 
          Miłość może być zarówno duchowa, jak i emocjonalna,<br></br>
          rodzicielska czy materialna. 
          </p>
         </div>
         <div className="column is-6">
           <img src='/img/kategorie/milosc.png'></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}