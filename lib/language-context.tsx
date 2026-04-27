"use client"

import { createContext, useContext, useState, useCallback, ReactNode } from "react"

export type Language = "en" | "fr" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.ride": "Ride",
    "nav.food": "Food",
    "nav.payments": "Payments",
    "nav.driver": "Become a Driver",
    "nav.partner": "Become a Partner",
    "nav.help": "Help",
    "nav.signin": "Sign In",
    "nav.getstarted": "Get Started",
    
    // Hero
    "hero.badge": "One App, Endless Possibilities",
    "hero.title": "Rides, Food & Payments",
    "hero.title2": "All in One Place",
    "hero.subtitle": "Book rides instantly, order from your favorite restaurants, and make seamless payments. Everything you need, unified in one powerful app.",
    "hero.download": "Download App",
    "hero.learnmore": "Learn More",
    "hero.tab.ride": "Book a Ride",
    "hero.tab.food": "Order Food",
    "hero.pickup": "Pickup location",
    "hero.dropoff": "Drop-off location",
    "hero.findride": "Find a Ride",
    "hero.restaurant": "Search restaurants or dishes",
    "hero.ordernow": "Order Now",
    "hero.stat.rides": "Monthly Rides",
    "hero.stat.restaurants": "Restaurant Partners",
    "hero.stat.users": "Happy Users",
    
    // Services
    "services.badge": "Our Services",
    "services.title": "Everything you need, one app",
    "services.subtitle": "From getting around town to ordering your favorite meals, we&apos;ve got you covered with seamless, integrated services.",
    "services.ride.title": "Ride",
    "services.ride.desc": "Safe, reliable rides at your fingertips. Choose from economy to premium options.",
    "services.food.title": "Food Delivery",
    "services.food.desc": "Delicious meals from local favorites delivered fresh to your door.",
    "services.payments.title": "Payments",
    "services.payments.desc": "Send money, pay bills, and manage finances all in one secure wallet.",
    "services.insurance.title": "Insurance",
    "services.insurance.desc": "Protect what matters with affordable coverage for rides and deliveries.",
    "services.learnmore": "Learn more",
    
    // How it works
    "how.badge": "How It Works",
    "how.title": "Get started in minutes",
    "how.subtitle": "Simple, fast, and designed for your convenience.",
    "how.step1.title": "Download & Sign Up",
    "how.step1.desc": "Get the app and create your account in seconds with just your phone number.",
    "how.step2.title": "Choose Your Service",
    "how.step2.desc": "Select a ride, browse restaurants, or access payment features instantly.",
    "how.step3.title": "Enjoy & Pay",
    "how.step3.desc": "Complete your journey or order and pay securely through the app.",
    
    // Driver/Partner
    "driver.badge": "Opportunities",
    "driver.title": "Grow with us",
    "driver.subtitle": "Join thousands of drivers and restaurant partners earning on their own terms.",
    "driver.driver.title": "Drive & Earn",
    "driver.driver.desc": "Set your own schedule and earn competitive income. Flexible hours, instant payouts.",
    "driver.driver.benefit1": "Flexible working hours",
    "driver.driver.benefit2": "Weekly guaranteed bonuses",
    "driver.driver.benefit3": "Insurance coverage included",
    "driver.driver.cta": "Start Driving",
    "driver.partner.title": "Partner Your Restaurant",
    "driver.partner.desc": "Reach more customers and grow your business with our delivery network.",
    "driver.partner.benefit1": "Access to millions of customers",
    "driver.partner.benefit2": "Real-time order management",
    "driver.partner.benefit3": "Marketing & promotional support",
    "driver.partner.cta": "Become a Partner",
    
    // Features
    "features.badge": "Features",
    "features.title": "Built for your lifestyle",
    "features.subtitle": "Powerful features designed to make every experience seamless and enjoyable.",
    "features.tracking.title": "Real-Time Tracking",
    "features.tracking.desc": "Watch your ride or delivery arrive in real-time with precise GPS tracking and accurate ETAs.",
    "features.payments.title": "Secure Payments",
    "features.payments.desc": "Multiple payment options with bank-level encryption. Pay with cards, wallet, or cash.",
    "features.support.title": "24/7 Support",
    "features.support.desc": "Our dedicated team is always ready to help you with any questions or concerns.",
    
    // Cities
    "cities.badge": "Coverage",
    "cities.title": "Available across Morocco",
    "cities.subtitle": "We&apos;re rapidly expanding to bring our services to more cities.",
    "cities.stats.cities": "Active Cities",
    "cities.stats.regions": "Regions",
    "cities.stats.coming": "Coming Soon",
    "cities.notfound": "Don&apos;t see your city?",
    "cities.letusknow": "Let us know",
    "cities.prioritize": "and we&apos;ll prioritize it.",
    
    // Testimonials
    "testimonials.badge": "Testimonials",
    "testimonials.title": "Loved by thousands",
    "testimonials.subtitle": "See what our users have to say about their experience.",
    
    // CTA
    "cta.title": "Ready to get started?",
    "cta.subtitle": "Join millions of users enjoying seamless rides, delicious food, and easy payments.",
    "cta.download": "Download for Free",
    "cta.demo": "Request Demo",
    "cta.trust1": "No credit card required",
    "cta.trust2": "Free to download",
    "cta.trust3": "Cancel anytime",
    
    // Footer
    "footer.desc": "Your all-in-one platform for rides, food delivery, and payments. Making everyday life simpler.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.newsletter": "Stay Updated",
    "footer.newsletter.desc": "Subscribe to our newsletter for the latest updates and offers.",
    "footer.email": "Enter your email",
    "footer.subscribe": "Subscribe",
    "footer.rights": "All rights reserved.",
    "footer.language": "Language",
  },
  fr: {
    // Navbar
    "nav.services": "Services",
    "nav.ride": "Transport",
    "nav.food": "Nourriture",
    "nav.payments": "Paiements",
    "nav.driver": "Devenir Chauffeur",
    "nav.partner": "Devenir Partenaire",
    "nav.help": "Aide",
    "nav.signin": "Connexion",
    "nav.getstarted": "Commencer",
    
    // Hero
    "hero.badge": "Une App, Des Possibilités Infinies",
    "hero.title": "Transport, Nourriture & Paiements",
    "hero.title2": "Tout en Un Seul Endroit",
    "hero.subtitle": "Réservez des trajets instantanément, commandez dans vos restaurants préférés et effectuez des paiements en toute simplicité.",
    "hero.download": "Télécharger l'App",
    "hero.learnmore": "En Savoir Plus",
    "hero.tab.ride": "Réserver un Trajet",
    "hero.tab.food": "Commander à Manger",
    "hero.pickup": "Point de départ",
    "hero.dropoff": "Destination",
    "hero.findride": "Trouver un Trajet",
    "hero.restaurant": "Rechercher restaurants ou plats",
    "hero.ordernow": "Commander",
    "hero.stat.rides": "Trajets Mensuels",
    "hero.stat.restaurants": "Restaurants Partenaires",
    "hero.stat.users": "Utilisateurs Satisfaits",
    
    // Services
    "services.badge": "Nos Services",
    "services.title": "Tout ce dont vous avez besoin",
    "services.subtitle": "Du transport à la livraison de repas, nous vous accompagnons avec des services intégrés.",
    "services.ride.title": "Transport",
    "services.ride.desc": "Des trajets sûrs et fiables à portée de main. De l'économique au premium.",
    "services.food.title": "Livraison de Repas",
    "services.food.desc": "Des repas délicieux de vos restaurants préférés livrés frais à votre porte.",
    "services.payments.title": "Paiements",
    "services.payments.desc": "Envoyez de l'argent, payez vos factures et gérez vos finances en toute sécurité.",
    "services.insurance.title": "Assurance",
    "services.insurance.desc": "Protégez ce qui compte avec une couverture abordable pour vos trajets et livraisons.",
    "services.learnmore": "En savoir plus",
    
    // How it works
    "how.badge": "Comment Ça Marche",
    "how.title": "Démarrez en quelques minutes",
    "how.subtitle": "Simple, rapide et conçu pour votre confort.",
    "how.step1.title": "Téléchargez et Inscrivez-vous",
    "how.step1.desc": "Téléchargez l'app et créez votre compte en quelques secondes avec votre numéro.",
    "how.step2.title": "Choisissez Votre Service",
    "how.step2.desc": "Sélectionnez un trajet, parcourez les restaurants ou accédez aux fonctions de paiement.",
    "how.step3.title": "Profitez et Payez",
    "how.step3.desc": "Terminez votre trajet ou commande et payez en toute sécurité via l'app.",
    
    // Driver/Partner
    "driver.badge": "Opportunités",
    "driver.title": "Grandissez avec nous",
    "driver.subtitle": "Rejoignez des milliers de chauffeurs et partenaires qui gagnent à leur rythme.",
    "driver.driver.title": "Conduisez et Gagnez",
    "driver.driver.desc": "Définissez vos propres horaires et gagnez un revenu compétitif. Horaires flexibles, paiements instantanés.",
    "driver.driver.benefit1": "Horaires de travail flexibles",
    "driver.driver.benefit2": "Bonus hebdomadaires garantis",
    "driver.driver.benefit3": "Assurance incluse",
    "driver.driver.cta": "Commencer à Conduire",
    "driver.partner.title": "Partenariat Restaurant",
    "driver.partner.desc": "Atteignez plus de clients et développez votre activité avec notre réseau de livraison.",
    "driver.partner.benefit1": "Accès à des millions de clients",
    "driver.partner.benefit2": "Gestion des commandes en temps réel",
    "driver.partner.benefit3": "Support marketing et promotionnel",
    "driver.partner.cta": "Devenir Partenaire",
    
    // Features
    "features.badge": "Fonctionnalités",
    "features.title": "Conçu pour votre style de vie",
    "features.subtitle": "Des fonctionnalités puissantes pour rendre chaque expérience fluide et agréable.",
    "features.tracking.title": "Suivi en Temps Réel",
    "features.tracking.desc": "Suivez l'arrivée de votre trajet ou livraison en temps réel avec un GPS précis.",
    "features.payments.title": "Paiements Sécurisés",
    "features.payments.desc": "Plusieurs options de paiement avec cryptage bancaire. Payez par carte, portefeuille ou espèces.",
    "features.support.title": "Support 24/7",
    "features.support.desc": "Notre équipe dédiée est toujours prête à vous aider.",
    
    // Cities
    "cities.badge": "Couverture",
    "cities.title": "Disponible à travers le Maroc",
    "cities.subtitle": "Nous nous développons rapidement pour apporter nos services à plus de villes.",
    "cities.stats.cities": "Villes Actives",
    "cities.stats.regions": "Régions",
    "cities.stats.coming": "Bientôt Disponible",
    "cities.notfound": "Vous ne trouvez pas votre ville ?",
    "cities.letusknow": "Dites-le nous",
    "cities.prioritize": "et nous la prioriserons.",
    
    // Testimonials
    "testimonials.badge": "Témoignages",
    "testimonials.title": "Aimé par des milliers",
    "testimonials.subtitle": "Découvrez ce que nos utilisateurs disent de leur expérience.",
    
    // CTA
    "cta.title": "Prêt à commencer ?",
    "cta.subtitle": "Rejoignez des millions d'utilisateurs profitant de trajets fluides, de bonne nourriture et de paiements faciles.",
    "cta.download": "Télécharger Gratuitement",
    "cta.demo": "Demander une Démo",
    "cta.trust1": "Pas de carte bancaire requise",
    "cta.trust2": "Téléchargement gratuit",
    "cta.trust3": "Annulez à tout moment",
    
    // Footer
    "footer.desc": "Votre plateforme tout-en-un pour les trajets, la livraison de repas et les paiements.",
    "footer.product": "Produit",
    "footer.company": "Entreprise",
    "footer.support": "Support",
    "footer.legal": "Légal",
    "footer.newsletter": "Restez Informé",
    "footer.newsletter.desc": "Abonnez-vous à notre newsletter pour les dernières mises à jour.",
    "footer.email": "Entrez votre email",
    "footer.subscribe": "S'abonner",
    "footer.rights": "Tous droits réservés.",
    "footer.language": "Langue",
  },
  ar: {
    // Navbar
    "nav.services": "الخدمات",
    "nav.ride": "التنقل",
    "nav.food": "الطعام",
    "nav.payments": "المدفوعات",
    "nav.driver": "كن سائقاً",
    "nav.partner": "كن شريكاً",
    "nav.help": "المساعدة",
    "nav.signin": "تسجيل الدخول",
    "nav.getstarted": "ابدأ الآن",
    
    // Hero
    "hero.badge": "تطبيق واحد، إمكانيات لا نهائية",
    "hero.title": "التنقل، الطعام والمدفوعات",
    "hero.title2": "كل شيء في مكان واحد",
    "hero.subtitle": "احجز رحلات فوراً، اطلب من مطاعمك المفضلة، وأجرِ مدفوعات بسهولة. كل ما تحتاجه في تطبيق واحد.",
    "hero.download": "تحميل التطبيق",
    "hero.learnmore": "اعرف المزيد",
    "hero.tab.ride": "احجز رحلة",
    "hero.tab.food": "اطلب طعام",
    "hero.pickup": "نقطة الانطلاق",
    "hero.dropoff": "الوجهة",
    "hero.findride": "ابحث عن رحلة",
    "hero.restaurant": "ابحث عن مطاعم أو أطباق",
    "hero.ordernow": "اطلب الآن",
    "hero.stat.rides": "رحلات شهرية",
    "hero.stat.restaurants": "مطاعم شريكة",
    "hero.stat.users": "مستخدمين سعداء",
    
    // Services
    "services.badge": "خدماتنا",
    "services.title": "كل ما تحتاجه في تطبيق واحد",
    "services.subtitle": "من التنقل في المدينة إلى طلب وجباتك المفضلة، نحن هنا لخدمتك بخدمات متكاملة.",
    "services.ride.title": "التنقل",
    "services.ride.desc": "رحلات آمنة وموثوقة في متناول يدك. اختر من الاقتصادي إلى الفاخر.",
    "services.food.title": "توصيل الطعام",
    "services.food.desc": "وجبات لذيذة من مطاعمك المفضلة تُوصل طازجة إلى بابك.",
    "services.payments.title": "المدفوعات",
    "services.payments.desc": "أرسل المال، ادفع الفواتير، وأدر أموالك في محفظة واحدة آمنة.",
    "services.insurance.title": "التأمين",
    "services.insurance.desc": "احمِ ما يهمك بتغطية ميسورة للرحلات والتوصيل.",
    "services.learnmore": "اعرف المزيد",
    
    // How it works
    "how.badge": "كيف يعمل",
    "how.title": "ابدأ في دقائق",
    "how.subtitle": "بسيط، سريع، ومصمم لراحتك.",
    "how.step1.title": "حمّل وسجّل",
    "how.step1.desc": "حمّل التطبيق وأنشئ حسابك في ثوانٍ برقم هاتفك فقط.",
    "how.step2.title": "اختر خدمتك",
    "how.step2.desc": "اختر رحلة، تصفح المطاعم، أو استخدم ميزات الدفع فوراً.",
    "how.step3.title": "استمتع وادفع",
    "how.step3.desc": "أكمل رحلتك أو طلبك وادفع بأمان عبر التطبيق.",
    
    // Driver/Partner
    "driver.badge": "الفرص",
    "driver.title": "انمُ معنا",
    "driver.subtitle": "انضم لآلاف السائقين وشركاء المطاعم الذين يكسبون بشروطهم.",
    "driver.driver.title": "قُد واكسب",
    "driver.driver.desc": "حدد جدولك الخاص واكسب دخلاً تنافسياً. ساعات مرنة، دفعات فورية.",
    "driver.driver.benefit1": "ساعات عمل مرنة",
    "driver.driver.benefit2": "مكافآت أسبوعية مضمونة",
    "driver.driver.benefit3": "تغطية تأمينية مشمولة",
    "driver.driver.cta": "ابدأ القيادة",
    "driver.partner.title": "اشترك مع مطعمك",
    "driver.partner.desc": "الوصول إلى مزيد من العملاء وتنمية عملك مع شبكة التوصيل لدينا.",
    "driver.partner.benefit1": "الوصول لملايين العملاء",
    "driver.partner.benefit2": "إدارة الطلبات في الوقت الفعلي",
    "driver.partner.benefit3": "دعم تسويقي وترويجي",
    "driver.partner.cta": "كن شريكاً",
    
    // Features
    "features.badge": "المميزات",
    "features.title": "مصمم لأسلوب حياتك",
    "features.subtitle": "ميزات قوية مصممة لجعل كل تجربة سلسة وممتعة.",
    "features.tracking.title": "تتبع في الوقت الفعلي",
    "features.tracking.desc": "شاهد وصول رحلتك أو توصيلك في الوقت الفعلي مع GPS دقيق.",
    "features.payments.title": "مدفوعات آمنة",
    "features.payments.desc": "خيارات دفع متعددة مع تشفير بمستوى البنوك. ادفع بالبطاقة، المحفظة، أو نقداً.",
    "features.support.title": "دعم 24/7",
    "features.support.desc": "فريقنا المتخصص دائماً جاهز لمساعدتك.",
    
    // Cities
    "cities.badge": "التغطية",
    "cities.title": "متوفر في جميع أنحاء المغرب",
    "cities.subtitle": "نتوسع بسرعة لجلب خدماتنا إلى المزيد من المدن.",
    "cities.stats.cities": "مدن نشطة",
    "cities.stats.regions": "مناطق",
    "cities.stats.coming": "قريباً",
    "cities.notfound": "لا تجد مدينتك؟",
    "cities.letusknow": "أخبرنا",
    "cities.prioritize": "وسنعطيها الأولوية.",
    
    // Testimonials
    "testimonials.badge": "الشهادات",
    "testimonials.title": "محبوب من الآلاف",
    "testimonials.subtitle": "اطلع على ما يقوله مستخدمونا عن تجربتهم.",
    
    // CTA
    "cta.title": "مستعد للبدء؟",
    "cta.subtitle": "انضم لملايين المستخدمين الذين يستمتعون برحلات سلسة، طعام لذيذ، ومدفوعات سهلة.",
    "cta.download": "تحميل مجاني",
    "cta.demo": "طلب عرض توضيحي",
    "cta.trust1": "لا حاجة لبطاقة ائتمان",
    "cta.trust2": "تحميل مجاني",
    "cta.trust3": "إلغاء في أي وقت",
    
    // Footer
    "footer.desc": "منصتك الشاملة للتنقل، توصيل الطعام، والمدفوعات. نجعل الحياة اليومية أبسط.",
    "footer.product": "المنتج",
    "footer.company": "الشركة",
    "footer.support": "الدعم",
    "footer.legal": "قانوني",
    "footer.newsletter": "ابقَ على اطلاع",
    "footer.newsletter.desc": "اشترك في نشرتنا الإخبارية لآخر التحديثات والعروض.",
    "footer.email": "أدخل بريدك الإلكتروني",
    "footer.subscribe": "اشترك",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.language": "اللغة",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }, [])

  const t = useCallback((key: string): string => {
    return translations[language][key] || key
  }, [language])

  const isRTL = language === "ar"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
