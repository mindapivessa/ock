'use client'

import { Wallet } from "@/components/wallet/wallet"
import { Intent } from "@/components/Intent"
import { Onramp } from "@/components/onramp/onramp"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

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
    <>
      <ThemeToggle />
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
            <motion.p variants={itemVariants} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
               Connect to an application with their wallet, view wallet details, onramp, send funds, and swap tokens.
            </motion.p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-12 bg-white dark:bg-[#0A0A0A] shadow-sm relative"
          >
            <div className="flex justify-center">
              <Wallet />
            </div>
          </motion.div>
        </motion.div>

        {/* Onramp */}
        <motion.div variants={sectionVariants} className="w-full space-y-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <motion.h1 variants={itemVariants} className="text-lg font-bold dark:text-white">
              Onramp
            </motion.h1>    
            <motion.p variants={itemVariants} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Buy tokens with ETH, USDC, Apple Pay, Coinbase, or Debit Card.
            </motion.p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-12 bg-white dark:bg-[#0A0A0A] shadow-sm min-h-[180px]"
          >
            <div className="flex justify-center">
              <Onramp />
            </div>
          </motion.div>
        </motion.div>

        {/* Intent */}
        <motion.div variants={sectionVariants} className="w-full space-y-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <motion.h1 variants={itemVariants} className="text-lg font-bold dark:text-white">
              Intent
            </motion.h1>    
            <motion.p variants={itemVariants} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Perform a transaction using natural language and converts to transaction intents.
            </motion.p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-12 bg-white dark:bg-[#0A0A0A] shadow-sm"
          >
            <div className="flex justify-center">
              <Intent />
            </div>
          </motion.div>
        </motion.div>
      </motion.main>
    </>
  )
}

