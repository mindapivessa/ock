'use client'

import { useState } from 'react'
import { WalletButton } from './wallet-button'
import { WalletDetailsContainer } from './wallet-details-container'

export function Wallet() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => {
    if (isOpen) {
      setIsVisible(false)
      setTimeout(() => setIsOpen(false), 300) // Match the animation duration
    } else {
      setIsOpen(true)
      setIsVisible(true)
    }
  }

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => setIsOpen(false), 300) // Match the animation duration
  }

  return (
    <div className="relative">
      <WalletButton onClick={handleToggle} isOpen={isOpen} />
      {isOpen && <WalletDetailsContainer onClose={handleClose} isVisible={isVisible} />}
    </div>
  )
}