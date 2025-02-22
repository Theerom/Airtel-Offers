"use client"

import { motion } from "framer-motion"
import type { ShareProgress } from "./types"

interface ShareProgressProps {
  progress: ShareProgress
}

export function ShareProgressIndicator({ progress }: ShareProgressProps) {
  const percentage = Math.min((progress.total / progress.required) * 100, 100)

  return (
    <div className="w-full max-w-[min(100%,24rem)] mx-auto space-y-4">
      <div className="flex justify-between items-center text-sm">
        <span>
          Progress: {progress.total}/{progress.required} shares
        </span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-red-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="text-center text-sm text-gray-600">
        Share with {progress.required - progress.total} more WhatsApp contacts to claim your data
      </p>
    </div>
  )
}

