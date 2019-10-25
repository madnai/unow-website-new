import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '100px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '50px'}}>przyjaciele</h1>
          <p style={{fontStyle: 'italic', fontSize: '14px'}}>
          Osoby pozostające z kimś w bliskich,<br></br>
           serdecznych stosunkach. Ludzie na<br></br>
            których można polegać i liczyć na ich<br></br>
             wsparcie. 
          </p>
          <p style={{opacity: '0.5', fontSize: '12px', marginTop: '5px'}}>
          Przyjaciele to bliscy, bez których nie wyobrażamy<br></br>
           sobie życia. Ta kategoria zawiera wszystkie<br></br>
            stworzenia, z którymi czujesz więź. Tych na<br></br>
             których ci zależy oraz tych dla których ty jesteś<br></br>
              ważny. Warto tu również skupić się na relacjach,<br></br>
               jakie chcesz odczuwać i wydarzeniach w jakich<br></br>
                chcesz uczestniczyć. 
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