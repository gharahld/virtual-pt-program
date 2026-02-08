"use client"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, X } from "lucide-react"
import Image from "next/image"

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
  const [showVideo, setShowVideo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!open) {
      setShowVideo(false)
      setIsPlaying(false)
      setCurrentTime(0)
      setDuration(0)
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [open])

  // Update time display
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => {
      setCurrentTime(video.currentTime)
      setDuration(video.duration || 0)
    }

    video.addEventListener("timeupdate", updateTime)
    video.addEventListener("loadedmetadata", updateTime)

    return () => {
      video.removeEventListener("timeupdate", updateTime)
      video.removeEventListener("loadedmetadata", updateTime)
    }
  }, [showVideo])

  // Handle thumbnail click
  const handleThumbnailClick = () => {
    setShowVideo(true)
    setTimeout(() => {
      videoRef.current?.play()
      setIsPlaying(true)
    }, 100)
  }

  // Play/Pause toggle
  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
    resetControlsTimeout()
  }

  // Handle video play/pause events
  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  // Handle progress bar click
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current
    const progressBar = progressRef.current
    if (!video || !progressBar) return

    const rect = progressBar.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    video.currentTime = pos * video.duration
    resetControlsTimeout()
  }

  // Toggle mute
  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(!video.muted)
    resetControlsTimeout()
  }

  // Toggle fullscreen
  const toggleFullscreen = () => {
    const videoContainer = videoRef.current?.parentElement
    if (!videoContainer) return

    if (!document.fullscreenElement) {
      videoContainer.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
    resetControlsTimeout()
  }

  // Show/hide controls with timeout
  const resetControlsTimeout = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)
  }

  // Mouse movement shows controls
  const handleMouseMove = () => {
    resetControlsTimeout()
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 bg-white">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-primary-200">
          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-2">{exercise.title}</h2>
            <p className="text-primary-600 text-lg">{exercise.ageGroup}</p>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative p-6">
          {!showVideo ? (
            // Thumbnail State
            <div
              onClick={handleThumbnailClick}
              className="relative w-full aspect-video bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl border-2 border-primary-200 overflow-hidden cursor-pointer group shadow-xl transition-all hover:shadow-2xl"
            >
              {/* Placeholder Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-logo-purple/20 to-logo-peach/20" />
              
              {/* Overlay with Play Button */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white/95 group-hover:bg-white group-hover:scale-110 rounded-full p-10 transition-all duration-300 shadow-2xl animate-pulse">
                  <Play className="h-20 w-20 text-logo-purple" fill="currentColor" />
                </div>
              </div>
              
              {/* Click to Play Badge */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-logo-purple group-hover:bg-logo-purple/90 text-white px-6 py-3 rounded-full text-base font-bold shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center gap-2">
                <Play className="w-5 h-5" fill="currentColor" />
                Click to Play Video
              </div>

              {/* Quality Badge */}
              <div className="absolute top-5 left-5 bg-white/90 text-logo-purple px-3 py-1 rounded-lg text-sm font-bold backdrop-blur-sm">
                HD
              </div>
            </div>
          ) : (
            // Video Player State
            <div
              className="relative w-full aspect-video bg-black rounded-2xl border-2 border-primary-200 overflow-hidden shadow-xl"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                if (isPlaying) {
                  setTimeout(() => setShowControls(false), 2000)
                }
              }}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                onPlay={handlePlay}
                onPause={handlePause}
                onClick={togglePlayPause}
                playsInline
              >
                {exercise.videoUrl && (
                  <>
                    <source src={exercise.videoUrl} type="video/mp4" />
                    <source src={exercise.videoUrl} type="video/quicktime" />
                  </>
                )}
                Your browser does not support the video tag.
              </video>

              {/* Custom Video Controls */}
              {showControls && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 transition-opacity duration-300">
                  {/* Progress Bar */}
                  <div
                    ref={progressRef}
                    className="mb-4 cursor-pointer"
                    onClick={handleProgressClick}
                  >
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-logo-purple rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Controls Row */}
                  <div className="flex items-center gap-5">
                    {/* Play/Pause */}
                    <button
                      onClick={togglePlayPause}
                      className="text-white hover:text-logo-purple transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="h-10 w-10" />
                      ) : (
                        <Play className="h-10 w-10" fill="currentColor" />
                      )}
                    </button>

                    {/* Time Display */}
                    <span className="text-white text-base font-semibold min-w-[100px]">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Volume */}
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-logo-purple transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="h-8 w-8" />
                      ) : (
                        <Volume2 className="h-8 w-8" />
                      )}
                    </button>

                    {/* Settings (Placeholder) */}
                    <button className="text-white hover:text-logo-purple transition-colors">
                      <Settings className="h-8 w-8" />
                    </button>

                    {/* Fullscreen */}
                    <button
                      onClick={toggleFullscreen}
                      className="text-white hover:text-logo-purple transition-colors"
                    >
                      <Maximize className="h-8 w-8" />
                    </button>
                  </div>
                </div>
              )}

              {/* Now Playing Badge */}
              {isPlaying && (
                <div className="absolute top-5 left-5 bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-xl">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  NOW PLAYING
                </div>
              )}
            </div>
          )}
        </div>

        {/* Description Section */}
        {exercise.description && (
          <div className="px-6 pb-6">
            <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl border border-primary-200">
              <h3 className="text-lg font-bold text-primary-900 mb-3">Exercise Description</h3>
              <p className="text-primary-800 leading-relaxed">{exercise.description}</p>
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="px-6 pb-6 grid md:grid-cols-3 gap-4">
          <div className="bg-primary-100 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">👶</div>
            <p className="text-sm font-semibold text-primary-900">Start Early</p>
            <p className="text-xs text-primary-700 mt-1">Begin from day one</p>
          </div>
          <div className="bg-logo-peach/20 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <p className="text-sm font-semibold text-primary-900">Short Sessions</p>
            <p className="text-xs text-primary-700 mt-1">3-5 minutes at first</p>
          </div>
          <div className="bg-primary-100 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">👁️</div>
            <p className="text-sm font-semibold text-primary-900">Always Supervise</p>
            <p className="text-xs text-primary-700 mt-1">Never leave alone</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
