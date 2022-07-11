import React, { useState } from "react"
import { Data } from "./Data"

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // step 2:
  // check the index of slide
  const checkIndex = (position) => {
    if (position > Data.length - 1) {
      return 0
    } else if (position < 0) {
      return Data.length - 1
    }
    return position
  }

  // step 1:
  const nextSlide = () => {
    setCurrentSlide(() => {
      let newSlide = currentSlide + 1
      //  return newSlide
      return checkIndex(newSlide)
    })
  }
  const prevSlide = () => {
    setCurrentSlide(() => {
      let newSlide = currentSlide - 1
      //  return newSlide
      return checkIndex(newSlide)
    })
  }
  return (
    <>
      <section>
        <div className='items'>
          {Data.map((slider, index) => {
            const { slide, image } = slider
            return (
              <>
                {index === currentSlide && (
                  <div className='slide'>
                    <h2>Slide {slide}</h2>
                    <div className='img'>
                      <img src={image} alt='' />
                    </div>
                  </div>
                )}
                <div className='button'>
                  <button className='next' onClick={nextSlide}>
                    <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
                  <button className='prev' onClick={prevSlide}>
                    <i className='fa fa-long-arrow-alt-left'></i>
                  </button>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Slide
