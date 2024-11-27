'use client'

import { WalletActions } from "./wallet-actions"
import { QrCode, Maximize2, Clock, LogOut } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { TokenList } from "./token-list"

interface WalletDetailsContainerProps {
  onClose: () => void
  isVisible: boolean
}

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
      when: "beforeChildren",
      staggerChildren: 0.03 
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      duration: 0.15
    }
  }
}

export function WalletDetailsContainer({ onClose, isVisible }: WalletDetailsContainerProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="absolute right-0 mt-2 w-[420px] z-50 p-4 bg-white dark:bg-zinc-950 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800">
            <div className="p-0">
              {/* Top Bar */}
              <motion.div variants={itemVariants} className="flex justify-between items-center mb-4">
                <div className="flex gap-3">
                  <button className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-full">
                    <Clock className="h-4 w-4 dark:text-zinc-400" />
                  </button>
                  <button className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-full">
                    <QrCode className="h-4 w-4 dark:text-zinc-400" />
                  </button>
                </div>
                <div className="flex gap-3">
                  <button className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-full">
                    <LogOut className="h-4 w-4 dark:text-zinc-400" />
                  </button>
                  <button className="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-full" onClick={onClose}>
                    <Maximize2 className="h-4 w-4 dark:text-zinc-400" />
                  </button>
                </div>
              </motion.div>

              {/* Profile Section */}
              <motion.div variants={itemVariants} className="flex flex-col items-center mb-4 mt-2">
                <div className="w-16 h-16 mb-3">
                  <Image
                    src="/basename-avatar.svg"
                    alt="Profile"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-2">paprika.base.eth</h2>
                <p className="text-2xl font-semibold">$1,200.25</p>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <WalletActions />
              </motion.div>
              <motion.div variants={itemVariants} className="mt-4">
                <TokenList />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

