import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Heart, Car, Building } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Life Insurance",
    description:
      "Secure your family's financial future with comprehensive life insurance coverage tailored to your needs.",
  },
  {
    icon: Shield,
    title: "Health Insurance",
    description:
      "Access quality healthcare with our flexible health insurance plans that protect you and your loved ones.",
  },
  {
    icon: Car,
    title: "Auto Insurance",
    description: "Drive with confidence knowing you're protected by our comprehensive auto insurance coverage.",
  },
  {
    icon: Building,
    title: "Business Insurance",
    description: "Protect your business assets and operations with our tailored commercial insurance solutions.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Our Insurance Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coverage options designed to protect what matters most to you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-serif text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
