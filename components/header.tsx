"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <Leaf className="h-4.5 w-4.5" />
          </div>
          <span className="font-serif text-lg font-semibold text-foreground">
            Sage The Space
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                pathname === item.href
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-3 rounded-full shadow-sm shadow-primary/15">
            <Link href="https://www.vagaro.com/sagethespace" target="_blank" rel="noopener noreferrer">
              Book Now
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center h-10 w-10 text-foreground rounded-full hover:bg-muted/50 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 bg-background/98 backdrop-blur-lg border-b border-border transition-all duration-300 ease-out",
          mobileMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-6 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-3 text-base font-medium rounded-xl transition-colors",
                pathname === item.href
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4">
            <Button asChild className="w-full rounded-full">
              <Link 
                href="https://www.vagaro.com/sagethespace" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
