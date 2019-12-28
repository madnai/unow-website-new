import React from 'react';
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby';
// import { Flex, Heading } from 'rebass';
// import Episode from '../components/Episode';
// import ErrorMessage from '../components/ErrorMessage';
import { parseToEpisode } from '../utils/parser';
import Episode from '../components/Episode'



const EpisodesTemplate = ({ episodes = [] }) => {
  return (
    <Layout>
      <section style={{ marginTop: '20px'}}>
        <div className="container">
          <div class="columns">
            <div class="column is-10 is-offset-1">
            {episodes.length > 0 ? (
              <div>
                {episodes.map(episode => (
                  <Episode large {...episode} key={episode.id} />
                ))}
              </div>
            ) : (
              <p>
                Oops ... It seems that you didn't record any episodes yet 😕
              </p>
            )}
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  );
};

const Episodes = () => {
  const { allAnchorEpisode } = useStaticQuery(graphql`
    query EpisodesQuery {
      allAnchorEpisode(sort: { order: ASC, fields: pubDate }) {
        nodes {
          id
          title
          link
          content
          itunes {
            image
            duration
          }
          contentSnippet
          publishedDate: isoDate(formatString: "DD MMM YYYY")
          enclosure {
            url
            type
            length
          }
        }
      }
    }
  `);

  const episodes = allAnchorEpisode.nodes.map(parseToEpisode);
  return <EpisodesTemplate episodes={episodes} />;
};

export default Episodes;
