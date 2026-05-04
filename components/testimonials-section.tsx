"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

const testimonials = {
  en: [
    {
      id: 1,
      name: "Fatima El Mansouri",
      role: "Daily Commuter, Casablanca",
      avatar: "FM",
      rating: 5,
      quote: "1WON has completely changed how I get around Casablanca. The drivers are always on time, the cars are clean, and the prices are fair. I can't imagine going back to regular taxis.",
    },
    {
      id: 2,
      name: "Youssef Benjelloun",
      role: "Food Enthusiast, Rabat",
      avatar: "YB",
      rating: 5,
      quote: "The food delivery is incredibly fast and reliable. I've discovered so many new restaurants through the platform. The real-time tracking is a game-changer!",
    },
    {
      id: 3,
      name: "Amina Idrissi",
      role: "Restaurant Owner, Marrakech",
      avatar: "AI",
      rating: 5,
      quote: "As a restaurant partner, 1WON has helped us reach customers we never could before. Our delivery orders have increased by 40% since joining the platform.",
    },
    {
      id: 4,
      name: "Karim Alaoui",
      role: "Driver Partner, Fes",
      avatar: "KA",
      rating: 5,
      quote: "The flexibility to work when I want is amazing. The support team is always helpful, and the earnings are better than any other platform I've tried.",
    },
    {
      id: 5,
      name: "Leila Tazi",
      role: "Working Mother, Tangier",
      avatar: "LT",
      rating: 5,
      quote: "Between school runs and grocery deliveries, 1WON saves me hours every week. The payment system is so smooth - I barely notice the transactions.",
    },
  ],
  fr: [
    {
      id: 1,
      name: "Fatima El Mansouri",
      role: "Navetteur quotidien, Casablanca",
      avatar: "FM",
      rating: 5,
      quote: "1WON a complètement changé ma façon de me déplacer à Casablanca. Les chauffeurs sont toujours à l'heure, les voitures sont propres et les prix sont justes.",
    },
    {
      id: 2,
      name: "Youssef Benjelloun",
      role: "Amateur de cuisine, Rabat",
      avatar: "YB",
      rating: 5,
      quote: "La livraison de nourriture est incroyablement rapide et fiable. J'ai découvert tellement de nouveaux restaurants grâce à la plateforme !",
    },
    {
      id: 3,
      name: "Amina Idrissi",
      role: "Propriétaire de restaurant, Marrakech",
      avatar: "AI",
      rating: 5,
      quote: "En tant que partenaire restaurant, 1WON nous a aidés à atteindre des clients que nous n'aurions jamais pu toucher avant.",
    },
    {
      id: 4,
      name: "Karim Alaoui",
      role: "Chauffeur partenaire, Fès",
      avatar: "KA",
      rating: 5,
      quote: "La flexibilité de travailler quand je veux est incroyable. L'équipe de support est toujours serviable.",
    },
    {
      id: 5,
      name: "Leila Tazi",
      role: "Mère active, Tanger",
      avatar: "LT",
      rating: 5,
      quote: "Entre les trajets scolaires et les livraisons de courses, 1WON me fait gagner des heures chaque semaine.",
    },
  ],
  ar: [
    {
      id: 1,
      name: "فاطمة المنصوري",
      role: "متنقلة يومياً، الدار البيضاء",
      avatar: "فم",
      rating: 5,
      quote: "غيّر 1WON تماماً طريقة تنقلي في الدار البيضاء. السائقون دائماً في الموعد، السيارات نظيفة، والأسعار عادلة.",
    },
    {
      id: 2,
      name: "يوسف بنجلون",
      role: "عاشق الطعام، الرباط",
      avatar: "يب",
      rating: 5,
      quote: "توصيل الطعام سريع وموثوق بشكل لا يصدق. اكتشفت الكثير من المطاعم الجديدة من خلال المنصة!",
    },
    {
      id: 3,
      name: "أمينة الإدريسي",
      role: "صاحبة مطعم، مراكش",
      avatar: "أإ",
      rating: 5,
      quote: "كشريك مطعم، ساعدنا 1WON في الوصول إلى عملاء لم نكن نستطيع الوصول إليهم من قبل.",
    },
    {
      id: 4,
      name: "كريم العلوي",
      role: "سائق شريك، فاس",
      avatar: "كع",
      rating: 5,
      quote: "المرونة في العمل وقتما أريد رائعة. فريق الدعم دائماً متعاون.",
    },
    {
      id: 5,
      name: "ليلى التازي",
      role: "أم عاملة، طنجة",
      avatar: "لت",
      rating: 5,
      quote: "بين توصيل المدرسة وتوصيل البقالة، يوفر لي 1WON ساعات كل أسبوع.",
    },
  ],
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { t, language, isRTL } = useLanguage()

  const currentTestimonials = testimonials[language] || testimonials.en

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentTestimonials.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length)
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t("testimonials.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className={cn(
            "relative bg-card rounded-3xl shadow-xl border border-border/50 p-8 lg:p-12 animate-in fade-in duration-500",
            isRTL && "text-right"
          )}>
            {/* Quote Icon */}
            <div className={cn(
              "absolute -top-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg",
              isRTL ? "right-8" : "left-8"
            )}>
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Rating */}
            <div className={cn("flex gap-1 mb-6 pt-4", isRTL && "flex-row-reverse justify-end")}>
              {[...Array(currentTestimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 text-pretty">
              &ldquo;{currentTestimonials[currentIndex].quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className={cn("flex items-center gap-4", isRTL && "flex-row-reverse")}>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-lg">
                {currentTestimonials[currentIndex].avatar}
              </div>
              <div>
                <div className="font-semibold text-foreground text-lg">
                  {currentTestimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {currentTestimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className={cn("flex items-center justify-center gap-4 mt-8", isRTL && "flex-row-reverse")}>
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-card shadow-md border border-border/50 flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className={cn("w-5 h-5 text-foreground", isRTL && "rotate-180")} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {currentTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-primary/30 hover:bg-primary/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-card shadow-md border border-border/50 flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className={cn("w-5 h-5 text-foreground", isRTL && "rotate-180")} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
