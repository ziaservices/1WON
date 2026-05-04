"use client"

import { useEffect, useState } from "react"
import { Bike } from "lucide-react"

export function SiteScrollBackground() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(1200)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    let rafId = 0
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const updateMotion = () => {
      const currentScrollY = window.scrollY || 0
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      )
      const viewportHeight = window.innerHeight || 1
      const maxScrollable = Math.max(docHeight - viewportHeight, 1)

      setScrollY(currentScrollY)
      setScrollProgress(Math.min(currentScrollY / maxScrollable, 1))
      setViewportWidth(window.innerWidth || 1200)
      setPrefersReducedMotion(mediaQuery.matches)
      rafId = 0
    }

    const onScrollOrResize = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(updateMotion)
    }

    updateMotion()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)
    mediaQuery.addEventListener("change", onScrollOrResize)

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
      mediaQuery.removeEventListener("change", onScrollOrResize)
    }
  }, [])

  const effectiveProgress = prefersReducedMotion ? 0 : scrollProgress
  const backgroundShiftY = effectiveProgress * 240
  const backgroundScale = 1 + effectiveProgress * 0.1
  const overlayOpacity = 0.45 + effectiveProgress * 0.2
  const bikeX = effectiveProgress * (viewportWidth + 140) - 70
  const bikeY = 60 + Math.sin(effectiveProgress * Math.PI * 3) * 22
  const bikeTilt = Math.sin(effectiveProgress * Math.PI * 6) * 8

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(255,255,255,0.25), rgba(7,20,15,0.5)), url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: `center calc(50% + ${backgroundShiftY}px)`,
          transform: `scale(${backgroundScale})`,
          transition: "transform 120ms linear, background-position 120ms linear",
        }}
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/78 to-background/88"
        style={{ opacity: overlayOpacity }}
      />

      <div className="absolute inset-x-0 bottom-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div
        className="absolute bottom-14 text-primary/90 drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]"
        style={{
          transform: `translateX(${bikeX}px) translateY(${bikeY}px) rotate(${bikeTilt}deg)`,
          transition: prefersReducedMotion ? "none" : "transform 120ms linear",
        }}
      >
        <Bike className="h-10 w-10" />
      </div>
    </div>
  )
}
