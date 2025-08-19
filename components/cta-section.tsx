import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-accent-foreground mb-4">
          Ready to Get Protected?
        </h2>
        <p className="text-xl text-accent-foreground/90 mb-8 max-w-3xl mx-auto">
          Contact ARAIC today for a personalized insurance quote. Our expert team is ready to help you find the perfect
          coverage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            <Phone className="mr-2 h-5 w-5" />
            Call (555) 123-4567
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get Quote Online
          </Button>
        </div>
      </div>
    </section>
  )
}
