import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ShareButton() {
  const shareContent = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Free 10GB Airtel Data",
          text: "Get your free 10GB data from Airtel! Limited time offer.",
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard!")
      }
    } catch (err) {
      console.error("Error sharing:", err)
    }
  }

  return (
    <Button
      variant="outline"
      onClick={shareContent}
      className="flex items-center gap-2 text-sm sm:text-base px-4 py-2 h-auto"
    >
      <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
      Share Offer
    </Button>
  )
}

