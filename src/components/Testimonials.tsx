import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "College Student",
    comment:
      "The 30-day Python cohort was incredibly well-structured. I went from zero coding knowledge to building my own projects!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Working Professional",
    comment:
      "Best investment I made for my career. The daily lessons and community support made learning Python so easy and enjoyable.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Career Switcher",
    comment:
      "I was nervous about learning to code, but this cohort made it beginner-friendly. The doubt support was amazing!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Entrepreneur",
    comment:
      "Practical projects and real-world applications. This cohort gave me the skills to automate my business processes.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our{" "}
            <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful learners
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
