import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Protecting What Matters Most
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Trust ARAIC for comprehensive insurance solutions that safeguard your family, business, and future. With
              decades of expertise and personalized service, we're here when you need us most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Your Quote Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/family-insurance-office.png"
              alt="Family protected by ARAIC insurance"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
