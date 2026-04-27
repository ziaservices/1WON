"use client"

import { MapPin, Shield, Zap, Users, Clock, Smartphone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function FeaturesSection() {
  const { t, isRTL } = useLanguage()

  const features = [
    {
      icon: MapPin,
      titleKey: "features.tracking.title",
      descKey: "features.tracking.desc",
      image: "tracking",
    },
    {
      icon: Shield,
      titleKey: "features.payments.title",
      descKey: "features.payments.desc",
      image: "security",
    },
    {
      icon: Zap,
      titleKey: "features.support.title",
      descKey: "features.support.desc",
      image: "support",
    },
  ]

  const trustItems = [
    { icon: Shield, labelKey: "features.payments.title" },
    { icon: Clock, labelKey: "features.support.title" },
    { icon: Smartphone, labelKey: "services.ride.title" },
    { icon: Users, labelKey: "hero.stat.users" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t("features.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("features.title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features - Alternating Layout */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.titleKey}
              className={cn(
                "flex flex-col items-center gap-12 lg:gap-20 animate-in fade-in slide-in-from-bottom-4 duration-700",
                index % 2 === 0 
                  ? isRTL ? "lg:flex-row-reverse" : "lg:flex-row" 
                  : isRTL ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Content */}
              <div className={cn("flex-1 text-center", isRTL ? "lg:text-right" : "lg:text-left")}>
                <div className={cn(
                  "inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6",
                  isRTL && "lg:ml-auto"
                )}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {t(feature.titleKey)}
                </h3>
                <p className={cn(
                  "text-muted-foreground text-lg leading-relaxed max-w-lg",
                  isRTL ? "mr-auto lg:mr-0 lg:ml-auto" : "mx-auto lg:mx-0"
                )}>
                  {t(feature.descKey)}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-md lg:max-w-none">
                <div className="relative">
                  {/* Mock UI Preview */}
                  <div className="bg-card rounded-2xl shadow-2xl shadow-primary/10 border border-border/50 overflow-hidden">
                    {/* Browser Chrome */}
                    <div className="bg-muted/50 px-4 py-3 border-b border-border/50 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-background rounded-lg px-3 py-1.5 text-xs text-muted-foreground">
                          goflow.ma/{feature.image}
                        </div>
                      </div>
                    </div>
                    {/* Content Area */}
                    <div className="p-6 h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                      <div className="text-center">
                        <feature.icon className="w-12 h-12 text-primary mx-auto mb-3" />
                        <div className="w-32 h-2 bg-primary/20 rounded-full mx-auto mb-2" />
                        <div className="w-24 h-2 bg-primary/10 rounded-full mx-auto" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className={cn(
                    "absolute -top-4 w-20 h-20 bg-primary/10 rounded-2xl -z-10 transform rotate-6",
                    (index % 2 === 0) !== isRTL ? "-right-4" : "-left-4"
                  )} />
                  <div className={cn(
                    "absolute -bottom-4 w-16 h-16 bg-accent/10 rounded-full -z-10",
                    (index % 2 === 0) !== isRTL ? "-left-4" : "-right-4"
                  )} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {trustItems.map((item) => (
            <div
              key={item.labelKey}
              className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <item.icon className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground text-center">
                {t(item.labelKey)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
