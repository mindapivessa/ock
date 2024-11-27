'use client'

import { useState } from 'react'
import { ArrowUp, StopCircle } from 'lucide-react'
import { cn } from "@/lib/utils"

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
            "w-full px-4 py-2 pb-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 pr-10 h-24 resize-none transition-all duration-300 ease-in-out",
            isPrefilling && "bg-gray-100"
          )}
          disabled={isProcessing}
        />
        {(input.length > 0 || isProcessing) && (
          <button
            type="submit"
            className={cn(
              "absolute right-1.5 bottom-3 flex items-center justify-center bg-black text-white rounded-lg transition-all duration-300 ease-in-out",
              isProcessing ? "w-[70px] px-2 py-1" : "w-[32px] h-[32px]"
            )}
          >
            {isProcessing ? (
              <>
                <StopCircle className="h-4 w-4 mr-2 transition-opacity duration-300 ease-in-out" />
                <span className="transition-opacity duration-300 ease-in-out font-medium">Stop</span>
              </>
            ) : (
              <ArrowUp className="h-4 w-4 transition-opacity duration-300 ease-in-out" />
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
              className="px-3 py-1 border border-gray-300 rounded-xl bg-white hover:bg-gray-100 focus:outline-none transition-colors duration-200 ease-in-out flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
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

