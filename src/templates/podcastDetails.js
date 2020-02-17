import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ReactAudioPlayer from 'react-audio-player';
import readingTime from 'reading-time';
import Skeleton from 'react-loading-skeleton';

export default class PodcastDetails extends React.Component {


  render() {

    const podcast = this.props.data.anchorEpisode;
    const stats = readingTime(podcast.content)
    return (
      <Layout>
        <section style={{ marginTop: '50px', marginBottom: '30px'}}>
          <div className="container">
            <div className="content">
              <div className="columns is-centered">
                <div className="column is-6">
                  {console.log(typeof stats.minutes)}
                <p>{podcast.publishedDate} | {podcast.itunes.duration / 100} min. słuchania</p>
                  <h1 style={{marginTop: 'unset'}}>{podcast.title || <Skeleton />}</h1>
                  <img src={podcast.itunes.image} style={{marginBottom: '20px'}}/>
                  <ReactAudioPlayer
                    src={podcast.enclosure.url}
                    style={{width: '100%'}}
                    controls
                  />
                  <div dangerouslySetInnerHTML={{ __html: podcast.content }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

}

export const query = graphql`
  query PodcastDetails($podcastId: String!) {
    anchorEpisode(id: { eq: $podcastId }) {
      id
      title
      link
      content
      itunes {
        image
        duration
      }
      publishedDate: isoDate(formatString: "YYYY-MM-DD")
      enclosure {
        url
        type
        length
      }
    }
  }
`