import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ExternalLink } from "lucide-react";

const RegistrationSection = () => {
  return (
    <section
      id="register"
      className="py-20 bg-gradient-to-br from-accent/10 via-background to-primary/5"
    >
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 lg:p-12 shadow-xl border-2 border-accent/30 bg-card">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
              <ExternalLink className="w-8 h-8 text-accent" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Complete This Step First:{" "}
              <span className="text-accent">Fill the Registration Form</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Before joining the cohort, students must fill out a registration
              form. This helps us provide you with the best learning experience.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 py-6">
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm text-foreground">
                  Helps us understand your goals
                </span>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm text-foreground">
                  Get personalized guidance
                </span>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm text-foreground">
                  Required before joining group
                </span>
              </div>
            </div>

            {/* 🔥 Updated Button — scroll to PRICING section */}
            <Button
              variant="accent"
              size="xl"
              className="group"
              onClick={() => {
                const pricing = document.getElementById("pricing");
                pricing?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Open Registration Form
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>

            <p className="text-sm text-muted-foreground pt-4">
              ⚡ Takes only 2 minutes • No payment required for registration
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationSection;
