import React from 'react'
import cx from 'classnames'
import styles from './FeatureColumns.m.sass'

interface FeatureColumnsProps {
  items: {
    source: string
    description: React.ReactNode
  }[]
  inverted?: boolean
}

const FeatureColumns: React.FC<FeatureColumnsProps> = ({
  items,
  inverted = false
}) => {
  return (
    <div className={styles.featureColumns}>
      <div className={styles.featureColumnsContainer}>
        {items.map((item, index) => {
          return index < 3 ? (
            <div className={styles.featureColumn} key={index}>
              <div
                className={styles.imageBox}
                style={{
                  backgroundImage: item.source ? `url(${item.source})` : 'none'
                }}
              />
              <div className={cx(styles.textBox, inverted && styles.inverted)}>
                {item.description}
              </div>
            </div>
          ) : null
        })}
      </div>
    </div>
  )
}

export default FeatureColumns
