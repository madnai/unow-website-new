import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '50px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '100px'}}>praca</h1>
          <p style={{fontStyle: 'italic'}}>
          To miara wysiłku włożonego przez<br>
          </br> człowieka w stworzenie danego dobra;<br>
          </br> świadoma czynność polegająca na<br>
          </br> tworzeniu, wytwarzaniu lub odtwarzaniu.
          </p>
         </div>
         <div className="column is-6">
           <img src='/img/kategorie/praca.png'></img>
         </div>
       </div>
     </div>
    </Layout>
  )
}