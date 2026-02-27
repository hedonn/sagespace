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
import { MapPin, Phone, Mail, Clock, ExternalLink, Send, CheckCircle2, Sparkles } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Walnut Creek, CA",
    detail: "Sessions available in-person and remotely",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@sagethespace.com",
    href: "mailto:hello@sagethespace.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "By Appointment",
    detail: "Monday - Saturday",
  },
]

const faqs = [
  {
    question: "What should I expect during a session?",
    answer: "Each session begins with a brief conversation about your needs, followed by the healing work itself. You will be fully clothed and comfortable throughout.",
  },
  {
    question: "Do I need to prepare anything?",
    answer: "Simply come with an open mind and heart. Wear comfortable clothing and avoid heavy meals beforehand. I will guide you through everything else.",
  },
  {
    question: "How many sessions will I need?",
    answer: "This varies by individual. Some clients feel complete after one session, while others prefer ongoing support. We will discuss what feels right for you.",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const scrollToContactDetails = () => {
    const section = document.getElementById("contact-details")
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/60 via-background to-background" />
          <div className="absolute top-20 right-[15%] w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-[10%] w-72 h-72 bg-accent/8 rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <BlurIn>
              <div className="mx-auto max-w-2xl text-center">
                <button
                  type="button"
                  onClick={scrollToContactDetails}
                  className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 hover:bg-primary/15 hover:border-primary/40 transition-colors"
                >
                  Get in Touch
                </button>
                <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground text-balance">
                  Let&apos;s Connect
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Have questions or ready to begin your healing journey? 
                  I would love to hear from you.
                </p>
              </div>
            </BlurIn>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-details" className="py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Contact Info */}
              <FadeIn>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                    Contact Information
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    The easiest way to book a session is through my Vagaro page. 
                    For general inquiries, feel free to reach out via email or the contact form.
                  </p>

                  <div className="mt-8">
                    <Button size="lg" className="h-13 px-8 rounded-full shadow-lg shadow-primary/20" asChild>
                      <Link href="https://www.vagaro.com/sagethespace" target="_blank" rel="noopener noreferrer">
                        <Sparkles className="mr-2 h-5 w-5" />
                        Book on Vagaro
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-10 space-y-4">
                    {contactInfo.map((item, index) => (
                      <FadeIn key={item.label} delay={index * 80}>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border transition-all hover:border-primary/20">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="mt-0.5 text-base font-medium text-foreground hover:text-primary transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="mt-0.5 text-base font-medium text-foreground">{item.value}</p>
                            )}
                            {item.detail && (
                              <p className="text-sm text-muted-foreground">{item.detail}</p>
                            )}
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Contact Form */}
              <FadeIn delay={150}>
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">
                    Send a Message
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill out the form below and I will get back to you soon.
                  </p>

                  {isSubmitted ? (
                    <div className="mt-8 text-center py-10">
                      <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                        Thank You!
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Your message has been sent. I will be in touch soon.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6 rounded-full"
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormState({ name: "", email: "", phone: "", service: "", message: "" })
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="name" className="text-foreground text-sm">Name</Label>
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
                          <Label htmlFor="email" className="text-foreground text-sm">Email</Label>
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
                          <Label htmlFor="phone" className="text-foreground text-sm">Phone (optional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="mt-1.5 h-11 rounded-xl"
                            placeholder="(555) 555-5555"
                          />
                        </div>
                        <div>
                          <Label htmlFor="service" className="text-foreground text-sm">Service Interest</Label>
                          <select
                            id="service"
                            value={formState.service}
                            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                            className="mt-1.5 w-full h-11 rounded-xl border border-input bg-background px-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            <option value="">Select a service</option>
                            <option value="reiki">Energy Healing / Reiki</option>
                            <option value="space-clearing">Space Clearing</option>
                            <option value="wellness">Wellness Consultation</option>
                            <option value="other">Other / Not Sure</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-foreground text-sm">Message</Label>
                        <Textarea
                          id="message"
                          required
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="mt-1.5 resize-none rounded-xl"
                          placeholder="Tell me about what you're looking for..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-12 rounded-full text-base shadow-md shadow-primary/15"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <FadeIn>
              <div className="text-center">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                  Common Questions
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Answers to questions I often receive
                </p>
              </div>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 80}>
                  <div className="h-full bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-serif text-base font-semibold text-foreground">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
