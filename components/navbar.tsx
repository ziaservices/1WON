"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Car, UtensilsCrossed, CreditCard, Users, Briefcase, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, isRTL } = useLanguage()

  const navLinks = [
    { name: t("nav.services"), href: "#services", icon: null },
    { name: t("nav.ride"), href: "#ride", icon: Car },
    { name: t("nav.food"), href: "#food", icon: UtensilsCrossed },
    { name: t("nav.payments"), href: "#payments", icon: CreditCard },
    { name: t("nav.driver"), href: "#driver", icon: Users },
    { name: t("nav.partner"), href: "#partner", icon: Briefcase },
    { name: t("nav.help"), href: "#help", icon: HelpCircle },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "flex items-center justify-between h-16 lg:h-20",
            isRTL && "flex-row-reverse"
          )}>
            {/* Logo */}
            <Link href="/" className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </div>
              <span className="font-bold text-xl text-foreground">
                GoFlow
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className={cn("hidden lg:flex items-center gap-1", isRTL && "flex-row-reverse")}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-primary/10 text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className={cn("hidden lg:flex items-center gap-2", isRTL && "flex-row-reverse")}>
              <LanguageSwitcher />
              <ThemeToggle />
              <Button variant="ghost" size="sm">
                {t("nav.signin")}
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t("nav.getstarted")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className={cn("flex lg:hidden items-center gap-2", isRTL && "flex-row-reverse")}>
              <LanguageSwitcher />
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMobileMenuOpen ? "visible" : "invisible"
        )}
      >
        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={cn(
            "absolute top-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl transition-transform duration-300",
            isRTL ? "left-0" : "right-0",
            isMobileMenuOpen 
              ? "translate-x-0" 
              : isRTL ? "-translate-x-full" : "translate-x-full"
          )}
        >
          <div className="p-6 pt-20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-primary/10 transition-colors",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  {link.icon && <link.icon className="w-5 h-5 text-primary" />}
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button variant="outline" className="w-full">
                {t("nav.signin")}
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {t("nav.getstarted")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
