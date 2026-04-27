"use client"

import dynamic from "next/dynamic"
import { useLanguage } from "@/lib/language-context"

// Dynamically import the map to avoid SSR issues
const MoroccoMap = dynamic(
  () => import("./morocco-map").then((mod) => mod.MoroccoMap),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] lg:h-[500px] bg-primary/5 rounded-3xl animate-pulse flex items-center justify-center">
        <div className="text-muted-foreground">Loading map...</div>
      </div>
    )
  }
)

export function CitiesSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="cities" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t("cities.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("cities.title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("cities.subtitle")}
          </p>
        </div>

        {/* Interactive Morocco Map */}
        <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-4 lg:p-8 border border-border/50 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 overflow-hidden">
          <MoroccoMap />
        </div>

        {/* Stats Bar */}
        <div className={`grid grid-cols-3 gap-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 ${isRTL ? 'direction-rtl' : ''}`}>
          <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
            <div className="text-3xl lg:text-4xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground mt-1">{t("cities.stats.cities")}</div>
          </div>
          <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
            <div className="text-3xl lg:text-4xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground mt-1">{t("cities.stats.regions")}</div>
          </div>
          <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
            <div className="text-3xl lg:text-4xl font-bold text-primary">20+</div>
            <div className="text-sm text-muted-foreground mt-1">{t("cities.stats.coming")}</div>
          </div>
        </div>

        {/* Coming Soon Banner */}
        <div className="text-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <p className="text-muted-foreground">
            {t("cities.notfound")}{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              {t("cities.letusknow")}
            </a>{" "}
            {t("cities.prioritize")}
          </p>
        </div>
      </div>
    </section>
  )
}
