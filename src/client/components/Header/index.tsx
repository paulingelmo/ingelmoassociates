import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modal, { Panel } from 'components/Modal'
import styles from './Header.m.sass'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => setIsOpen(!isOpen)

  return (
    <header>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <Panel>
          <div className={styles.contactContainer}>
            <h4>Contact Us</h4>
            <p>
              <strong>Address:</strong>
              <br />
              <a href="https://www.google.com/maps/place/250+Catalonia+Ave,+Coral+Gables,+FL+33134/">
                250 Catalonia Ave, Coral Gables, FL 33134
              </a>
              <br />
              <br />
              <strong>Phone:</strong>
              <br />
              <a href="tel:+13054616009">(305) 461-6009</a>
              <br />
              <br />
              <strong>Email:</strong>
              <br />
              <a href="mailto:pingelmo@ingelmo.biz">pingelmo@ingelmo.biz</a>
            </p>
          </div>
        </Panel>
      </Modal>
      <div className={styles.logo}>
        <img src="images/logo_ia.png" />
      </div>
      <div className={styles.actions}>
        <NavLink activeClassName={styles.active} exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName={styles.active} to="/clients">
          Clients
        </NavLink>
        <button onClick={toggleIsOpen}>Contact Us</button>
      </div>
    </header>
  )
}

export default Header
