import React, { useState, useEffect, useCallback } from 'react'
import dataTestimonials from './data.json'
import './testimonials.styles.css'

const Testimonials = () => {
  const [position, setPosition] = useState(0)
  const [direction, setDirection] = useState(true)
  const data1 = dataTestimonials
  const [element, setElement] = useState(data1[position])
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json"
    )
      .then(res => res.json())

      .then(setData);
  }, []);
  

  const handleLeft = useCallback(() => {
    if (position > 0) {
      setPosition(position - 1)
      return true
    }
    setDirection(true)
    return false
  }, [position])

  const handleRight = useCallback(() => {
    if (position < data1.length - 1) {
      setPosition(position + 1)
      return true
    }
    setDirection(false)
    return false
  }, [position, data1])

  useEffect(() => {
    setElement(data1[position])
  }, [position, data1])

  useEffect(() => {
    let intervalSlider = setInterval(() => {
      let changed = false
      if (direction) {
        changed = handleRight()
        if (!changed) handleLeft()
      } else {
        changed = handleLeft()
        if (!changed) handleRight()
      }
    }, 30000)

    return () => {
      clearInterval(intervalSlider);
    }
  }, [direction, handleRight, handleLeft])

  return (
    <React.Fragment>
      {data ? (
        <div className="testimonials-grid">
          <div className="testimonals-card">
            <h1 className="testimonials-title">
              {data.slider.reviews[0].name}
            </h1>
            <br />
            <span className="testimonials-subtitle">
              {data.slider.reviews[0].position}
            </span>
            <div className="testimonials-text">
              <p>{data.slider.reviews[0].comment}</p>
            </div>
          </div>
          <div className="left" onClick={handleLeft} />
          <div className="right" onClick={handleRight} />
          <div className="slides">
            <p>{element.slideNumber}/4</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </React.Fragment>
  );
}

export default Testimonials