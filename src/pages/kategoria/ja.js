import React from 'react'
import Layout from '../../components/Layout'
import Category from '../../components/Category';

export default () => {
  return (
    <Category
      imgName='ja'
      categoryName='ja'
      description={<>Wyobrażenie oraz koncepcja na swój<br></br>
                temat. Subiektywna wizja siebie.</>}
      details={<>To ewidentnie najważniejsza kategoria. Związana<br></br>
                jest ona bezpośrednio z tobą i twoją wizją siebie.<br></br>
                 To wyobrażenie tego kim chciałbyś być, będąc<br></br>
                  swoją najlepszą wersją. To nawyki, które<br></br>
                   pragniesz wprowadzić oraz cechy, które chcesz<br></br>
                    pielęgnować. To ty będący dumnym, pewnym<br></br>
                     i kochającym siebie.</>}>
    </Category>
    // <Layout>
    //  <div className="container" style={{marginBottom: '50px', marginTop: '50px', marginRight: '-48px'}}>
    //    <div className="columns">
    //      <div className="column is-narrow is-offset-1">
    //       <h1 style={{fontSize: '40px', fontWeight: 'bold', marginTop: '150px'}}>ja</h1>
    //       <p style={{fontStyle: 'italic', fontSize: '14px'}}>
    //       Wyobrażenie oraz koncepcja na swój<br></br>
    //        temat. Subiektywna wizja siebie.
    //       </p>
    //       <p style={{opacity: '0.6', fontSize: '12px', marginTop: '5px', fontFamily: 'Lato', fontWeight: '300'}}>
    //       To ewidentnie najważniejsza kategoria. Związana<br></br>
    //        jest ona bezpośrednio z tobą i twoją wizją siebie.<br></br>
    //         To wyobrażenie tego kim chciałbyś być, będąc<br></br>
    //          swoją najlepszą wersją. To nawyki, które<br></br>
    //           pragniesz wprowadzić oraz cechy, które chcesz<br></br>
    //            pielęgnować. To ty będący dumnym, pewnym<br></br>
    //             i kochającym siebie. 
    //       </p>
    //      </div>
    //      <div className="column is-8">
    //        <img src='/img/kategorie/ja.png'></img>
    //      </div>
    //    </div>
    //  </div>
    // </Layout>
  )
}