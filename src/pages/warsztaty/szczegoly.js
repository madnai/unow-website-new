import React from 'react';
import Layout from '../../components/Layout'
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
                    Warsztaty 
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="columns is-centered" style={{margin: '0 100px 0 100px'}}>
              <div className="column is-5  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo metus, iaculis sit amet enim et, congue rhoncus nisi. Donec sagittis hendrerit mi. Pellentesque tortor massa, aliquet a venenatis sit amet, auctor vel ante. Sed posuere neque eros, ut rhoncus elit cursus vel. Mauris non ante sed felis consequat vulputate. Quisque pretium arcu at velit volutpat, accumsan tincidunt mi pretium. Etiam eget eleifend tortor. Suspendisse ultricies id ex quis convallis. Integer leo ipsum, mattis sit amet molestie eget, tempus vel odio. Fusce ut ultrices eros, non ullamcorper ligula. Aliquam vitae vulputate orci. Suspendisse hendrerit iaculis sapien, ut dignissim neque scelerisque eget. Nunc vel nulla ac nulla tempus iaculis ac vitae dui. Pellentesque placerat sapien lectus.

                Etiam eget nibh luctus sapien posuere molestie. Etiam posuere eu dui eget feugiat. Aenean pretium fermentum ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus scelerisque odio leo, ac imperdiet ex vulputate quis. Etiam tincidunt nisl in leo efficitur viverra. Duis consectetur tincidunt consectetur. Quisque nec tellus dolor. Ut sagittis lacinia ex sit amet aliquam. Proin eget efficitur odio. Nulla molestie faucibus augue, sit amet laoreet nibh bibendum sit amet. Nunc facilisis libero quis sem bibendum faucibus. Vestibulum quis egestas erat. Aenean vel aliquet lectus. Pellentesque malesuada, orci sed iaculis luctus, dolor urna semper tellus, sed tincidunt turpis massa lacinia dui.
              </div>
              <div className="column is-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo metus, iaculis sit amet enim et, congue rhoncus nisi. Donec sagittis hendrerit mi. Pellentesque tortor massa, aliquet a venenatis sit amet, auctor vel ante. Sed posuere neque eros, ut rhoncus elit cursus vel. Mauris non ante sed felis consequat vulputate.         
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container" style={{marginBottom: '50px', marginTop: '30px'}}>
            <div className="columns is-centered is-mobile">
              <div className="column has-text-centered">
                <div className="buttons is-centered">
                  <span className="button is-danger">
                    Jestem zainteresowany
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
}