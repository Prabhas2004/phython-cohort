import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ExternalLink, CreditCard } from "lucide-react";

const features = [
  "Complete 30-Day Training",
  "Daily Notes + Assignments",
  "Daily Practice Tasks",
  "2 Mini Projects + Final Project",
  "Completion Certificate",
  "WhatsApp/One 2 One  Support",
  "Community Access",
  "Lifetime Material Access",
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent{" "}
            <span className="text-accent">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to start your Python journey
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 lg:p-12 shadow-2xl border-2 border-primary/30 bg-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full" />
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-4">
              <CreditCard className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Limited Time Offer</span>
            </div>
            
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-2xl text-muted-foreground line-through">₹5999</span>
              <span className="text-6xl font-bold text-foreground">₹4999</span>
            </div>
            <p className="text-lg text-muted-foreground">One-time payment • No hidden fees</p>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">What's Included:</h3>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Button
              variant="hero"
              size="xl"
              className="w-full"
              onClick={() => {
                window.open("https://oxanckzb.formester.com/f/r72WbG2Lz", "_blank");
              }}
            >
              Pay & Join Now - ₹4999
            </Button>

            <p className="text-sm text-center text-muted-foreground pt-4">
              🔒 Secure payment • 
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
