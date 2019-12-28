import React, { useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';

// import * as PodcastTypes from '../types/Podcast';
// import AudioPlayer from './AudioPlayer';
// import { Card, Text, Box, Flex, Heading } from 'rebass';
// import styled, { ThemeContext } from 'styled-components';
// import moment from 'moment';

// const numberToDuration = (seconds) =>
//   moment.duration(seconds, 'seconds').humanize();

// const EpisodeTitle = styled(Heading)`
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
// `;

const Episode = ({
  title,
  link,
  publishedDate,
  cover,
  url,
  content,
  duration,
  large,
}) => {

  return (
    <div className="box" style={{marginBottom: '20px', marginTop: '20px'}}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128" style={{width: '128px'}}>
            {console.log('image ', content)}
            <img src={cover} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <h3 className="title">{title}</h3> 
          
              <div dangerouslySetInnerHTML={{ __html: content.substring(0, 250) }} />
            </p>
          </div>
          <ReactAudioPlayer
            src={url}
            controls
          />
        </div>
      </article>
    </div>

  );
};

export default Episode;
