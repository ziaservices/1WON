"use client"

import { Button } from "@/components/ui/button"
import { Car, UtensilsCrossed, UserPlus, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function CTASection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-10 right-[20%] w-16 h-16 border-2 border-white/20 rounded-2xl rotate-12 animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-[15%] w-12 h-12 border-2 border-white/20 rounded-full animate-bounce hidden lg:block" />
      <div className="absolute top-1/3 left-[10%] w-8 h-8 bg-white/10 rounded-lg rotate-45 hidden lg:block" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {t("cta.title")}
          </h2>
          <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-10 text-pretty">
            {t("cta.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",
            isRTL && "sm:flex-row-reverse"
          )}>
            <Button
              size="lg"
              className={cn(
                "w-full sm:w-auto bg-white text-primary hover:bg-white/90 gap-2 text-base px-8 shadow-lg",
                isRTL && "flex-row-reverse"
              )}
            >
              <Car className="w-5 h-5" />
              {t("hero.tab.ride")}
              <ArrowRight className={cn("w-4 h-4", isRTL && "rotate-180")} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={cn(
                "w-full sm:w-auto border-white/30 text-white hover:bg-white/10 gap-2 text-base px-8",
                isRTL && "flex-row-reverse"
              )}
            >
              <UtensilsCrossed className="w-5 h-5" />
              {t("hero.tab.food")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={cn(
                "w-full sm:w-auto border-white/30 text-white hover:bg-white/10 gap-2 text-base px-8",
                isRTL && "flex-row-reverse"
              )}
            >
              <UserPlus className="w-5 h-5" />
              {t("nav.getstarted")}
            </Button>
          </div>

          {/* Trust Badges */}
          <div className={cn(
            "flex flex-wrap justify-center gap-6",
            isRTL && "flex-row-reverse"
          )}>
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">{t("cta.trust1")}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">{t("cta.trust2")}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">{t("cta.trust3")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
