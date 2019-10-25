import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '100px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '50px'}}>rodzina</h1>
          <p style={{fontStyle: 'italic', fontSize: '14px'}}>
          Podstawowa, pierwotna, mała grupa <br></br>
          społeczna składająca się z rodziców, ich<br></br>
           dzieci (także adoptowanych) i krewnych.
          </p>
          <p style={{opacity: '0.6', fontSize: '12px', marginTop: '5px', fontFamily: 'Lato', fontWeight: '300'}}>
          Rodzina to kategoria pokazująca więzi <br></br>
          z ludźmi, których kochasz. To również obraz miejsca,<br></br>
          w którym czujesz się dobrze i bezpiecznie oraz <br></br>
          relacje jakie chcesz budować z tymi ludźmi.<br></br>
          </p>
         </div>
         <div className="column is-6">
           <img src='/img/kategorie/rodzina.png'></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}