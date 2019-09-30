import React from 'react';
import Layout from '../../components/Layout'
import MasonryGallery from '../../components/MasonryGallery'


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
                  <p style={{ textAlign: 'justify'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra est enim, tempus pulvinar augue hendrerit euismod. Aliquam ullamcorper ante at magna cursus lacinia. Aliquam id auctor leo. Suspendisse ante ipsum, tempus sit amet finibus sed, consequat id nibh. Phasellus ac enim auctor, vehicula justo quis, tempus ligula. Mauris iaculis enim in turpis pulvinar varius. Donec aliquet, dolor nec auctor fringilla, erat risus semper turpis, id dapibus metus leo non elit. Sed turpis ipsum, vehicula sit amet erat sed, consequat efficitur leo. Fusce vulputate auctor urna, id cursus augue luctus ac. Quisque varius magna in ipsum rhoncus, id commodo dolor posuere. Mauris euismod purus augue, mollis ornare erat imperdiet a.

        Nulla dapibus mi et varius semper. Cras feugiat vel dui sit amet dignissim. Ut odio felis, luctus ut vulputate a, pretium quis leo. Nulla id justo vel nulla ullamcorper egestas. Cras egestas ex sed finibus faucibus. Etiam magna eros, sodales vel finibus in, hendrerit at sem. Duis eu ipsum tempus, tempus nisi ut, auctor nulla. Morbi a porta erat. Maecenas ornare nisi quam, id facilisis leo aliquet eget. Integer sem nunc, fermentum at orci at, ullamcorper porttitor tortor.

        Nam neque risus, mattis sed turpis et, varius efficitur sem. Morbi placerat rutrum justo, vel rutrum est eleifend vitae. Donec ultrices luctus consectetur. Duis vel tellus libero. Nam fringilla turpis feugiat mi dignissim accumsan. Ut eu egestas dolor. Nam et sem vitae leo laoreet tempus. Proin ut eros nec velit sollicitudin vulputate. Donec id sem leo. Etiam tempor et erat non iaculis. Duis blandit augue quis sollicitudin scelerisque. Suspendisse sit amet enim eu nunc sodales porttitor. Suspendisse vehicula lectus sed ante gravida mattis. Nulla ullamcorper eleifend nisi ac ultrices. Vivamus luctus luctus enim, et varius tortor sodales at.
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
                <p className="button is-pulled-left" style={{marginRight: '15px'}}>Wiecej informacji</p>
                <p className="button is-pulled-right is-danger">Jestem zainteresowany</p>
              </div>
              </div>
            </div>
          </div>
        
        </section>
        </Layout>
    )
}