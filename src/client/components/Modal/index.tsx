import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import { Portal } from 'react-portal'
import styles from './Modal.m.sass'

interface Props {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<Props> = ({ children, className, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const close = () => {
    if (onClose) {
      onClose()
    }
  }

  const onClickOutside = (event: MouseEvent | TouchEvent) => {
    if (!modalRef.current || modalRef.current.contains(event.target as Node)) {
      return
    }

    if (
      !buttonRef.current ||
      buttonRef.current.contains(event.target as Node)
    ) {
      return
    }

    close()
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', onClickOutside)
      document.addEventListener('touchstart', onClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('touchstart', onClickOutside)
    }
  }, [isOpen, onClickOutside])

  return (
    <Portal>
      {isOpen && (
        <div className={cx(styles.modal, className)}>
          <div className={styles.modalBackground} />
          <div className={styles.modalContainer} ref={modalRef}>
            {children}
          </div>
          <button
            className={styles.modalButton}
            onClick={() => close()}
            ref={buttonRef}
          >
            <div className={styles.icon}>
              <img src="images/ic_close.svg" />
            </div>
          </button>
        </div>
      )}
    </Portal>
  )
}

export default Modal

export const Panel: React.FC = ({ children }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.panelContainer}>{children}</div>
    </div>
  )
}
