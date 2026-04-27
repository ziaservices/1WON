"use client"

import { Button } from "@/components/ui/button"
import { Car, Store, DollarSign, Clock, TrendingUp, Shield, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function DriverPartnerSection() {
  const { t, isRTL } = useLanguage()

  const driverBenefits = [
    { icon: DollarSign, textKey: "driver.driver.benefit1" },
    { icon: Clock, textKey: "driver.driver.benefit2" },
    { icon: Shield, textKey: "driver.driver.benefit3" },
  ]

  const partnerBenefits = [
    { icon: TrendingUp, textKey: "driver.partner.benefit1" },
    { icon: Store, textKey: "driver.partner.benefit2" },
    { icon: DollarSign, textKey: "driver.partner.benefit3" },
  ]

  return (
    <section id="driver" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t("driver.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("driver.title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("driver.subtitle")}
          </p>
        </div>

        <div className={cn("grid lg:grid-cols-2 gap-8 lg:gap-12", isRTL && "direction-rtl")}>
          {/* Become a Driver */}
          <div className={cn(
            "relative group animate-in fade-in duration-700",
            isRTL ? "slide-in-from-right-8" : "slide-in-from-left-8"
          )}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300" />
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-primary/10 shadow-lg">
              {/* Icon */}
              <div className={cn(
                "w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6",
                isRTL && "ml-auto"
              )}>
                <Car className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className={cn("text-2xl lg:text-3xl font-bold text-foreground mb-4", isRTL && "text-right")}>
                {t("driver.driver.title")}
              </h3>
              <p className={cn("text-muted-foreground mb-6 leading-relaxed", isRTL && "text-right")}>
                {t("driver.driver.desc")}
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {driverBenefits.map((benefit) => (
                  <div key={benefit.textKey} className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{t(benefit.textKey)}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button className={cn(
                "bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group/btn",
                isRTL && "flex-row-reverse"
              )}>
                {t("driver.driver.cta")}
                <ArrowRight className={cn("w-4 h-4 group-hover/btn:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover/btn:-translate-x-1")} />
              </Button>
            </div>
          </div>

          {/* Become a Partner */}
          <div id="partner" className={cn(
            "relative group animate-in fade-in duration-700 delay-150",
            isRTL ? "slide-in-from-left-8" : "slide-in-from-right-8"
          )}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300" />
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-accent/10 shadow-lg">
              {/* Icon */}
              <div className={cn(
                "w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-6",
                isRTL && "ml-auto"
              )}>
                <Store className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className={cn("text-2xl lg:text-3xl font-bold text-foreground mb-4", isRTL && "text-right")}>
                {t("driver.partner.title")}
              </h3>
              <p className={cn("text-muted-foreground mb-6 leading-relaxed", isRTL && "text-right")}>
                {t("driver.partner.desc")}
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {partnerBenefits.map((benefit) => (
                  <div key={benefit.textKey} className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{t(benefit.textKey)}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button className={cn(
                "bg-accent hover:bg-accent/90 text-accent-foreground gap-2 group/btn",
                isRTL && "flex-row-reverse"
              )}>
                {t("driver.partner.cta")}
                <ArrowRight className={cn("w-4 h-4 group-hover/btn:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover/btn:-translate-x-1")} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
