"use client"

import { MousePointer, Edit3, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HowItWorksSection() {
  const { t, isRTL } = useLanguage()

  const steps = [
    {
      icon: MousePointer,
      titleKey: "how.step1.title",
      descKey: "how.step1.desc",
    },
    {
      icon: Edit3,
      titleKey: "how.step2.title",
      descKey: "how.step2.desc",
    },
    {
      icon: CheckCircle,
      titleKey: "how.step3.title",
      descKey: "how.step3.desc",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t("how.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("how.title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("how.subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className={`grid md:grid-cols-3 gap-8 lg:gap-12 ${isRTL ? 'direction-rtl' : ''}`}>
            {steps.map((step, index) => (
              <div
                key={step.titleKey}
                className="relative text-center group animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number Badge */}
                <div className="relative inline-flex mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-card shadow-lg border border-border/50 flex items-center justify-center group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className={`absolute -top-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg ${isRTL ? '-left-3' : '-right-3'}`}>
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {t(step.descKey)}
                </p>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <svg className="w-6 h-6 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
