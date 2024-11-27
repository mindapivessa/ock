'use client'

import { Wallet } from "@/components/wallet/wallet"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const sectionVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
      staggerChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 12
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
}

export default function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex min-h-screen flex-col items-center p-24 max-w-4xl mx-auto space-y-16"
    >
      {/* Wallet */}
      <motion.div variants={sectionVariants} className="w-full space-y-6">
        <motion.div variants={itemVariants} className="space-y-2">
          <motion.h1 variants={itemVariants} className="text-lg font-bold dark:text-white">
            Wallet
          </motion.h1>    
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 leading-relaxed">
             Connect to an application with their wallet, view wallet details, onramp, send funds, and swap tokens.
          </motion.p>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="border border-gray-200 dark:border-gray-800 rounded-2xl p-12 bg-white dark:bg-gray-900 shadow-sm relative"
        >
          <div className="flex justify-center">
            <Wallet />
          </div>
        </motion.div>
      </motion.div>

      {/* Intent */}
      <motion.div variants={sectionVariants} className="w-full space-y-6">
        <motion.div variants={itemVariants} className="space-y-2">
          <motion.h1 variants={itemVariants} className="text-lg font-bold dark:text-white">
            Intent
          </motion.h1>    
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Perform a transaction using natural language and converts to transaction intents.
          </motion.p>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="border border-gray-200 dark:border-gray-800 rounded-2xl p-12 bg-white dark:bg-gray-900 shadow-sm"
        >
          <div className="flex justify-center">
            <Wallet />
          </div>
        </motion.div>
      </motion.div>
    </motion.main>
  )
}

