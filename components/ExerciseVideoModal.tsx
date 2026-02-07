"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Play } from "lucide-react"

interface ExerciseVideoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  exercise: {
    title: string
    description?: string
    videoUrl?: string
    ageGroup: string
  }
}

export function ExerciseVideoModal({ open, onOpenChange, exercise }: ExerciseVideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary-900">{exercise.title}</DialogTitle>
          <DialogDescription className="text-primary-600">
            {exercise.ageGroup}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          {/* Video Player Area */}
          <div className="relative w-full aspect-video bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg border-2 border-primary-200 overflow-hidden">
            {exercise.videoUrl ? (
              <video
                className="w-full h-full object-contain bg-black"
                controls
                preload="metadata"
                playsInline
              >
                <source src={exercise.videoUrl} type="video/quicktime" />
                <source src={exercise.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="bg-white/80 rounded-full p-8 mb-4">
                  <Play className="h-16 w-16 text-primary-600" fill="currentColor" />
                </div>
                <p className="text-primary-700 font-semibold text-lg mb-2">Video Coming Soon</p>
                <p className="text-primary-600 text-sm text-center max-w-md">
                  We're currently creating demonstration videos for this exercise. 
                  Check back soon for step-by-step video instructions!
                </p>
              </div>
            )}
          </div>
          
          {exercise.description && (
            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <p className="text-primary-800">{exercise.description}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
