"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Car, UtensilsCrossed, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (around 500px)
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isDismissed) return null

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-all duration-300",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      {/* Backdrop blur and shadow */}
      <div className="bg-background/95 backdrop-blur-lg border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className={cn(
              "absolute top-2 p-1 text-muted-foreground hover:text-foreground",
              isRTL ? "left-2" : "right-2"
            )}
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>

          <div className={cn("flex gap-3", isRTL && "flex-row-reverse")}>
            <Button
              className={cn(
                "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2",
                isRTL && "flex-row-reverse"
              )}
              size="lg"
            >
              <Car className="w-5 h-5" />
              {t("hero.tab.ride")}
            </Button>
            <Button
              variant="outline"
              className={cn(
                "flex-1 border-primary/30 hover:bg-primary/10 gap-2",
                isRTL && "flex-row-reverse"
              )}
              size="lg"
            >
              <UtensilsCrossed className="w-5 h-5" />
              {t("hero.tab.food")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
