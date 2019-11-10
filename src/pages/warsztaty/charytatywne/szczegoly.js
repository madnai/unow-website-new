import React from 'react';
import Layout from '../../../components/Layout'


export default () => {
    return (
      <Layout>
        <div className="section">
          <div className="columns is-mobile">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="tile">
                  <h1 className="title">
                    Warsztaty charytatywne
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5  ">
              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Co to</span> za warsztaty? </span><br></br>
              Warsztaty UNOW to tworzenie tablic marzeń, celów i pragnień. To spotkanie, podczas którego uczestnicy mają szansę w ciągu czterech godzin zastanowić czego naprawdę pragną w dziewięciu stworzonych kategoriach życia. A następnie dostają wiedzę oraz instrukcje która pozwala zrozumieć przybliżenie się realizacji marzeń. <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Do kogo</span> są skierowane? </span><br></br>
              Warsztaty UNOW skierowane są do wszystkich ludzi, którzy chcą zastanowić się czego pragną od życia oraz takich którzy chcą przybliżyć się do poznania i spełnienia swoich marzeń.<br></br><br></br>

              <span style={{fontWeight: 'bold'}}> Jaki jest <span style={{color: '#C11B30'}}>koszt?</span> </span><br></br>
              Warsztaty charytatywne są bezpłatne, natomiast warsztaty indywidualne wyceniane są personalnie. <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Ile</span> trwają? </span><br></br>
              4 godziny<br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#DA193E'}}>Potrzebne</span> materiały? </span><br></br>
              Dostarczamy wszystkie niezbędne materiały.<br></br>
              </div>
              <div className="column is-5" style={{fontSize: '25px', fontStyle: 'italic', fontWeight: 'bold', display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center'}}>
              Inwestycja w siebie to najważniejsza inwestycja jakiej możesz dokonać w życiu. 
              Nie dorówna jej żadna inwestycja finansowa , ponieważ kiedy rozwijasz swoje umiejętności coraz lepiej rozumiesz rzeczywistość i zdobywasz nowe możliwości, wtedy zyskujesz prawdziwą wolność. 
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container" style={{marginBottom: '50px', marginTop: '30px'}}>
            <div className="columns is-centered">
              <div className="column has-text-centered">
                <div className="buttons is-centered">
                <a href="mailto:unow.pl@gmail.com"><span className="button" style={{backgroundColor: '#C11B30', color: 'white'}}>
                    Jestem zainteresowany
                  </span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
}