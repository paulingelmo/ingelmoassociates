import React from 'react'
import styles from './Footer.m.sass'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.copyright}>
        All Rights Reserved © Ingelmo Associates {new Date().getFullYear()}
      </div>
      <div className={styles.attribution}>
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/pause08" title="Pause08">
          Pause08
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  )
}

export default Footer
