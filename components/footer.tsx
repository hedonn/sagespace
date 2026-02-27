import Link from "next/link"
import { MapPin, Phone, Mail, Leaf, Instagram, Facebook, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const services = [
  { name: "Energy Healing", href: "/services" },
  { name: "Space Clearing", href: "/services" },
  { name: "Wellness Coaching", href: "/services" },
  { name: "Free Consultation", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="h-4.5 w-4.5" />
              </div>
              <span className="font-serif text-lg font-semibold text-foreground">
                Sage The Space
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Transforming energy, clearing spaces, and nurturing wellness in Walnut Creek, California.
            </p>
            <Button size="sm" className="mt-5 rounded-full" asChild>
              <Link href="https://www.vagaro.com/sagethespace" target="_blank" rel="noopener noreferrer">
                Book Now
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Walnut Creek, CA
              </li>
              <li>
                <a
                  href="mailto:hello@sagethespace.com"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  hello@sagethespace.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19255551234"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  (925) 555-1234
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Sage The Space. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with love in Walnut Creek
          </p>
        </div>
      </div>
    </footer>
  )
}
