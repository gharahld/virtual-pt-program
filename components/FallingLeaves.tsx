"use client"

import { useEffect, useState } from "react"

interface Leaf {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  color: string
  rotation: number
}

const leafColors = [
  "#d4c5f9", // logo-purple
  "#ffd4a3", // logo-peach
  "#a8d5e2", // logo-blue
  "#b8e6b8", // logo-green
]

export function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([])

  useEffect(() => {
    // Generate 18 leaves with random properties
    const newLeaves: Leaf[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      delay: Math.random() * 10, // Random delay (0-10s)
      duration: 15 + Math.random() * 10, // Slow motion: 15-25 seconds
      size: 20 + Math.random() * 30, // Size between 20-50px
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      rotation: Math.random() * 360, // Random starting rotation
    }))

    setLeaves(newLeaves)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute top-0"
          style={{
            left: `${leaf.left}%`,
            animation: `fall ${leaf.duration}s linear ${leaf.delay}s infinite`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              animation: `sway ${leaf.duration * 0.8}s ease-in-out ${leaf.delay}s infinite alternate`,
            }}
          >
            {/* Simple leaf shape */}
            <path
              d="M12 2C8 2 5 5 5 9C5 13 8 16 12 20C16 16 19 13 19 9C19 5 16 2 12 2Z"
              fill={leaf.color}
              opacity={0.7}
            />
            <path
              d="M12 2L12 20M12 2L8 6M12 2L16 6"
              stroke={leaf.color}
              strokeWidth="0.5"
              opacity={0.5}
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
