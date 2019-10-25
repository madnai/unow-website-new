import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '100px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '50px'}}>pasja</h1>
          <p style={{fontStyle: 'italic', fontSize: '14px'}}>Czynnosc wykonywana dla relaksu w <br></br>
            czasie wolnym o obowiązków.<br></br>
            Moze łączyć się ze zdobywaniem<br></br>
            wiedzy w danej dziedzinie.
          </p>
          <p style={{opacity: '0.6', fontSize: '12px', marginTop: '5px', fontFamily: 'Lato', fontWeight: '300'}}>
          Kategoria pasja to zastanowienie się nad tym, co<br></br>
           w naszym życiu robimy, tylko dlatego, że sprawia<br></br>
            nam to przyjemność. Wykonując to czujemy się<br></br>
             wolni i szczęśliwi. Często pasja dodaje nam<br></br>
              energii i siły. <br></br>
            Może być ona związana z pracą, którą<br></br>
            wykonujemy, lub wręcz przeciwnie być<br></br>
              odskocznią od codzienności. <br></br>
          </p>
         </div>
         <div className="column is-6">
           <img src='/img/kategorie/pasja.png'></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}