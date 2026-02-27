"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FadeIn, BlurIn } from "@/components/animations"
import { Calendar, Clock, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"

const serviceOptions = [
  { value: "reiki-session", label: "Reiki Session – 60 min · $85" },
  { value: "distance-reiki", label: "Distance Reiki – 45 min · $70" },
  { value: "chakra-balancing", label: "Chakra Balancing – 75 min · $95" },
  { value: "home-space-clearing", label: "Home Space Clearing – 90–120 min · from $150" },
  { value: "office-space-clearing", label: "Office Space Clearing – 60–90 min · from $175" },
  { value: "new-home-blessing", label: "New Home Blessing – 60 min · $125" },
  { value: "initial-consultation", label: "Initial Consultation – 30 min · Free" },
  { value: "wellness-coaching", label: "Wellness Coaching – 60 min · $75" },
  { value: "other", label: "Other / Not sure yet" },
]

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  mode: "",
  message: "",
}

const formatMailtoBody = (state: typeof initialState) => {
  const lines = [
    "Booking request from Sage The Space website:",
    "",
    `Name: ${state.name}`,
    `Email: ${state.email}`,
    state.phone ? `Phone: ${state.phone}` : "",
    state.service ? `Service: ${serviceOptions.find((s) => s.value === state.service)?.label ?? state.service}` : "",
    state.preferredDate ? `Preferred date: ${state.preferredDate}` : "",
    state.preferredTime ? `Preferred time: ${state.preferredTime}` : "",
    state.mode ? `Session type: ${state.mode === "in-person" ? "In-person (Walnut Creek, CA)" : "Remote / Distance"}` : "",
    "",
    "Message / intentions:",
    state.message || "(no additional message)",
  ].filter(Boolean)

  return encodeURIComponent(lines.join("\n"))
}

export default function BookingPage() {
  const [formState, setFormState] = useState(initialState)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const scrollToBookingDetails = () => {
    const section = document.getElementById("booking-details")
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || "Unable to submit booking right now.")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative py-10 lg:py-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/60 via-background to-background" />
          <div className="absolute top-20 right-[15%] w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-[10%] w-72 h-72 bg-accent/8 rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
            <BlurIn>
              <div className="mx-auto max-w-2xl text-center">
                <button
                  type="button"
                  onClick={scrollToBookingDetails}
                  className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 hover:bg-primary/15 hover:border-primary/40 transition-colors"
                >
                  <Sparkles className="h-4 w-4" />
                  Energy Healing &amp; Space Clearing
                </button>
                <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold text-foreground text-balance">
                  Book Your Healing Session
                </h1>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Share a few details about the support you&apos;re looking for, and I will follow up personally to
                  confirm your time and answer any questions. Sessions are available in-person in Walnut Creek, CA and
                  remotely worldwide.
                </p>
              </div>
            </BlurIn>
          </div>
        </section>

        {/* Booking form */}
        <section id="booking-details" className="py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16 items-start">
              <FadeIn>
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">Booking Details</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    I will review your request and add it to my calendar if the time works. You&apos;ll receive a
                    follow-up email to confirm your appointment and share any preparation tips.
                  </p>

                  {isSubmitted ? (
                    <div className="mt-8 text-center py-10">
                      <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                        Thank you for your request
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Your request has been sent. Your session details have been added to my calendar, and I will be
                        in touch soon to confirm your booking.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6 rounded-full"
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormState(initialState)
                        }}
                      >
                        Submit another request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="name" className="text-foreground text-sm">
                            Name
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="mt-1.5 h-11 rounded-xl"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-foreground text-sm">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="mt-1.5 h-11 rounded-xl"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="phone" className="text-foreground text-sm">
                            Phone (optional)
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="mt-1.5 h-11 rounded-xl"
                            placeholder="(optional)"
                          />
                        </div>
                        <div>
                          <Label htmlFor="service" className="text-foreground text-sm">
                            Desired service
                          </Label>
                          <select
                            id="service"
                            value={formState.service}
                            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                            className="mt-1.5 w-full h-11 rounded-xl border border-input bg-background px-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            required
                          >
                            <option value="">Select a service</option>
                            {serviceOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="preferredDate" className="text-foreground text-sm flex items-center gap-1.5">
                            Preferred date
                            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          </Label>
                          <Input
                            id="preferredDate"
                            type="date"
                            value={formState.preferredDate}
                            onChange={(e) => setFormState({ ...formState, preferredDate: e.target.value })}
                            className="mt-1.5 h-11 rounded-xl"
                          />
                        </div>
                        <div>
                          <Label htmlFor="preferredTime" className="text-foreground text-sm flex items-center gap-1.5">
                            Preferred time
                            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                          </Label>
                          <Input
                            id="preferredTime"
                            type="text"
                            value={formState.preferredTime}
                            onChange={(e) => setFormState({ ...formState, preferredTime: e.target.value })}
                            className="mt-1.5 h-11 rounded-xl"
                            placeholder="Morning, afternoon, evening..."
                          />
                        </div>
                      </div>

                      <div>
                        <Label className="text-foreground text-sm">Session type</Label>
                        <div className="mt-2 grid gap-3 sm:grid-cols-2">
                          <button
                            type="button"
                            className={`flex flex-col items-start rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                              formState.mode === "in-person"
                                ? "border-primary bg-primary/5 text-foreground"
                                : "border-border hover:border-primary/40"
                            }`}
                            onClick={() => setFormState({ ...formState, mode: "in-person" })}
                          >
                            <span className="font-medium">In-person</span>
                            <span className="text-xs text-muted-foreground">Walnut Creek, CA</span>
                          </button>
                          <button
                            type="button"
                            className={`flex flex-col items-start rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                              formState.mode === "remote"
                                ? "border-primary bg-primary/5 text-foreground"
                                : "border-border hover:border-primary/40"
                            }`}
                            onClick={() => setFormState({ ...formState, mode: "remote" })}
                          >
                            <span className="font-medium">Remote / Distance</span>
                            <span className="text-xs text-muted-foreground">By video or phone</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-foreground text-sm">
                          Anything you&apos;d like to share
                        </Label>
                        <Textarea
                          id="message"
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="mt-1.5 resize-none rounded-xl"
                          placeholder="Intentions for the session, what you are moving through, or any questions..."
                        />
                      </div>

                      {error && (
                        <p
                          className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2"
                          aria-live="polite"
                        >
                          {error}
                        </p>
                      )}

                      <Button
                        type="submit"
                        className="w-full h-12 rounded-full text-base shadow-md shadow-primary/15"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Submit booking request"}
                      </Button>
                    </form>
                  )}
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <aside className="space-y-6">
                  <div className="rounded-2xl border border-border bg-muted/40 p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground">Prefer to book instantly?</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      You can also choose your service and time directly through my Vagaro booking page.
                    </p>
                    <Button className="mt-4 w-full rounded-full" asChild>
                      <Link href="https://www.vagaro.com/sagethespace" target="_blank" rel="noopener noreferrer">
                        Book on Vagaro
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6 space-y-3 text-sm text-muted-foreground">
                    <h3 className="font-serif text-base font-semibold text-foreground">What happens next</h3>
                    <ol className="list-decimal list-inside space-y-1.5">
                      <li>You submit your booking request with your preferred details.</li>
                      <li>I review your request and check availability.</li>
                      <li>I email you back to confirm your session and share any preparation tips.</li>
                    </ol>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6 space-y-4 text-sm text-muted-foreground">
                    <h3 className="font-serif text-base font-semibold text-foreground">Location & Hours</h3>
                    <div>
                      <p className="font-medium text-foreground">Sage The Space</p>
                      <p>Walnut Creek, CA</p>
                      <p className="mt-1">Sessions available in-person and remotely worldwide.</p>
                    </div>
                    <div className="pt-2 border-t border-border/60">
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p>Monday – Saturday · By appointment</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6 space-y-3 text-sm text-muted-foreground">
                    <h3 className="font-serif text-base font-semibold text-foreground">Client Experiences</h3>
                    <p className="italic text-foreground">
                      “The session was truly transformative. I left feeling lighter, clearer, and more connected to
                      myself than I have in years.”
                    </p>
                    <p className="text-xs text-muted-foreground">— Sarah M., Energy Healing client</p>
                    <p className="italic text-foreground">
                      “After the space clearing, my home feels completely different. There is a peace and calm that was
                      not there before.”
                    </p>
                    <p className="text-xs text-muted-foreground">— Michael R., Space Clearing client</p>
                  </div>
                </aside>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

