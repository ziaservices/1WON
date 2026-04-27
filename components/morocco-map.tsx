"use client"

import { useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps"
import { useLanguage } from "@/lib/language-context"

// Real Moroccan cities with actual coordinates
const moroccanCities = [
  { name: "Casablanca", nameAr: "الدار البيضاء", nameFr: "Casablanca", coordinates: [-7.5898, 33.5731] as [number, number], active: true, size: "large" },
  { name: "Rabat", nameAr: "الرباط", nameFr: "Rabat", coordinates: [-6.8498, 34.0209] as [number, number], active: true, size: "large" },
  { name: "Marrakech", nameAr: "مراكش", nameFr: "Marrakech", coordinates: [-7.9811, 31.6295] as [number, number], active: true, size: "large" },
  { name: "Fes", nameAr: "فاس", nameFr: "Fès", coordinates: [-5.0003, 34.0181] as [number, number], active: true, size: "large" },
  { name: "Tangier", nameAr: "طنجة", nameFr: "Tanger", coordinates: [-5.8326, 35.7595] as [number, number], active: true, size: "medium" },
  { name: "Agadir", nameAr: "أكادير", nameFr: "Agadir", coordinates: [-9.5981, 30.4278] as [number, number], active: true, size: "medium" },
  { name: "Meknes", nameAr: "مكناس", nameFr: "Meknès", coordinates: [-5.5473, 33.8935] as [number, number], active: true, size: "medium" },
  { name: "Oujda", nameAr: "وجدة", nameFr: "Oujda", coordinates: [-1.9086, 34.6814] as [number, number], active: true, size: "medium" },
  { name: "Kenitra", nameAr: "القنيطرة", nameFr: "Kénitra", coordinates: [-6.5802, 34.2610] as [number, number], active: true, size: "small" },
  { name: "Tetouan", nameAr: "تطوان", nameFr: "Tétouan", coordinates: [-5.3684, 35.5889] as [number, number], active: true, size: "small" },
  { name: "El Jadida", nameAr: "الجديدة", nameFr: "El Jadida", coordinates: [-8.5007, 33.2316] as [number, number], active: true, size: "small" },
  { name: "Safi", nameAr: "آسفي", nameFr: "Safi", coordinates: [-9.2372, 32.2994] as [number, number], active: true, size: "small" },
  { name: "Mohammedia", nameAr: "المحمدية", nameFr: "Mohammedia", coordinates: [-7.3828, 33.6866] as [number, number], active: true, size: "small" },
  { name: "Beni Mellal", nameAr: "بني ملال", nameFr: "Béni Mellal", coordinates: [-6.3498, 32.3373] as [number, number], active: true, size: "small" },
  { name: "Nador", nameAr: "الناظور", nameFr: "Nador", coordinates: [-2.9287, 35.1681] as [number, number], active: true, size: "small" },
  { name: "Essaouira", nameAr: "الصويرة", nameFr: "Essaouira", coordinates: [-9.7595, 31.5085] as [number, number], active: false, size: "small" },
  { name: "Ouarzazate", nameAr: "ورزازات", nameFr: "Ouarzazate", coordinates: [-6.8936, 30.9189] as [number, number], active: false, size: "small" },
  { name: "Errachidia", nameAr: "الراشيدية", nameFr: "Errachidia", coordinates: [-4.4266, 31.9314] as [number, number], active: false, size: "small" },
]

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/morocco/morocco-regions.json"

export function MoroccoMap() {
  const { language } = useLanguage()
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  const getCityName = (city: typeof moroccanCities[0]) => {
    switch (language) {
      case "ar":
        return city.nameAr
      case "fr":
        return city.nameFr
      default:
        return city.name
    }
  }

  const getMarkerSize = (size: string) => {
    switch (size) {
      case "large":
        return 8
      case "medium":
        return 6
      default:
        return 4
    }
  }

  return (
    <div className="relative w-full h-[400px] lg:h-[500px]">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [-6, 32],
          scale: 2200,
        }}
        className="w-full h-full"
      >
        <ZoomableGroup center={[-6, 32]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="hsl(var(--primary) / 0.15)"
                  stroke="hsl(var(--primary) / 0.3)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "hsl(var(--primary) / 0.25)", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {moroccanCities.map((city) => (
            <Marker
              key={city.name}
              coordinates={city.coordinates}
              onMouseEnter={() => setHoveredCity(city.name)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              {/* Pulse animation for active cities */}
              {city.active && (
                <circle
                  r={getMarkerSize(city.size) + 4}
                  fill="hsl(var(--primary) / 0.3)"
                  className="animate-ping"
                />
              )}
              {/* Main marker */}
              <circle
                r={getMarkerSize(city.size)}
                fill={city.active ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                stroke="white"
                strokeWidth={2}
                className="cursor-pointer transition-transform hover:scale-125"
              />
              {/* Label on hover or for large cities */}
              {(hoveredCity === city.name || city.size === "large") && (
                <text
                  textAnchor="middle"
                  y={-12}
                  className="fill-foreground text-[10px] font-medium pointer-events-none"
                >
                  {getCityName(city)}
                </text>
              )}
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border shadow-lg">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-foreground">{language === "ar" ? "نشط" : language === "fr" ? "Actif" : "Active"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted-foreground" />
            <span className="text-foreground">{language === "ar" ? "قريباً" : language === "fr" ? "Bientôt" : "Coming Soon"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
