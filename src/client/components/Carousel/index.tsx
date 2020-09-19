import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { debounce } from 'utils/debounceUtil'
import styles from './Carousel.m.sass'

interface CarouselProps {
  carouselItems: CarouselItem[]
  itemWidth?: number
  itemHeight?: number
  tick?: number
}

interface CarouselItem {
  name: string
  caption?: string
  source: string
  link?: string
}

const Carousel: React.FC<CarouselProps> = ({
  carouselItems,
  itemWidth = 300,
  itemHeight = 200,
  tick = 1000
}) => {
  const calcLength = () => {
    return Math.round(window.innerWidth / (itemWidth + 30)) + 2
  }

  const [activeIndex, setActiveIndex] = useState(0)
  const [activeLength, setActiveLength] = useState(calcLength())
  const [activeArray, setActiveArray] = useState(carouselItems)
  const [isPaused, setIsPaused] = useState(true)

  const carousel = useRef<HTMLDivElement>(null)

  const toggleIsPaused = () => {
    setIsPaused(!isPaused)
  }

  const advanceIndex = (index: number, maxLength: number) => {
    return index + 1 < maxLength ? index + 1 : (index + 1) % maxLength
  }

  const selectItem = (index: number) => {
    console.log('selectItem', index)
    const itemIndex = activeIndex + index
    return itemIndex < carouselItems.length
      ? carouselItems[itemIndex]
      : carouselItems[itemIndex % carouselItems.length]
  }

  const calcArray = () => {
    console.log('calcArray')
    const array = []
    for (let i = 0; i < activeLength; i++) {
      array.push(selectItem(i))
    }
    return array
  }

  const resizeListener = () => {
    setActiveLength(calcLength())
  }

  const animationListener = () => {
    setActiveIndex(advanceIndex(activeIndex, activeLength))
  }

  useEffect(() => {
    window.addEventListener('resize', debounce(resizeListener))
    setActiveLength(calcLength())
    return () => {
      window.removeEventListener('resize', debounce(resizeListener))
    }
  }, [])

  useEffect(() => {
    console.log('[activeIndex, activeLength]', activeIndex, activeLength)
    setActiveArray(calcArray())
    if (carousel.current) {
      const firstCarouselItem = carousel.current.childNodes[0] as HTMLDivElement
      firstCarouselItem.addEventListener(
        'animationiteration',
        animationListener
      )
      return () => {
        firstCarouselItem.removeEventListener(
          'animationiteration',
          animationListener
        )
      }
    }
  }, [activeIndex, activeLength])

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div
          id={styles.carousel}
          ref={carousel}
          style={
            {
              '--itemWidth': `${itemWidth}px`,
              '--itemHeight': `${itemHeight}px`,
              '--tick': `${tick}ms`,
              '--pauseState': isPaused ? 'paused' : 'running'
            } as React.CSSProperties
          }
        >
          {activeArray.map((item, index) => (
            <div className={styles.carouselItem} key={index}>
              {item.link ? (
                <Link to={item.link}>
                  <img src={item.source} />
                </Link>
              ) : (
                <img src={item.source} />
              )}
            </div>
          ))}
        </div>
        <button onClick={() => toggleIsPaused()}>Pause</button>
      </div>
    </div>
  )
}

export default Carousel
