import React from 'react'
import Layout from '../../components/Layout'


export default () => {
  return (
    <Layout>
     <div className="container" style={{marginBottom: '50px', marginTop: '100px'}}>
       <div className="columns">
         <div className="column is-4 is-offset-1">
          <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '50px'}}>praca</h1>
          <p style={{fontStyle: 'italic', fontSize: '14px'}}>
          To miara wysiłku włożonego przez<br>
          </br> człowieka w stworzenie danego dobra;<br>
          </br> świadoma czynność polegająca na<br>
          </br> tworzeniu, wytwarzaniu lub odtwarzaniu.
          </p>
          <p style={{opacity: '0.5', fontSize: '12px', marginTop: '5px'}}>
          Praca kojarzy się z sumiennością, rzetelnością,<br></br>
           wysiłkiem oraz wynagrodzeniem. To czynność, w<br></br>
            której zazwyczaj jesteśmy ekspertami. Praca to<br></br>
             również miejsce, w którym spędzamy większość <br></br>
             swojego czasu oraz ludzie, którymi się otaczamy.<br></br>
              Dlatego tak ważne jest zastanowienie się gdzie i<br></br>
              z kim chcemy pracować. 
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