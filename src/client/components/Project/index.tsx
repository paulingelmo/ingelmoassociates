import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import Modal from 'components/Modal'
import { Project } from 'screens/Clients'
import styles from './Project.m.sass'

const Project: React.FC<{ project: Project }> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [updateType, setUpdateType] = useState('')
  const images = project.images

  const toggleIsOpen = () => setIsOpen(!isOpen)

  const updateIndex = (direction: 'increase' | 'decrease') => {
    let index = activeIndex
    if (direction === 'increase') {
      index < images.length - 1 ? index++ : (index = 0)
    } else if (direction === 'decrease') {
      index > 0 ? index-- : (index = images.length - 1)
    }
    setUpdateType(direction)
    setActiveIndex(index)
  }

  useEffect(() => {
    const classReset = setTimeout(() => {
      setUpdateType('')
    }, 250)
    return () => clearTimeout(classReset)
  }, [updateType])

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.modalPanel}>
          <div className={cx(styles.modalImageContainer, styles[updateType])}>
            <img
              className={styles.modalImage}
              src={images[activeIndex].source}
            />
            <p>{images[activeIndex].name}</p>
          </div>
          <div
            className={cx(styles.modalArrow, styles.left)}
            onClick={() => updateIndex('decrease')}
          >
            &larr;
          </div>
          <div
            className={cx(styles.modalArrow, styles.right)}
            onClick={() => updateIndex('increase')}
          >
            &rarr;
          </div>
        </div>
      </Modal>
      <div className={styles.project} onClick={toggleIsOpen}>
        <div
          className={styles.projectImage}
          style={{ backgroundImage: `url(${project.source})` }}
        />
        <p>{project.name}</p>
      </div>
    </>
  )
}

export default Project
