import { useState } from 'react';
import {TfiArrowCircleLeft,TfiArrowCircleRight } from 'react-icons/tfi';
export default function Headermain() {
  const [current,setCurrent] = useState(0)
  return (
    <div className="slider-container">
      <TfiArrowCircleLeft className="prev" onClick={() => {
        current < 100 ? setCurrent(500) : setCurrent(current - 100)
      }}/>
      <TfiArrowCircleRight className="next" onClick={() => {
        current > 400 ? setCurrent(0) : setCurrent(current + 100)
      }}/>
      <div className="slider" style={{left: `-${current}%`}}>
        <div className="slider-item"></div>
        <div className="slider-item"></div>
        <div className="slider-item"></div>
        <div className="slider-item"></div>
        <div className="slider-item"></div>
        <div className="slider-item"></div>
      </div>
    </div>
  )
  
}
