"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  const { t, isRTL } = useLanguage()

  const footerLinks = {
    product: [
      { nameKey: "nav.ride", href: "#ride" },
      { nameKey: "nav.food", href: "#food" },
      { nameKey: "nav.payments", href: "#payments" },
      { nameKey: "services.insurance.title", href: "#insurance" },
    ],
    company: [
      { name: isRTL ? "من نحن" : "About Us", href: "#" },
      { name: isRTL ? "وظائف" : "Careers", href: "#" },
      { name: isRTL ? "الصحافة" : "Press", href: "#" },
      { name: isRTL ? "المدونة" : "Blog", href: "#" },
    ],
    support: [
      { name: isRTL ? "مركز المساعدة" : "Help Center", href: "#" },
      { name: isRTL ? "السلامة" : "Safety", href: "#" },
      { name: isRTL ? "اتصل بنا" : "Contact Us", href: "#" },
    ],
    legal: [
      { name: isRTL ? "شروط الخدمة" : "Terms of Service", href: "#" },
      { name: isRTL ? "سياسة الخصوصية" : "Privacy Policy", href: "#" },
      { name: isRTL ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy", href: "#" },
    ],
  }

  return (
    <footer id="help" className="bg-foreground text-white/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={cn(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12",
          isRTL && "direction-rtl"
        )}>
          {/* Brand Column */}
          <div className={cn("col-span-2 md:col-span-3 lg:col-span-2", isRTL && "text-right")}>
            <Link href="/" className={cn("inline-flex items-center gap-2 mb-6", isRTL && "flex-row-reverse")}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <span className="font-bold text-xl text-white">1WON</span>
            </Link>
            <p className={cn("text-white/60 mb-6 max-w-sm", isRTL && "mr-0 ml-auto")}>
              {t("footer.desc")}
            </p>
            
            {/* Social Links */}
            <div className={cn("flex gap-3", isRTL && "flex-row-reverse justify-end")}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className={isRTL ? "text-right" : ""}>
            <h3 className="font-semibold text-white mb-4">{t("footer.product")}</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.nameKey}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={isRTL ? "text-right" : ""}>
            <h3 className="font-semibold text-white mb-4">{t("footer.company")}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className={isRTL ? "text-right" : ""}>
            <h3 className="font-semibold text-white mb-4">{t("footer.support")}</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className={isRTL ? "text-right" : ""}>
            <h3 className="font-semibold text-white mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className={cn(
            "flex flex-col md:flex-row items-center justify-between gap-4",
            isRTL && "md:flex-row-reverse"
          )}>
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} 1WON. {t("footer.rights")}
            </p>
            <p className="text-sm text-white/50">
              Built for Morocco, from Morocco
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
