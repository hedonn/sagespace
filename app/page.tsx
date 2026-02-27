"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FadeIn, BlurIn, CountUp, MagneticButton } from "@/components/animations"
import { Leaf, Sparkles, Heart, ArrowRight, Star, Quote } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Energy Healing",
    description: "Release blockages and restore balance through gentle, transformative energy work that nurtures your soul.",
  },
  {
    icon: Leaf,
    title: "Space Clearing",
    description: "Clear stagnant energy from your home or office to create harmony and positive flow.",
  },
  {
    icon: Heart,
    title: "Wellness Sessions",
    description: "Personalized guidance and support on your journey toward wholeness and inner peace.",
  },
]

const stats = [
  { value: 500, suffix: "+", label: "Sessions Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 8, suffix: "+", label: "Years Experience" },
]

const testimonials = [
  {
    quote: "The session was truly transformative. I left feeling lighter, clearer, and more connected to myself than I have in years.",
    author: "Sarah M.",
    role: "Energy Healing Client",
  },
  {
    quote: "After the space clearing, my home feels completely different. There is a peace and calm that was not there before.",
    author: "Michael R.",
    role: "Space Clearing Client",
  },
  {
    quote: "I have tried many practitioners, but this experience was on another level. Deeply intuitive and caring.",
    author: "Jennifer L.",
    role: "Wellness Client",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[92vh] flex items-center pt-20">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-muted/60 via-background to-background" />
          
          {/* Decorative elements */}
          <div className="absolute top-32 left-[10%] w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-32 right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />

          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <BlurIn>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                  <Leaf className="h-4 w-4" />
                  Walnut Creek, California
                </div>
              </BlurIn>

              <BlurIn delay={100}>
                <h1 className="mt-8 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.1]">
                  <span className="text-balance">Energy Healing &amp; Space Clearing</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    in Walnut Creek, CA
                  </span>
                </h1>
              </BlurIn>

              <BlurIn delay={200}>
                <p className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
                  Experience the power of holistic healing in Walnut Creek and the greater East Bay. 
                  Release what no longer serves you and embrace a life of balance, clarity, and renewed vitality&mdash;in person or from anywhere through remote sessions.
                </p>
              </BlurIn>

              <BlurIn delay={300}>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <MagneticButton>
                    <Button size="lg" className="h-13 px-8 text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all" asChild>
                      <Link href="https://www.vagaro.com/sagethespace" target="_blank" rel="noopener noreferrer">
                        Book a Session
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <Button variant="outline" size="lg" className="h-13 px-8 text-base rounded-full" asChild>
                    <Link href="/services">
                      Explore Services
                    </Link>
                  </Button>
                </div>
              </BlurIn>
            </div>
          </div>

          {/* Scroll indicator - hidden on small screens to avoid overlap */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex md:flex-col items-center gap-2 text-muted-foreground/60">
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-border bg-card/50">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 100}>
                  <div className="text-center">
                    <p className="font-serif text-4xl sm:text-5xl font-semibold text-primary">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                  Services
                </p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-foreground text-balance">
                  How I Can Help You
                </h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  Discover the healing modalities that resonate with your unique needs and journey.
                </p>
              </div>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              {features.map((feature, index) => (
                <FadeIn key={feature.title} delay={index * 100} direction="up">
                  <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <Link
                      href="/services"
                      className="mt-5 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                    >
                      Learn more
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn direction="left">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                    About
                  </p>
                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-foreground text-balance">
                    A Sanctuary for Your Soul
                  </h2>
                  <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                    Sage The Space was born from a deep calling to help others find balance and healing. 
                    Every session is a sacred space where transformation can unfold naturally.
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    With over eight years of experience in energy healing and space clearing, 
                    I bring a compassionate, intuitive approach to every client I work with.
                  </p>
                  <Button variant="outline" className="mt-8 rounded-full" asChild>
                    <Link href="/about">
                      Read My Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={150}>
                <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                        <Leaf className="h-8 w-8 text-primary" />
                      </div>
                      <p className="mt-6 font-serif text-xl sm:text-2xl text-foreground/80 italic max-w-sm mx-auto leading-relaxed">
                        &ldquo;Healing begins when we create space for it.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                  Testimonials
                </p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Client Experiences
                </h2>
              </div>
            </FadeIn>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="h-full flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/20 hover:shadow-md">
                    <Quote className="h-7 w-7 text-primary/25" />
                    <blockquote className="mt-4 flex-1">
                      <p className="text-foreground/90 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </blockquote>
                    <div className="mt-5 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <footer className="mt-3 pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </footer>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/60" />
          
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground text-balance">
                  Ready to Begin Your Healing Journey?
                </h2>
                <p className="mt-6 text-lg text-primary-foreground/85 leading-relaxed max-w-xl mx-auto">
                  Take the first step toward transformation. Book your session today and experience 
                  the difference that intentional energy work can make.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <MagneticButton>
                    <Button size="lg" variant="secondary" className="h-13 px-8 text-base rounded-full shadow-lg" asChild>
                      <Link href="https://www.vagaro.com/sagethespace" target="_blank" rel="noopener noreferrer">
                        Book a Session
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    className="h-13 px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full" 
                    asChild
                  >
                    <Link href="/contact">
                      Contact Me
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
