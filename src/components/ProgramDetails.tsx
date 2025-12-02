import { Card } from "@/components/ui/card";
import { Calendar, Clock, MessageSquare, TrendingUp } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "Starts",
    value: "6/12/25",
  },
  {
    icon: Clock,
    label: "Duration",
    value: "30 Days",
  },
  {
    icon: MessageSquare,
    label: "Mode",
    value: "WhatsApp / Telegram",
  },
  {
    icon: TrendingUp,
    label: "Level",
    value: "Beginner Friendly",
  },
];

const ProgramDetails = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Program Details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the cohort structure
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {details.map((detail, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <detail.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{detail.label}</p>
              <p className="text-xl font-bold text-foreground">{detail.value}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
