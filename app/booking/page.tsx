\"use client\"

import { useState } from \"react\"
import Link from \"next/link\"
import { Header } from \"@/components/header\"
import { Footer } from \"@/components/footer\"
import { Button } from \"@/components/ui/button\"
import { Input } from \"@/components/ui/input\"
import { Textarea } from \"@/components/ui/textarea\"
import { Label } from \"@/components/ui/label\"
import { FadeIn, BlurIn } from \"@/components/animations\"
import { Calendar, Clock, Sparkles, ArrowRight, CheckCircle2 } from \"lucide-react\"

const serviceOptions = [
  { value: \"reiki\", label: \"Energy Healing / Reiki\" },
  { value: \"space-clearing\", label: \"Space Clearing\" },
  { value: \"wellness\", label: \"Wellness Consultation / Coaching\" },
  { value: \"other\", label: \"Other / Not Sure\" },
]

const formatMailtoBody = (state: typeof initialState) => {
  const lines = [
    \"Booking request from Sage The Space website:\",
    \"\",
    `Name: ${state.name}`,
    `Email: ${state.email}`,
    state.phone ? `Phone: ${state.phone}` : \"\",
    state.service ? `Service: ${serviceOptions.find(s => s.value === state.service)?.label ?? state.service}` : \"\",
    state.preferredDate ? `Preferred date: ${state.preferredDate}` : \"\",
    state.preferredTime ? `Preferred time: ${state.preferredTime}` : \"\",
    state.mode ? `Session type: ${state.mode === \"in-person\" ? \"In-person (Walnut Creek, CA)\" : \"Remote / Distance\"}` : \"\",
    \"\",
    \"Message / intentions:\",
    state.message || \"(no additional message)\",
  ].filter(Boolean)

  return encodeURIComponent(lines.join(\"\\n\"))
}

const initialState = {
  name: \"\",
  email: \"\",
  phone: \"\",
  service: \"\",
  preferredDate: \"\",
  preferredTime: \"\",
  mode: \"\",
  message: \"\",
}

export default function BookingPage() {
  const [formState, setFormState] = useState(initialState)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(\"New booking request from Sage The Space website\")
    const body = formatMailtoBody(formState)

    window.location.href = `mailto:hello@sagethespace.com?subject=${subject}&body=${body}`
    setIsSubmitted(true)
  }

  return (
    <div className=\"flex min-h-screen flex-col\">
      <Header />

      <main className=\"flex-1 pt-20\">
        {/* Hero */}
        <section className=\"relative py-20 lg:py-28 overflow-hidden\">
          <div className=\"absolute inset-0 bg-gradient-to-b from-muted/60 via-background to-background\" />
          <div className=\"absolute top-20 right-[15%] w-64 h-64 bg-primary/8 rounded-full blur-3xl\" />
          <div className=\"absolute bottom-10 left-[10%] w-72 h-72 bg-accent/8 rounded-full blur-3xl\" />

          <div className=\"relative mx-auto max-w-6xl px-6 lg:px-8\">
            <BlurIn>
              <div className=\"mx-auto max-w-2xl text-center\">
                <div className=\"inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20\">
                  <Sparkles className=\"h-4 w-4\" />
                  Book a Session
                </div>
                <h1 className=\"mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground text-balance\">
                  Request Your Healing Session
                </h1>
                <p className=\"mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed\">
                  Share a few details about what you&apos;re looking for, and I will follow up to confirm your time
                  and answer any questions. Sessions are available in-person in Walnut Creek, CA and remotely.
                </p>
              </div>
            </BlurIn>
          </div>
        </section>

        {/* Booking form */}
        <section className=\"py-12 lg:py-16\">
          <div className=\"mx-auto max-w-6xl px-6 lg:px-8\">
            <div className=\"grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16 items-start\">
              <FadeIn>
                <div className=\"rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm\">
                  <h2 className=\"font-serif text-xl sm:text-2xl font-semibold text-foreground\">
                    Booking Details
                  </h2>
                  <p className=\"mt-2 text-sm text-muted-foreground\">
                    I will review your request personally and respond by email to confirm your appointment and share
                    next steps.
                  </p>

                  {isSubmitted ? (
                    <div className=\"mt-8 text-center py-10\">
                      <div className=\"mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center\">
                        <CheckCircle2 className=\"h-7 w-7 text-primary\" />
                      </div>
                      <h3 className=\"mt-5 font-serif text-xl font-semibold text-foreground\">
                        Thank you for your request
                      </h3>
                      <p className=\"mt-2 text-muted-foreground\">
                        Your email application to hello@sagethespace.com should be open. Once you send it, I will be
                        in touch soon to confirm your booking.
                      </p>
                      <Button
                        variant=\"outline\"
                        className=\"mt-6 rounded-full\"
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormState(initialState)
                        }}
                      >
                        Submit another request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className=\"mt-6 space-y-5\">
                      <div className=\"grid gap-5 sm:grid-cols-2\">
                        <div>
                          <Label htmlFor=\"name\" className=\"text-foreground text-sm\">
                            Name
                          </Label>
                          <Input
                            id=\"name\"
                            type=\"text\"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className=\"mt-1.5 h-11 rounded-xl\"
                            placeholder=\"Your name\"
                          />
                        </div>
                        <div>
                          <Label htmlFor=\"email\" className=\"text-foreground text-sm\">
                            Email
                          </Label>
                          <Input
                            id=\"email\"
                            type=\"email\"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className=\"mt-1.5 h-11 rounded-xl\"
                            placeholder=\"your@email.com\"
                          />
                        </div>
                      </div>

                      <div className=\"grid gap-5 sm:grid-cols-2\">
                        <div>
                          <Label htmlFor=\"phone\" className=\"text-foreground text-sm\">
                            Phone (optional)
                          </Label>
                          <Input
                            id=\"phone\"
                            type=\"tel\"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className=\"mt-1.5 h-11 rounded-xl\"
                            placeholder=\"(optional)\"
                          />
                        </div>
                        <div>
                          <Label htmlFor=\"service\" className=\"text-foreground text-sm\">
                            Desired service
                          </Label>
                          <select
                            id=\"service\"
                            value={formState.service}
                            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                            className=\"mt-1.5 w-full h-11 rounded-xl border border-input bg-background px-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2\"
                            required
                          >
                            <option value=\"\">Select a service</option>
                            {serviceOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className=\"grid gap-5 sm:grid-cols-2\">
                        <div>
                          <Label htmlFor=\"preferredDate\" className=\"text-foreground text-sm flex items-center gap-1.5\">
                            Preferred date
                            <Calendar className=\"h-3.5 w-3.5 text-muted-foreground\" />
                          </Label>
                          <Input
                            id=\"preferredDate\"
                            type=\"date\"
                            value={formState.preferredDate}
                            onChange={(e) => setFormState({ ...formState, preferredDate: e.target.value })}
                            className=\"mt-1.5 h-11 rounded-xl\"
                          />
                        </div>
                        <div>
                          <Label htmlFor=\"preferredTime\" className=\"text-foreground text-sm flex items-center gap-1.5\">
                            Preferred time
                            <Clock className=\"h-3.5 w-3.5 text-muted-foreground\" />
                          </Label>
                          <Input
                            id=\"preferredTime\"
                            type=\"text\"
                            value={formState.preferredTime}
                            onChange={(e) => setFormState({ ...formState, preferredTime: e.target.value })}
                            className=\"mt-1.5 h-11 rounded-xl\"
                            placeholder=\"Morning, afternoon, evening...\"
                          />
                        </div>
                      </div>

                      <div>
                        <Label className=\"text-foreground text-sm\">Session type</Label>
                        <div className=\"mt-2 grid gap-3 sm:grid-cols-2\">
                          <button
                            type=\"button\"
                            className={`flex flex-col items-start rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                              formState.mode === \"in-person\"
                                ? \"border-primary bg-primary/5 text-foreground\"
                                : \"border-border hover:border-primary/40\"
                            }`}
                            onClick={() => setFormState({ ...formState, mode: \"in-person\" })}
                          >
                            <span className=\"font-medium\">In-person</span>
                            <span className=\"text-xs text-muted-foreground\">Walnut Creek, CA</span>
                          </button>
                          <button
                            type=\"button\"
                            className={`flex flex-col items-start rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                              formState.mode === \"remote\"
                                ? \"border-primary bg-primary/5 text-foreground\"
                                : \"border-border hover:border-primary/40\"
                            }`}
                            onClick={() => setFormState({ ...formState, mode: \"remote\" })}
                          >
                            <span className=\"font-medium\">Remote / Distance</span>
                            <span className=\"text-xs text-muted-foreground\">By video or phone</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor=\"message\" className=\"text-foreground text-sm\">
                          Anything you&apos;d like to share
                        </Label>
                        <Textarea
                          id=\"message\"
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className=\"mt-1.5 resize-none rounded-xl\"
                          placeholder=\"Intentions for the session, what you are moving through, or any questions...\"
                        />
                      </div>

                      <Button type=\"submit\" className=\"w-full h-12 rounded-full text-base shadow-md shadow-primary/15\">
                        Submit booking request
                      </Button>

                      <p className=\"text-xs text-muted-foreground mt-2\">
                        When you click submit, your email app will open with your details pre-filled so you can send
                        your request directly.
                      </p>
                    </form>
                  )}
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <aside className=\"space-y-6\">
                  <div className=\"rounded-2xl border border-border bg-muted/40 p-6\">
                    <h3 className=\"font-serif text-lg font-semibold text-foreground\">
                      Prefer to book instantly?
                    </h3>
                    <p className=\"mt-2 text-sm text-muted-foreground leading-relaxed\">
                      You can also choose your service and time directly through my Vagaro booking page.
                    </p>
                    <Button className=\"mt-4 w-full rounded-full\" asChild>
                      <Link href=\"https://www.vagaro.com/sagethespace\" target=\"_blank\" rel=\"noopener noreferrer\">
                        Book on Vagaro
                        <ArrowRight className=\"ml-2 h-4 w-4\" />
                      </Link>
                    </Button>
                  </div>

                  <div className=\"rounded-2xl border border-border bg-card p-6 space-y-3 text-sm text-muted-foreground\">
                    <h3 className=\"font-serif text-base font-semibold text-foreground\">
                      What happens next
                    </h3>
                    <ol className=\"list-decimal list-inside space-y-1.5\">
                      <li>You submit your booking request with your preferred details.</li>
                      <li>I review your request and check availability.</li>
                      <li>I email you back to confirm your session and share any preparation tips.</li>
                    </ol>
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

