import React from 'react';
import Layout from '../../components/Layout'
import MasonryGallery from '../../components/MasonryGallery'
import { Link } from 'gatsby'


export default () => {
    return (
        <Layout>
          <div className="section">
            <div className="columns is-mobile">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">
                      Warsztaty indywidualne
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div className="columns is-mobile">
              <div className="column is-10 is-offset-1 ">
                <div className="content">
                  <p style={{ textAlign: 'justify', fontFamily: 'Lato'}}>
                  Żyjemy w czasach, które sprawiają, że jesteśmy wciąż zabiegani. Nasze życie ogranicza się często do pracy i snu. Zazwyczaj nie mamy czasu zatrzymać się i zastanowić czego właściwie pragniemy w życiu. Ograniczają nas obowiązki, finanse i możliwości. Dorosłe życie pozbawia nas dziecięcej wiary w to, że wszystko jest możliwe. Wielokrotnie poświęcamy się dla innych zapominając o własnych potrzebach. Przytłoczeni przez problemy żyjemy od weekendu do weekendu. Przeprowadziliśmy dziesiątki rozmów z ludźmi, które pozwoliły nam zrozumieć w czym leży problem. Każdy człowiek bowiem potrzebuje być wysłuchany i zrozumiany, potrzebuje czasu i zaangażowania, aby odnaleźć w życiu rzeczy, które go cieszą i sprawiają, że jest szczęśliwy. Większość z nas potrzebuje również wsparcia i planu działania. A następnie motywacji i wiary, żeby osiągać rzeczy, które zaplanował. Tak powstały warsztaty indywidualne. 
                  Mają one na celu indywidualną pracę poświęconą wytyczeniu celów, zaplanowaniu oraz organizacji zadań, a następnie wsparciu i motywacji w ich realizacji. Wspólnie opracujemy strategię działania, znajdziemy najlepsze i ekonomiczne rozwiązania. Zdobędziemy całą wiedzę merytoryczną potrzebną do realizacji twoich marzeń oraz dotrzemy do odpowiednich ekspertów. 
                  Dzięki narzędziom, którymi dysponujemy m.in planner, nie tylko zorganizujemy czas, ale i zaplanujemy kolejne etapy przybliżające cię do realizacji celów. 
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