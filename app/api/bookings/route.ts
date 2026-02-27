import { NextResponse } from "next/server"
import { google } from "googleapis"

const calendarId = process.env.GOOGLE_CALENDAR_ID
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")

if (!calendarId || !clientEmail || !privateKey) {
  // eslint-disable-next-line no-console
  console.warn("Google Calendar env vars are not fully set; /api/bookings will fail until configured.")
}

export async function POST(request: Request) {
  try {
    if (!calendarId || !clientEmail || !privateKey) {
      return NextResponse.json(
        { error: "Booking is temporarily unavailable. Please try again later." },
        { status: 503 },
      )
    }

    const body = await request.json()
    const { name, email, phone, service, preferredDate, preferredTime, mode, message } = body

    if (!name || !email || !service) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    const jwtClient = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/calendar"],
    })

    const calendar = google.calendar({ version: "v3", auth: jwtClient })

    const now = new Date()
    const start = preferredDate ? new Date(preferredDate) : now
    const end = new Date(start.getTime() + 60 * 60 * 1000)

    const summaryParts = [`${name} – ${service}`]
    if (mode === "remote") summaryParts.push("Remote")
    if (mode === "in-person") summaryParts.push("In-person")

    const descriptionLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      `Service: ${service}`,
      preferredDate ? `Preferred date: ${preferredDate}` : "",
      preferredTime ? `Preferred time: ${preferredTime}` : "",
      mode ? `Session type: ${mode}` : "",
      "",
      "Message / intentions:",
      message || "(no additional message)",
    ].filter(Boolean)

    await calendar.events.insert({
      calendarId,
      requestBody: {
        summary: summaryParts.join(" · "),
        description: descriptionLines.join("\n"),
        start: {
          dateTime: start.toISOString(),
        },
        end: {
          dateTime: end.toISOString(),
        },
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error creating Google Calendar booking:", error)
    return NextResponse.json(
      { error: "Something went wrong while creating your booking. Please try again or contact me directly." },
      { status: 500 },
    )
  }
}

