import { NextResponse } from "next/server"

type LeadPayload = {
  pickupLocation?: string
  dropoffLocation?: string
  pickupChosenFromMap?: boolean
  dropoffChosenFromMap?: boolean
}

export async function POST(request: Request) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Telegram integration is not configured." },
        { status: 500 },
      )
    }

    const body = (await request.json()) as LeadPayload
    const pickupLocation = body.pickupLocation?.trim() ?? ""
    const dropoffLocation = body.dropoffLocation?.trim() ?? ""
    const pickupChosenFromMap = Boolean(body.pickupChosenFromMap)
    const dropoffChosenFromMap = Boolean(body.dropoffChosenFromMap)

    if (!pickupLocation || !dropoffLocation) {
      return NextResponse.json(
        { error: "Pickup and drop-off locations are required." },
        { status: 400 },
      )
    }

    const message = [
      "New 1WON ride request",
      "",
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
