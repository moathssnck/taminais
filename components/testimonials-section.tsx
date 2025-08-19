import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content:
      "ARAIC has been protecting my business for over 5 years. Their personalized service and comprehensive coverage give me peace of mind.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Family Man",
    content:
      "When we needed to file a claim, ARAIC was there every step of the way. Professional, caring, and efficient service.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Healthcare Professional",
    content:
      "The team at ARAIC took the time to understand my unique needs and created a perfect insurance package for my family.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
