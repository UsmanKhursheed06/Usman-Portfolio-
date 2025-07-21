"use client"
import React from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface SuccessDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col items-center text-center">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Message Sent</DialogTitle>
        </DialogHeader>

        <DotLottieReact
          src="https://lottie.host/be52f2f7-3225-4292-acc9-a3eddce7a681/A60zmFfYkC.lottie"
          autoplay
          loop={false}
          style={{ width: 160, height: 160 }}
        />

        <p className="text-slate-500 text-sm mt-2">Thank you for reaching out. I’ll get back to you soon!</p>
      </DialogContent>
    </Dialog>
  )
}

export default SuccessDialog
