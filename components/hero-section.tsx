"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MapPin, Navigation, Search, ArrowRight, Car, UtensilsCrossed, Map } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"ride" | "food">("ride")
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [pickupLocation, setPickupLocation] = useState("")
  const [dropoffLocation, setDropoffLocation] = useState("")
  const [pickupChosenFromMap, setPickupChosenFromMap] = useState(false)
  const [dropoffChosenFromMap, setDropoffChosenFromMap] = useState(false)
  const [mapTarget, setMapTarget] = useState<"pickup" | "dropoff">("pickup")
  const [mapOpen, setMapOpen] = useState(false)
  const [isSubmittingRide, setIsSubmittingRide] = useState(false)
  const [rideSubmitMessage, setRideSubmitMessage] = useState("")
  const [rideSubmitError, setRideSubmitError] = useState(false)
  const { t, isRTL } = useLanguage()

  const handleSelectOnMap = (target: "pickup" | "dropoff") => {
    setMapTarget(target)
    setMapOpen(true)
  }

  return (
    <>
    {/* Map Selection Dialog */}
    <Dialog open={mapOpen} onOpenChange={setMapOpen}>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className={cn(isRTL && "text-right")}>
            {mapTarget === "pickup" 
              ? (isRTL ? "اختر موقع الالتقاط" : "Select Pickup Location")
              : (isRTL ? "اختر موقع التوصيل" : "Select Drop-off Location")
            }
          </DialogTitle>
        </DialogHeader>
        <div className="p-4 pt-2">
          <p className={cn("text-sm text-muted-foreground mb-4", isRTL && "text-right")}>
            {isRTL 
              ? "انقر على الخريطة لتحديد موقعك. يمكنك التكبير والتصغير للعثور على الموقع الدقيق."
              : "Click on the map to select your location. You can zoom in and out to find the exact spot."
            }
          </p>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1ByOi6Mz2FTysOoPt6TW9l_Nya6AK0Ac&ehbc=2E312F" 
              width="100%" 
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Morocco Map"
              className="absolute inset-0"
            />
          </div>
          <div className="flex gap-3 mt-4">
            <Button 
              variant="outline" 
              onClick={() => setMapOpen(false)}
              className="flex-1"
            >
              {isRTL ? "إلغاء" : "Cancel"}
            </Button>
            <Button 
              onClick={() => {
                // In a real app, you would get the selected location from the map
                const selectedLocation = isRTL ? "موقع محدد من الخريطة" : "Location from map"
                if (mapTarget === "pickup") {
                  setPickupLocation(selectedLocation)
                  setPickupChosenFromMap(true)
                } else {
                  setDropoffLocation(selectedLocation)
                  setDropoffChosenFromMap(true)
                }
                setMapOpen(false)
              }}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              {isRTL ? "تأكيد الموقع" : "Confirm Location"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    <section className="relative isolate min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/35 via-background/40 to-background/50" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-50" />
      
      {/* Floating Elements */}
      <div className="absolute top-40 left-20 w-16 h-16 bg-primary/20 rounded-2xl rotate-12 animate-pulse hidden lg:block" />
      <div className="absolute bottom-40 right-40 w-12 h-12 bg-accent/20 rounded-full animate-bounce hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className={cn(
          "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
          isRTL && "lg:grid-flow-col-dense"
        )}>
          {/* Left Content */}
          <div className={cn(
            "text-center lg:text-left space-y-8 animate-in fade-in duration-700",
            isRTL ? "lg:text-right slide-in-from-right-8" : "slide-in-from-left-8"
          )}>
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium",
              isRTL && "flex-row-reverse"
            )}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t("hero.badge")}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              {t("hero.title")},{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t("hero.title2")}
              </span>
            </h1>

            <p className={cn(
              "text-lg sm:text-xl text-muted-foreground max-w-lg text-pretty",
              isRTL ? "mr-auto lg:mr-0 lg:ml-auto" : "mx-auto lg:mx-0"
            )}>
              {t("hero.subtitle")}
            </p>

            <div className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center",
              isRTL ? "lg:justify-end sm:flex-row-reverse" : "lg:justify-start"
            )}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8">
                <Car className="w-5 h-5" />
                {t("hero.tab.ride")}
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-primary/30 hover:bg-primary/10">
                <UtensilsCrossed className="w-5 h-5" />
                {t("hero.tab.food")}
              </Button>
            </div>

            {/* Stats */}
            <div className={cn(
              "grid grid-cols-3 gap-6 pt-8 border-t border-border/50",
              isRTL && "direction-rtl"
            )}>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">2M+</div>
                <div className="text-sm text-muted-foreground">{t("hero.stat.users")}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">{t("hero.stat.rides")}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">5K+</div>
                <div className="text-sm text-muted-foreground">{t("hero.stat.restaurants")}</div>
              </div>
            </div>
          </div>

          {/* Right - Interactive Booking Card */}
          <div className={cn(
            "animate-in fade-in duration-700 delay-200",
            isRTL ? "slide-in-from-left-8 lg:col-start-1" : "slide-in-from-right-8"
          )}>
            <div className="bg-card rounded-3xl shadow-2xl shadow-primary/10 p-6 sm:p-8 border border-border/50">
              {/* Tabs */}
              <div className={cn("flex gap-2 p-1 bg-muted rounded-xl mb-6", isRTL && "flex-row-reverse")}>
                <button
                  onClick={() => setActiveTab("ride")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200",
                    isRTL && "flex-row-reverse",
                    activeTab === "ride"
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Car className="w-5 h-5" />
                  {t("nav.ride")}
                </button>
                <button
                  onClick={() => setActiveTab("food")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200",
                    isRTL && "flex-row-reverse",
                    activeTab === "food"
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <UtensilsCrossed className="w-5 h-5" />
                  {t("nav.food")}
                </button>
              </div>

              {/* Ride Form */}
              {activeTab === "ride" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <Input
                    placeholder={isRTL ? "الاسم الكامل" : "Full name"}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={cn(
                      "h-14 bg-muted/50 border-0 rounded-xl text-base",
                      isRTL && "text-right",
                    )}
                  />
                  <Input
                    placeholder={isRTL ? "رقم الهاتف" : "Phone number"}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={cn(
                      "h-14 bg-muted/50 border-0 rounded-xl text-base",
                      isRTL && "text-right",
                    )}
                  />
                  <div className="relative">
                    <MapPin className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-5 h-5 text-primary",
                      isRTL ? "right-4" : "left-4"
                    )} />
                    <Input
                      placeholder={t("hero.pickup")}
                      value={pickupLocation}
                      onChange={(e) => {
                        setPickupLocation(e.target.value)
                        setPickupChosenFromMap(false)
                      }}
                      className={cn(
                        "h-14 bg-muted/50 border-0 rounded-xl text-base",
                        isRTL ? "pr-12 pr-24 text-right" : "pl-12 pr-24"
                      )}
                    />
                    <button
                      onClick={() => handleSelectOnMap("pickup")}
                      className={cn(
                        "absolute top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 text-xs font-medium text-primary hover:text-primary/80 hover:bg-primary/10 rounded-md transition-colors",
                        isRTL ? "left-2" : "right-2"
                      )}
                    >
                      <Map className="w-3.5 h-3.5" />
                      {isRTL ? "الخريطة" : "Map"}
                    </button>
                    <div className={cn(
                      "absolute top-full w-0.5 h-4 bg-primary/30",
                      isRTL ? "right-[22px]" : "left-[22px]"
                    )} />
                  </div>
                  <div className="relative">
                    <Navigation className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-5 h-5 text-accent",
                      isRTL ? "right-4" : "left-4"
                    )} />
                    <Input
                      placeholder={t("hero.dropoff")}
                      value={dropoffLocation}
                      onChange={(e) => {
                        setDropoffLocation(e.target.value)
                        setDropoffChosenFromMap(false)
                      }}
                      className={cn(
                        "h-14 bg-muted/50 border-0 rounded-xl text-base",
                        isRTL ? "pr-12 pr-24 text-right" : "pl-12 pr-24"
                      )}
                    />
                    <button
                      onClick={() => handleSelectOnMap("dropoff")}
                      className={cn(
                        "absolute top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 text-xs font-medium text-accent hover:text-accent/80 hover:bg-accent/10 rounded-md transition-colors",
                        isRTL ? "left-2" : "right-2"
                      )}
                    >
                      <Map className="w-3.5 h-3.5" />
                      {isRTL ? "الخريطة" : "Map"}
                    </button>
                  </div>
                  <Button
                    disabled={isSubmittingRide}
                    onClick={async () => {
                      if (
                        !fullName.trim() ||
                        !phoneNumber.trim() ||
                        !pickupLocation.trim() ||
                        !dropoffLocation.trim()
                      ) {
                        setRideSubmitError(true)
                        setRideSubmitMessage(
                          isRTL
                            ? "يرجى إدخال الاسم الكامل ورقم الهاتف وموقعي الالتقاط والتوصيل."
                            : "Please provide full name, phone number, pickup and drop-off locations.",
                        )
                        return
                      }

                      try {
                        setIsSubmittingRide(true)
                        setRideSubmitMessage("")
                        setRideSubmitError(false)
                        const response = await fetch("/api/telegram-leads", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            fullName,
                            phoneNumber,
                            pickupLocation,
                            dropoffLocation,
                            pickupChosenFromMap,
                            dropoffChosenFromMap,
                          }),
                        })

                        if (!response.ok) {
                          let errorMessage = "Failed to submit request"
                          try {
                            const errorBody = await response.json()
                            if (typeof errorBody?.error === "string") {
                              errorMessage = errorBody.error
                            }
                          } catch {
                            // Keep fallback message when response is not JSON.
                          }
                          throw new Error(errorMessage)
                        }
                        setRideSubmitMessage(
                          isRTL ? "تم إرسال طلبك بنجاح." : "Your request was sent successfully.",
                        )
                      } catch (error) {
                        console.error("Telegram lead submission error:", error)
                        setRideSubmitError(true)
                        setRideSubmitMessage(
                          error instanceof Error
                            ? error.message
                            : isRTL
                              ? "فشل إرسال الطلب. حاول مرة أخرى."
                              : "Failed to submit the request. Please try again.",
                        )
                      } finally {
                        setIsSubmittingRide(false)
                      }
                    }}
                    className={cn(
                      "w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold rounded-xl gap-2",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    {isSubmittingRide ? (isRTL ? "جارٍ الإرسال..." : "Sending...") : t("hero.findride")}
                    <ArrowRight className={cn("w-5 h-5", isRTL && "rotate-180")} />
                  </Button>
                  {rideSubmitMessage && (
                    <p
                      className={cn(
                        "text-sm",
                        rideSubmitError ? "text-red-500" : "text-emerald-600",
                        isRTL && "text-right",
                      )}
                    >
                      {rideSubmitMessage}
                    </p>
                  )}
                </div>
              )}

              {/* Food Form */}
              {activeTab === "food" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="relative">
                    <Search className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-5 h-5 text-primary",
                      isRTL ? "right-4" : "left-4"
                    )} />
                    <Input
                      placeholder={t("hero.restaurant")}
                      className={cn(
                        "h-14 bg-muted/50 border-0 rounded-xl text-base",
                        isRTL ? "pr-12 text-right" : "pl-12"
                      )}
                    />
                  </div>
                  <div className="relative">
                    <MapPin className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground",
                      isRTL ? "right-4" : "left-4"
                    )} />
                    <Input
                      placeholder={t("hero.pickup")}
                      className={cn(
                        "h-14 bg-muted/50 border-0 rounded-xl text-base",
                        isRTL ? "pr-12 text-right" : "pl-12"
                      )}
                    />
                  </div>
                  <Button className={cn(
                    "w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold rounded-xl gap-2",
                    isRTL && "flex-row-reverse"
                  )}>
                    {t("hero.ordernow")}
                    <ArrowRight className={cn("w-5 h-5", isRTL && "rotate-180")} />
                  </Button>
                </div>
              )}

              {/* Quick Options */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className={cn(
                  "text-sm text-muted-foreground mb-3",
                  isRTL && "text-right"
                )}>
                  {activeTab === "ride" 
                    ? (isRTL ? "مواقع شائعة" : "Popular locations")
                    : (isRTL ? "بحث شائع" : "Popular searches")
                  }
                </p>
                <div className={cn("flex flex-wrap gap-2", isRTL && "flex-row-reverse")}>
                  {(activeTab === "ride" 
                    ? isRTL 
                      ? ["المطار", "المحطة", "وسط المدينة", "المستشفى"]
                      : ["Airport", "Train Station", "City Center", "Hospital"]
                    : isRTL
                      ? ["بيتزا", "برغر", "سوشي", "قهوة"]
                      : ["Pizza", "Burgers", "Sushi", "Coffee"]
                  ).map((item) => (
                    <button
                      key={item}
                      className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
