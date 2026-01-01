"use client"

import { useEffect, useRef, useState } from "react"


export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [blobs] = useState(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: 15 + ((i * 18) % 70),
      y: 15 + ((i * 20) % 70),
      baseX: 15 + ((i * 18) % 70),
      baseY: 15 + ((i * 20) % 70),
      size: 300 + Math.random() * 250,
      opacity: 0.12 + Math.random() * 0.15,
      hue: 142 + Math.random() * 25,
      speed: 0.0010 + Math.random() * 0.0015,
      offset: Math.random() * Math.PI * 2,
    })),
  )

  const [leaves] = useState(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * -150 - 10,
      rotation: Math.random() * 360,
      speed: 0.12 + Math.random() * 0.18,
      sway: Math.random() * 20 - 10,
      swaySpeed: 0.018 + Math.random() * 0.025,
      scale: 0.6 + Math.random() * 0.8,
      opacity: 0.15 + Math.random() * 0.25,
      type: Math.floor(Math.random() * 3),
    })),
  )

  const blobElementsRef = useRef<Map<number, HTMLDivElement>>(new Map())
  const leafElementsRef = useRef<Map<number, HTMLDivElement>>(new Map())
  const mousePosRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(1)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return

      mousePosRef.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 60,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 60,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    let lastTime = Date.now()
    const leavesData = [...leaves]

    const animate = () => {
      const currentTime = Date.now()
      const deltaTime = Math.min((currentTime - lastTime) / 16.67, 2)
      lastTime = currentTime

      blobs.forEach((blob) => {
        const time = currentTime * blob.speed + blob.offset
        const newX = blob.baseX + Math.sin(time) * 15 + mousePosRef.current.x * 0.4
        const newY = blob.baseY + Math.cos(time * 0.8) * 18 + mousePosRef.current.y * 0.4

        const element = blobElementsRef.current.get(blob.id)
        if (element) {
          element.style.left = `${newX}%`
          element.style.top = `${newY}%`
          element.style.transform = `translate(-50%, -50%) scale(${1 + Math.sin(time * 0.5) * 0.2})`
        }
      })

      leavesData.forEach((leaf, index) => {
        const newY = leaf.y + leaf.speed * deltaTime
        const newRotation = leaf.rotation + 1.2 * deltaTime
        const newSway = Math.sin(newY * leaf.swaySpeed) * 25

        const element = leafElementsRef.current.get(leaf.id)
        if (element) {
          element.style.left = `${leaf.x + mousePosRef.current.x * 0.2}%`
          element.style.top = `${newY}%`
          element.style.transform = `rotate(${newRotation}deg) scale(${leaf.scale}) translateX(${newSway + mousePosRef.current.x * 0.3}px)`
          element.style.opacity = `${leaf.opacity}`
        }

        if (newY > 120) {
          const resetX = Math.random() * 100
          const resetScale = 0.6 + Math.random() * 0.8
          const resetOpacity = 0.15 + Math.random() * 0.25

          if (element) {
            element.style.left = `${resetX}%`
            element.style.top = `-20%`
            element.style.transform = `rotate(${Math.random() * 360}deg) scale(${resetScale}) translateX(0px)`
            element.style.opacity = `${resetOpacity}`
          }

          leavesData[index] = {
            ...leaf,
            y: -20,
            x: resetX,
            rotation: Math.random() * 360,
            scale: resetScale,
            opacity: resetOpacity,
            sway: 0,
          }
        } else {
          leavesData[index] = {
            ...leaf,
            y: newY,
            rotation: newRotation,
            sway: newSway,
          }
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [blobs, leaves])

  const renderLeaf = (type: number, id: number) => {
    if (type === 0) {
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`leafGrad1-${id}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <path
            d="M16 3C16 3 11 9 11 15C11 18 13.5 20.5 16 20.5C18.5 20.5 21 18 21 15C21 9 16 3 16 3Z"
            fill={`url(#leafGrad1-${id})`}
            stroke="#d1fae5"
            strokeWidth="0.8"
          />
          <path d="M16 3L16 20.5" stroke="#6ee7b7" strokeWidth="1" strokeLinecap="round" />
        </svg>
      )
    } else if (type === 1) {
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id={`leafGrad2-${id}`}>
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.65" />
            </radialGradient>
          </defs>
          <ellipse cx="14" cy="14" rx="7" ry="11" fill={`url(#leafGrad2-${id})`} stroke="#d1fae5" strokeWidth="0.6" />
        </svg>
      )
    } else {
      return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`leafGrad3-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M13 3C13 3 10 7 10 12C10 14.5 11.5 16.5 13 16.5C14.5 16.5 16 14.5 16 12C16 7 13 3 13 3Z"
            fill={`url(#leafGrad3-${id})`}
            stroke="#d1fae5"
            strokeWidth="0.7"
          />
        </svg>
      )
    }
  }

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>

      {leaves.map((leaf) => (
        <div
          key={`leaf-${leaf.id}`}
          ref={(el) => {
            if (el) leafElementsRef.current.set(leaf.id, el)
          }}
          className="absolute will-change-transform drop-shadow-lg"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            transform: `rotate(${leaf.rotation}deg) scale(${leaf.scale}) translateX(${leaf.sway}px)`,
            opacity: leaf.opacity,
            filter: "drop-shadow(0 2px 4px rgba(16, 185, 129, 0.2))",
          }}
        >
          {renderLeaf(leaf.type, leaf.id)}
        </div>
      ))}
    </div>
  )
}
