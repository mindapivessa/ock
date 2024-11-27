'use client'

import { useState, useRef, useEffect } from 'react'
import { TokenChip } from './token-chip'
import { PaymentOption } from './payment-options'
import { Spinner } from '../spinner'
import { CreditCard, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: { 
    opacity: 0, 
    y: -10, 
    transition: { 
      duration: 0.3, 
      ease: [0.4, 0.0, 0.2, 1] 
    } 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.15, 
      ease: [0.4, 0.0, 0.2, 1] 
    }
  }
}

const buttonContentVariants = {
  initial: { 
    opacity: 0,
    scale: 0.9,
  },
  animate: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.05,
      ease: [0.2, 0.0, 0.2, 0.4]
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.1,
      ease: [0.2, 0.0, 0.2, 0.4]
    }
  }
}

export function Onramp() {
  const [amount, setAmount] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [countdown, setCountdown] = useState(30)
  const [flicker, setFlicker] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleBuyClick = () => {
    if (isExpanded) {
      setIsVisible(false)
      setTimeout(() => setIsExpanded(false), 300)
    } else {
      setIsExpanded(true)
      setIsVisible(true)
    }
  }

  const handlePaymentSelect = () => {
    setIsLoading(true)
    setIsVisible(false)
    setTimeout(() => {
      setIsExpanded(false)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000) // Simulate loading duration
    }, 300) // Match the animation duration
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsVisible(false)
        setTimeout(() => setIsExpanded(false), 300)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          setFlicker(true)
          setTimeout(() => setFlicker(false), 500) // Flicker effect duration
          return 30 // Reset countdown
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const calculateAmounts = (inputAmount: string) => {
    const numAmount = parseFloat(inputAmount) || 0
    return {
      usdc: numAmount.toFixed(2),
      eth: (numAmount * 0.001).toFixed(6),
      usd: numAmount.toFixed(2)
    }
  }

  const { usdc, eth } = calculateAmounts(amount)

  return (
    <div className="w-full max-w-md mx-auto space-y-3">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full py-3 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-black dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent"
            placeholder="0"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <TokenChip
              icon="/everyone.svg"
              symbol="EVERYONE"
            />
          </div>
        </div>
        <button
          onClick={handleBuyClick}
          disabled={isLoading}
          className="py-3 px-8 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-[104px] relative"
          aria-expanded={isExpanded}
          aria-controls="payment-options"
        >
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="spinner"
                  variants={buttonContentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Spinner />
                </motion.div>
              ) : isExpanded ? (
                <motion.div
                  key="close"
                  variants={buttonContentVariants}
                  initial="exit"
                  animate="animate"
                  exit="exit"
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="buy"
                  variants={buttonContentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  Buy
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            id="payment-options"
            ref={dropdownRef}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            exit="hidden"
            className="relative transform-gpu z-50"
          >
            <div className={`
              absolute right-0 w-3/4
              ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}
            `}>
              <div className="ml-auto w-[calc(75%+88px)] bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-lg overflow-hidden">
                <div className="pt-4 px-4">
                  <h2 className="text-base font-semibold text-black dark:text-zinc-100">Buy with</h2>
                </div>
                <div className="p-2">
                  <PaymentOption
                    icon="/usdc.svg"
                    amount={usdc}
                    label="USDC"
                    balance="45.44 USDC"
                    onClick={handlePaymentSelect}
                  />
                  <PaymentOption
                    icon="/eth.svg"
                    amount={eth}
                    label="ETH"
                    balance="15.23 ETH"
                    onClick={handlePaymentSelect}
                  />
                  <PaymentOption
                    icon="/apple.svg"
                    label="Apple Pay"
                    onClick={handlePaymentSelect}
                    additionalInfo="Up to $500/week"
                  />
                  <PaymentOption
                    icon="/coinbase.svg"
                    label="Coinbase"
                    onClick={handlePaymentSelect}
                    additionalInfo="ACH, debit, PayPal, and more"
                  />
                  <PaymentOption
                    icon={<CreditCard className="w-6 h-6" />}
                    label="Debit card"
                    onClick={handlePaymentSelect}
                    additionalInfo="Up to $500/week"
                  />
                </div>
                <div className="px-4 py-2 flex justify-between text-xs text-zinc-500 bg-zinc-50 dark:bg-zinc-800/50">
                  <span>New quote in {countdown}s</span>
                  <span className={flicker ? 'animate-pulse' : ''}>1 EVERYONE ≈ $1</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

