import React, { useRef, useState, useEffect } from 'react';

import { MasonryDiv, Col } from './masonrygallery.css';

export default function MasonryGallery({ children, minWidth = 300 }) {
  const cols = [];
  const ref = useRef();
  const [numCols, setNumCols] = useState(3);

  const calcNumCols = () => {
      
      // max columns number is 4
      console.log('offsetWidth: ', ref.current.offsetWidth)
      if(Math.floor(ref.current.offsetWidth / minWidth) >= 3) {
          setNumCols(4);
      } else {
        return setNumCols(Math.floor(ref.current.offsetWidth / minWidth));
      }
  }

  const createCols = () => {
    for (let i = 0; i < numCols; i++) cols[i] = []
    children.forEach((child, i) => cols[i % numCols].push(child))
  }

  useEffect(() => {
    calcNumCols()
    window.addEventListener(`resize`, calcNumCols)
    return () => window.removeEventListener(`resize`, calcNumCols)
  })
  createCols()

  return (
    <MasonryDiv ref={ref} gap={0}>
      {Array(numCols)
        .fill()
        .map((el, i) => (
          <Col key={i} gap={0}>
            {cols[i]}
          </Col>
        ))}
    </MasonryDiv>
  )
}