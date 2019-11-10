import React from 'react';
import Layout from '../../components/Layout'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  buttonDanger: {
    margin: theme.spacing(1),
    backgroundColor: '#C5002E',
    color: 'white',
    textTransform: 'none'
  },
  buttonBlack: {
    margin: theme.spacing(1),
    backgroundColor: '#000000',
    color: 'white',
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
            <img src="/img/indywidualne-full.png"></img>
        </section>
        <section>
          <div className="container" >
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
              <div className="column has-text-centered">
                <Button className={classes.buttonBlack} size="large" >Wiecej informacji</Button>
                <Button className={classes.buttonDanger}  size="large">Jestem zainteresowany</Button>
              </div>
            </div>
          </div>
        
        </section>
        </Layout>
    )
}