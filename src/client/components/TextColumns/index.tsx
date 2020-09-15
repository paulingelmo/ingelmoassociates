import React from 'react'
import styles from './TextColumns.m.sass'

interface TextColumnsProps {
  items: {
    source: string
    description: React.ReactNode
  }[]
}

const TextColumns: React.FC<TextColumnsProps> = ({ items }) => {
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
              <div className={styles.textBox}>{item.description}</div>
            </div>
          ) : null
        })}
      </div>
    </div>
  )
}

export default TextColumns
