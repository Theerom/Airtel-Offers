"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Wifi, Gift, Clock, CheckCircle, Users } from "lucide-react"
import { motion } from "framer-motion"
import { VerificationForm } from "./verification-form"
import { VerificationProgress } from "./verification-progress"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-[100dvh] bg-white overflow-x-hidden">
      {/* Hero Section */}
      <header className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-[140px] sm:w-[180px] lg:w-[200px] aspect-[3.33/1]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Airtel-logo.jpg-ztNwHMQpyo6NaKPZ0F4MXUIs1hdy75.jpeg"
                alt="Airtel Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <div className="mt-8 sm:mt-12 lg:mt-16 text-center space-y-4 sm:space-y-6">
            <motion.h1
              className="text-[clamp(2rem,5vw,4rem)] font-bold text-red-600 leading-[1.1]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Get 10GB Free Data!
            </motion.h1>
            <motion.p
              className="text-[clamp(1rem,2vw,1.25rem)] text-gray-600 max-w-[90%] sm:max-w-[80%] lg:max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Limited time offer: Claim your free 10GB data package from Airtel today
            </motion.p>
          </div>
        </div>
      </header>

      {/* Active Users Counter */}
      <div className="w-full px-4 py-3 bg-red-50">
        <div className="flex items-center justify-center gap-2 text-red-600">
          <Users className="w-4 h-4 animate-pulse" />
          <p className="text-sm sm:text-base">
            <span className="font-semibold">847</span> users currently viewing this offer
          </p>
        </div>
      </div>

      {/* Form Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <VerificationProgress currentStep={1} totalSteps={2} />
          <VerificationForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
            <motion.div
              className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm space-y-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Wifi className="w-12 h-12 text-red-600" />
              <h3 className="text-lg sm:text-xl font-semibold">High-Speed Data</h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Enjoy blazing fast 4G speeds on Airtel's network
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm space-y-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Gift className="w-12 h-12 text-red-600" />
              <h3 className="text-lg sm:text-xl font-semibold">Completely Free</h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">No hidden charges, no strings attached</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm space-y-3 sm:col-span-2 lg:col-span-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Clock className="w-12 h-12 text-red-600" />
              <h3 className="text-lg sm:text-xl font-semibold">Valid for 7 Days</h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Use your free data within 7 days of activation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">100% Verified Offer</span>
            </motion.div>
            <p className="mt-4 text-sm sm:text-base text-gray-600 px-4">
              Join thousands of satisfied Airtel users who have already claimed their free data
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

