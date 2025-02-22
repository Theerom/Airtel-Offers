interface VerificationProgressProps {
  currentStep: number
  totalSteps: number
}

export function VerificationProgress({ currentStep, totalSteps }: VerificationProgressProps) {
  return (
    <div className="w-full max-w-[min(100%,24rem)] mx-auto mb-6">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-600 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
      <p className="text-center text-xs sm:text-sm text-gray-600 mt-2">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  )
}

