"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FadeIn, BlurIn } from "@/components/animations"
import { Award, Heart, Leaf, ArrowRight, Star, Quote } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Every session is held with deep respect, empathy, and genuine care for your well-being.",
  },
  {
    icon: Leaf,
    title: "Holistic Approach",
    description: "I address the whole person - mind, body, and spirit - for true, lasting transformation.",
  },
  {
    icon: Award,
    title: "Certified Practice",
    description: "Trained and certified in multiple healing modalities with ongoing professional development.",
  },
]

const certifications = [
  { name: "Reiki Master/Teacher Certification", year: "2018" },
  { name: "Advanced Space Clearing Practitioner", year: "2019" },
  { name: "Chakra Healing & Balancing Certification", year: "2020" },
  { name: "Meditation & Mindfulness Facilitator", year: "2021" },
  { name: "Crystal Healing Practitioner", year: "2022" },
]

const milestones = [
  { year: "2016", title: "The Awakening", description: "Discovered energy healing during my own transformative journey" },
  { year: "2018", title: "Becoming a Practitioner", description: "Completed Reiki Master training and began offering sessions" },
  { year: "2020", title: "Expanding Services", description: "Added space clearing and chakra balancing to my practice" },
  { year: "2024", title: "Sage The Space", description: "Established a dedicated sanctuary for healing in Walnut Creek" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/60 via-background to-background" />
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-[15%] w-72 h-72 bg-accent/8 rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <BlurIn>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                    About Me
                  </div>
                  <h1 className="mt-6 font-serif text-4xl sm:text-5xl font-semibold text-foreground leading-tight text-balance">
                    Guiding You Toward Balance & Renewal
                  </h1>
                  <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    I am a certified energy healer and space clearing practitioner 
                    dedicated to helping others find peace, clarity, and transformation.
                  </p>
                </div>
              </BlurIn>

              <BlurIn delay={150}>
                <div className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-2xl bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <Leaf className="h-10 w-10 text-primary" />
                      </div>
                      <p className="mt-5 font-serif text-2xl text-foreground">
                        [Your Name]
                      </p>
                      <p className="mt-1 text-muted-foreground">
                        Founder & Healer
                      </p>
                      <div className="mt-4 flex justify-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        500+ sessions completed
                      </p>
                    </div>
                  </div>
                </div>
              </BlurIn>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-24 bg-card/50">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <FadeIn>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                    My Journey
                  </h2>
                  <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
                    <p>
                      Welcome to Sage The Space. My path to energy healing began with my own journey of transformation. 
                      After experiencing profound shifts through energy work during a particularly challenging time, 
                      I felt called to share these gifts with others.
                    </p>
                    <p>
                      I trained extensively in Reiki, chakra healing, and various space clearing techniques to bring you 
                      a comprehensive approach to wellness. My practice combines ancient wisdom with intuitive guidance, 
                      creating a unique and deeply personal experience for each client.
                    </p>
                    <p>
                      I believe that everyone has the capacity for healing and growth. My role is simply to facilitate 
                      that process - creating a safe, nurturing space where you can release what no longer serves you 
                      and embrace the energy of renewal.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-12 w-12 text-primary/10" />
                  <blockquote className="relative bg-muted rounded-2xl p-8 border border-border">
                    <p className="font-serif text-xl sm:text-2xl italic text-foreground leading-relaxed">
                      &ldquo;Healing is not about fixing what is broken. It is about awakening to 
                      the wholeness that already exists within you.&rdquo;
                    </p>
                    <footer className="mt-5 text-muted-foreground">
                      - My guiding philosophy
                    </footer>
                  </blockquote>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <FadeIn>
              <div className="text-center">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                  My Path
                </h2>
                <p className="mt-3 text-muted-foreground">
                  The journey that brought me to this sacred work
                </p>
              </div>
            </FadeIn>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((item, index) => (
                <FadeIn key={item.year} delay={index * 100}>
                  <div className="relative p-6 rounded-2xl bg-card border border-border h-full">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-serif text-lg font-semibold">
                      {item.year.slice(2)}
                    </span>
                    <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <FadeIn>
              <div className="text-center">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                  My Approach
                </h2>
                <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                  These core values guide every session and interaction
                </p>
              </div>
            </FadeIn>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={index * 100}>
                  <div className="h-full bg-card rounded-2xl p-7 border border-border transition-all hover:border-primary/20 hover:shadow-md text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <FadeIn>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                    Training & Certifications
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    I am committed to continuous learning and professional development to provide 
                    you with the most effective healing techniques and practices.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-center justify-between p-4 rounded-xl bg-card border border-border transition-all hover:border-primary/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Award className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-foreground text-sm">{cert.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/60" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary-foreground text-balance">
                  Ready to Start Your Journey?
                </h2>
                <p className="mt-5 text-lg text-primary-foreground/85 leading-relaxed">
                  I would love to connect with you and discuss how I can support your healing. 
                  Every journey begins with a single step.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" variant="secondary" className="h-13 px-8 rounded-full shadow-lg" asChild>
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    className="h-13 px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full" 
                    asChild
                  >
                    <Link href="/services">
                      View Services
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
