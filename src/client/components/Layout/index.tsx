import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import styles from './Layout.m.sass'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layoutContainer}>
        <Header />
        <div className={styles.page}>{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
