import React from 'react';
import Layout from '../../components/Layout'
import MasonryGallery from '../../components/MasonryGallery'
import { Link } from 'gatsby'


export default () => {
    return (
        <Layout>
        
          <section style={{marginTop: '-100px'}}> {/* TODO: ustaw margines w innym miejscu */}
            <MasonryGallery>
              <img src="https://unsplash.it/700/500?image=1" className="masonry-img" alt="Masonry Brick #1" width="100%" height="400px;"/>
              <img src="https://unsplash.it/700/900?image=25" className="masonry-img" alt="Masonry Brick #2" width="100%" height="200px;"/>     
              <img src="https://unsplash.it/700/900?image=46" className="masonry-img" alt="Masonry Brick #3" width="100%" height="220px"/>     
              <img src="https://unsplash.it/700/900?image=38" className="masonry-img" alt="Masonry Brick #4" width="100%" height="220px"/>     
              <img src="https://unsplash.it/700/900?image=57" className="masonry-img" alt="Masonry Brick #5" width="100%" height="160px"/>     
              <img src="https://unsplash.it/700/900?image=78" className="masonry-img" alt="Masonry Brick #6" width="100%" height="450px"/>     
              <img src="https://unsplash.it/700/900?image=34" className="masonry-img" alt="Masonry Brick #7" width="100%" height="150px"/>     
              <img src="https://unsplash.it/700/900?image=33" className="masonry-img" alt="Masonry Brick #8" width="100%" height="320px"/>    
              <img src="https://unsplash.it/700/900?image=2" className="masonry-img" alt="Masonry Brick #8" width="100%" height="100px" style={{height: '145px'}}/>     
            </MasonryGallery>
        </section>
        <section>
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <p style={{ textAlign: 'justify', fontFamily: 'Lato'}}>
                  Bardzo wierzymy, że wszyscy ludzie mają jakieś pragnienia. Każdy o czymś marzy, coś sobie wyobraża, czegoś pragnie. Jednak kiedy wychowujemy się w rodzinie mamy większe możliwości do realizacji nawet mały rzeczy. Ktoś o nas dba, komuś zależy, dostajemy prezenty na różne okazje, rodzice inwestują w nas nie tylko swój cenny czas, ale i pieniądze w nasz rozwój. My mieliśmy to szczęście, dlatego Damian został wykształconym programistą oraz zdolnym muzykiem, a Kasia ukończyła łódzką szkołę filmową produkując filmy i seriale, podróżując i ucząc się nowych rzeczy. Zdajemy sobie jednak sprawę, że nie każdy ma tyle farta, ale każdy ma szansę uwierzyć w to, że życie może być lepsze.  Jedno to wsparcie, ale drugie to, że w tych pędzących czasach mało kto ma szansę zatrzymać się i zastanowić się czego tak naprawdę chcę, w różnych kategoriach życia. 
                  Zorganizowaliśmy kilka warsztatów dla dorosłych, którzy zmienili swoje podejście i rzeczy, o których zamarzyli zaczęły się spełniać. 
                  Nie jest to żadna magia, udowodnione jest bowiem naukowo, że nasza percepcja oraz mózg niezwykle silnie odziałowują na obrazy.  Sprawia to, że jeśli zaczynamy się przywiązywać do obrazów, wizualizujemy oraz wyobrażamy sobie poczucie posiadania rzeczy, których pragniemy. To w efekcie końcowym powoduje, że przyciągamy rzeczy, o których intensywnie myślimy. 
                  Chcemy aby dzieciaki dostały czas, w którym pomyślą czego chciałby od życia na tym etapie w konkretnych kategoriach. Zdajemy sobie sprawę z różnych grup wiekowych, dlatego dostosowujemy warsztaty do wieku dzieci. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container" style={{marginBottom: '50px', marginTop: '30px'}}>
            <div className="columns is-centered">
              <div className="column has-text-centered is-4">
              <div className="field">
              <Link to="/warsztaty/szczegoly"><p className="button is-pulled-left" style={{marginRight: '15px'}}>Wiecej informacji</p></Link>
                <p className="button is-pulled-right is-danger">Jestem zainteresowany</p>
              </div>
              </div>
            </div>
          </div>
        
        </section>
        </Layout>
    )
}