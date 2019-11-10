import React from 'react';
import Layout from '../../../components/Layout'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  buttonDanger: {
    margin: theme.spacing(1),
    backgroundColor: '#C5002E',
    color: 'white',
    '&:hover': {
      backgroundColor: '#9d0024',
      color: 'white'
    },
    textTransform: 'none'
  },
  buttonBlack: {
    margin: theme.spacing(1),
    backgroundColor: '#000000',
    color: 'white',
    '&:hover': {
      backgroundColor: '#4c4c4c',
      color: 'white'
    },
    textTransform: 'none'
  },
  input: {
    display: 'none',
  },
}));

export default () => {
  const classes = useStyles();


    return (
        <Layout>
        
        <section style={{marginTop: '50px', marginBottom: '50px'}}> {/* TODO: ustaw margines w innym miejscu */}
          <img src="/img/charytatywne-full.png"></img>
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
              <div className="column has-text-centered ">
                <Link to="/warsztaty/charytatywne/szczegoly">
                  <Button className={classes.buttonBlack} size="large" >Wiecej informacji</Button>
                </Link>
                <a href="mailto:unow.pl@gmail.com">
                  <Button className={classes.buttonDanger}  size="large">Jestem zainteresowany</Button>
                </a>
              </div>
            </div>
          </div>
        
        </section>
        </Layout>
    )
}