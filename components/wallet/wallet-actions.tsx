import { Plus, ArrowUpDown, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const buttonVariants = {
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

export function WalletActions() {
  return (
    <motion.div 
      className="grid grid-cols-3 gap-2"
      variants={{ 
        visible: { transition: { staggerChildren: 0.05 } }
      }}
    >
      <motion.button 
        variants={buttonVariants}
        className="flex flex-col items-center justify-center pb-2 pt-3 px-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors dark:text-white"
      >
        <Plus className="h-4 w-4 mb-1" />
        <span className="font-semibold text-base">Buy</span>
      </motion.button>
      <motion.button 
        variants={buttonVariants}
        className="flex flex-col items-center justify-center px-4 pb-2 pt-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors dark:text-white"
      >
        <Send className="h-4 w-4 mb-1" />
        <span className="font-semibold text-base">Send</span>
      </motion.button>
      <motion.button 
        variants={buttonVariants}
        className="flex flex-col items-center justify-center pb-2 pt-3 px-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors dark:text-white"
      >
        <ArrowUpDown className="h-4 w-4 mb-1" />
        <span className="font-semibold text-base">Swap</span>
      </motion.button>
    </motion.div>
  )
}

