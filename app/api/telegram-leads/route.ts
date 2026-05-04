import { NextResponse } from "next/server"

type LeadPayload = {
  fullName?: string
  phoneNumber?: string
  pickupLocation?: string
  dropoffLocation?: string
  pickupChosenFromMap?: boolean
  dropoffChosenFromMap?: boolean
}

export async function POST(request: Request) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim()
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim()

    if (!botToken || !chatId) {
      const missing = [
        !botToken ? "TELEGRAM_BOT_TOKEN" : null,
        !chatId ? "TELEGRAM_CHAT_ID" : null,
      ].filter(Boolean)
      return NextResponse.json(
        {
          error: "Telegram integration is not configured.",
          missing,
        },
        { status: 500 },
      )
    }

    const body = (await request.json()) as LeadPayload
    const fullName = body.fullName?.trim() ?? ""
    const phoneNumber = body.phoneNumber?.trim() ?? ""
    const pickupLocation = body.pickupLocation?.trim() ?? ""
    const dropoffLocation = body.dropoffLocation?.trim() ?? ""
    const pickupChosenFromMap = Boolean(body.pickupChosenFromMap)
    const dropoffChosenFromMap = Boolean(body.dropoffChosenFromMap)

    if (!fullName || !phoneNumber || !pickupLocation || !dropoffLocation) {
      return NextResponse.json(
        {
          error:
            "Full name, phone number, pickup and drop-off locations are required.",
        },
        { status: 400 },
      )
    }

    const message = [
      "Nod t7awa 3ndk ride jdida!  🚗",
      "",
      `Smiat khona/khtna: ${fullName}`,
      `nmra: ${phoneNumber}`,
      `Pickup: ${pickupLocation}`,
      `Drop-off: ${dropoffLocation}`,
      `Pickup from map: ${pickupChosenFromMap ? "Yes" : "No"}`,
      `Drop-off from map: ${dropoffChosenFromMap ? "Yes" : "No"}`,
      `Time: ${new Date().toISOString()}`,
    ].join("\n")

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      },
    )

    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.text()
      return NextResponse.json(
        { error: `Telegram API error: ${telegramError}` },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "Failed to send lead to Telegram." },
      { status: 500 },
    )
  }
}
