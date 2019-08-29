import React, { useState, useEffect, useCallback } from 'react'
import dataTestimonials from './data.json'
import './testimonials.styles.css'

const Testimonials = () => {
  const [position, setPosition] = useState(0)
  const [direction, setDirection] = useState(true)
  const data = dataTestimonials
  const [element, setElement] = useState(data[position])

  const handleLeft = useCallback(() => {
    if (position > 0) {
      setPosition(position - 1)
      return true
    }
    setDirection(true)
    return false
  }, [position])

  const handleRight = useCallback(() => {
    if (position < data.length - 1) {
      setPosition(position + 1)
      return true
    }
    setDirection(false)
    return false
  }, [position, data])

  useEffect(() => {
    setElement(data[position])
  }, [position, data])

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
      <div className="testimonials-grid">
        <div className="testimonals-card">
          <h1 className="testimonials-title">{element.title}</h1>
          <br />
          <span className="testimonials-subtitle">{element.position}</span>
          <div className="testimonials-text">
            <p>{element.text}</p>
          </div>
        </div>
        <div className="left" onClick={handleLeft} />
        <div className="right" onClick={handleRight} />
        <div className="slides">
          <p>{element.slideNumber}/4</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Testimonials