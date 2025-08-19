import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-serif font-bold text-primary">ARAIC</h1>
            </div>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#services"
                className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get a Quote</Button>
        </div>
      </div>
    </header>
  )
}
