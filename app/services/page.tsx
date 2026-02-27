"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FadeIn, BlurIn } from "@/components/animations"
import { Clock, ArrowRight, Sparkles, Leaf, Heart, Check } from "lucide-react"

const services = [
  {
    category: "Energy Healing",
    icon: Sparkles,
    description: "Restore balance and vitality through transformative energy work",
    items: [
      {
        name: "Reiki Session",
        duration: "60 min",
        price: "$85",
        description: "A gentle, hands-on healing technique that promotes relaxation, reduces stress, and supports your body's natural healing abilities.",
        features: ["Deep relaxation", "Stress reduction", "Energy restoration"],
      },
      {
        name: "Distance Reiki",
        duration: "45 min",
        price: "$70",
        description: "Experience the benefits of Reiki from the comfort of your own home. Energy knows no boundaries.",
        features: ["Remote healing", "Flexible scheduling", "Same powerful results"],
      },
      {
        name: "Chakra Balancing",
        duration: "75 min",
        price: "$95",
        description: "A focused session to clear, align, and balance your seven main energy centers for optimal flow and vitality.",
        features: ["Full chakra assessment", "Energy alignment", "Crystal healing"],
      },
    ],
  },
  {
    category: "Space Clearing",
    icon: Leaf,
    description: "Clear stagnant energy and create harmony in your environment",
    items: [
      {
        name: "Home Space Clearing",
        duration: "90-120 min",
        price: "From $150",
        description: "Clear stagnant or negative energy from your home. Includes sage cleansing, sound healing, and intention setting.",
        features: ["Complete energy clearing", "Sage ceremony", "Blessing ritual"],
      },
      {
        name: "Office Space Clearing",
        duration: "60-90 min",
        price: "From $175",
        description: "Create a harmonious work environment that supports productivity, creativity, and positive collaboration.",
        features: ["Workspace optimization", "Team energy clearing", "Success blessing"],
      },
      {
        name: "New Home Blessing",
        duration: "60 min",
        price: "$125",
        description: "Welcome new beginnings with a blessing ceremony for your new home or space.",
        features: ["New space dedication", "Protection ritual", "Welcome blessing"],
      },
    ],
  },
  {
    category: "Wellness Consultations",
    icon: Heart,
    description: "Personalized guidance for your wellness journey",
    items: [
      {
        name: "Initial Consultation",
        duration: "30 min",
        price: "Free",
        description: "A complimentary conversation to discuss your needs and determine the best path forward for your healing journey.",
        features: ["Needs assessment", "Personalized recommendations", "No obligation"],
        highlighted: true,
      },
      {
        name: "Wellness Coaching",
        duration: "60 min",
        price: "$75",
        description: "One-on-one guidance to support your personal growth, spiritual development, and overall well-being.",
        features: ["Goal setting", "Action planning", "Ongoing support"],
      },
    ],
  },
]

export default function ServicesPage() {
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
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                  Healing Services
                </div>
                <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground text-balance">
                  Find Your Path to Wellness
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Each service is designed to support your unique journey toward balance, clarity, and renewal.
                </p>
              </div>
            </BlurIn>
          </div>
        </section>

        {/* Services List */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((category) => (
                <div key={category.category}>
                  <FadeIn>
                    <div className="flex items-center gap-4 pb-6 border-b border-border">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <category.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                          {category.category}
                        </h2>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </FadeIn>

                  <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    {category.items.map((service, serviceIndex) => (
                      <FadeIn key={service.name} delay={serviceIndex * 80}>
                        <div className="group relative h-full flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5">
                          {service.highlighted && (
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                              Complimentary
                            </div>
                          )}
                          
                          <h3 className="font-serif text-xl font-semibold text-foreground">
                            {service.name}
                          </h3>

                          <div className="mt-3 flex items-center gap-3">
                            <span className="text-2xl font-semibold text-primary">
                              {service.price}
                            </span>
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{service.duration}</span>
                            </div>
                          </div>

                          <p className="mt-4 flex-1 text-muted-foreground leading-relaxed text-sm">
                            {service.description}
                          </p>

                          <ul className="mt-5 space-y-2">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <Button className="mt-6 w-full rounded-full" asChild>
                            <Link href="https://www.vagaro.com/sagethespace" target="_blank" rel="noopener noreferrer">
                              Book This Service
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/60" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary-foreground text-balance">
                  Not Sure Which Service Is Right for You?
                </h2>
                <p className="mt-5 text-lg text-primary-foreground/85 leading-relaxed">
                  Book a free consultation and we will discuss your needs together. 
                  No pressure, just a warm conversation about your wellness goals.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" variant="secondary" className="h-13 px-8 rounded-full shadow-lg" asChild>
                    <Link href="/contact">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    className="h-13 px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full" 
                    asChild
                  >
                    <Link href="/about">
                      Learn About Me
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
