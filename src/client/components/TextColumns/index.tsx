import React from 'react'
import cx from 'classnames'
import styles from './TextColumns.m.sass'

interface TextColumnsProps {
  items: {
    source: string
    description: React.ReactNode
  }[]
  inverted?: boolean
}

const TextColumns: React.FC<TextColumnsProps> = ({
  items,
  inverted = false
}) => {
  return (
    <div className={styles.textColumns}>
      <div className={styles.textColumnsContainer}>
        {items.map((item, index) => {
          return index < 3 ? (
            <div className={styles.textColumn} key={index}>
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

export default TextColumns
