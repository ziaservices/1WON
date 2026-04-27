"use client"

import { Car, UtensilsCrossed, CreditCard, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function ServicesSection() {
  const { t, isRTL } = useLanguage()

  const services = [
    {
      icon: Car,
      titleKey: "services.ride.title",
      descKey: "services.ride.desc",
      href: "#ride",
      gradient: "from-primary to-primary/80",
      bgGradient: "from-primary/10 to-primary/5",
    },
    {
      icon: UtensilsCrossed,
      titleKey: "services.food.title",
      descKey: "services.food.desc",
      href: "#food",
      gradient: "from-accent to-accent/80",
      bgGradient: "from-accent/10 to-accent/5",
    },
    {
      icon: CreditCard,
      titleKey: "services.payments.title",
      descKey: "services.payments.desc",
      href: "#payments",
      gradient: "from-primary via-accent to-primary",
      bgGradient: "from-primary/10 via-accent/5 to-primary/10",
    },
    {
      icon: ShieldCheck,
      titleKey: "services.insurance.title",
      descKey: "services.insurance.desc",
      href: "#insurance",
      gradient: "from-accent/80 to-primary/80",
      bgGradient: "from-accent/10 to-primary/5",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className="group relative bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className={cn("relative", isRTL && "text-right")}>
                {/* Icon */}
                <div className={cn(
                  `w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`,
                  isRTL && "ml-auto"
                )}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {t(service.descKey)}
                </p>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className={cn(
                    "p-0 h-auto font-semibold text-primary hover:text-primary/80 hover:bg-transparent gap-2 group/btn",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  {t("services.learnmore")}
                  <ArrowRight className={cn("w-4 h-4 group-hover/btn:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover/btn:-translate-x-1")} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
