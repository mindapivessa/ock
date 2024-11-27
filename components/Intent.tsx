'use client'

import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Spinner } from '@/components/spinner'

const promptTemplates = [
  "Bridge a token",
  "Send a token",
  "Mint an NFT"
]

export function Intent() {
  const [input, setInput] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isPrefilling, setIsPrefilling] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isProcessing) {
      // Stop the request
      console.log('Stopping request')
      setIsProcessing(false)
    } else {
      // Start processing
      console.log('Submitted:', input)
      setIsProcessing(true)
      // Simulating a long-running process
      setTimeout(() => {
        setIsProcessing(false)
        setInput('')
      }, 3000)
    }
  }

  const handleTemplateClick = (template: string) => {
    setIsPrefilling(true)
    setInput(template)
    setTimeout(() => setIsPrefilling(false), 300) // Match this with the transition duration
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-1">
      <form onSubmit={handleSubmit} className="relative">
        <textarea
          placeholder="How can I help?"
          value={input}
          onChange={handleInputChange}
          className={cn(
            "w-full px-4 py-2 pb-10 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 pr-10 h-24 resize-none transition-all duration-300 ease-in-out dark:bg-zinc-950 dark:text-white",
            isPrefilling && "bg-zinc-100 dark:bg-zinc-800"
          )}
          disabled={isProcessing}
        />
        {(input.length > 0 || isProcessing) && (
          <button
            type="submit"
            className={cn(
              "absolute right-1.5 bottom-3 flex items-center justify-center bg-zinc-950 text-white rounded-lg w-[32px] h-[32px] transition-all duration-300 ease-in-out",
              isProcessing && "opacity-80"
            )}
          >
            {isProcessing ? (
              <Spinner className="h-4 w-4" />
            ) : (
              <ArrowUp className="h-4 w-4" />
            )}
          </button>
        )}
      </form>
      <div className="overflow-x-auto whitespace-nowrap pb-2">
        <div className="inline-flex space-x-2">
          {promptTemplates.map((template, index) => (
            <button
              key={index}
              onClick={() => handleTemplateClick(template)}
              className="px-3 py-1 border border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none transition-colors duration-200 ease-in-out flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-semibold dark:text-white"
              disabled={isProcessing}
            >
              {template}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

