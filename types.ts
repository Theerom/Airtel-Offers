export type VerificationStep = "phone" | "human" | "share" | "final"

export interface ShareProgress {
  total: number
  required: number
}

