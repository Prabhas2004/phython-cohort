import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Code2,
  FolderKanban,
  Award,
  MessageCircle,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Daily Lessons",
    description: "Topic + Videos + Notes",
  },
  {
    icon: Code2,
    title: "Daily Practice",
    description: "Hackerrank coding challenges",
  },
  {
    icon: FolderKanban,
    title: "2 Mini Projects",
    description: "Hands-on practical projects",
  },
  {
    icon: Award,
    title: "Certificate",
    description: "Completion certificate",
  },
  {
    icon: MessageCircle,
    title: "Doubt Support",
    description: "Get help when you need it",
  },
  {
    icon: Users,
    title: "Community Group",
    description: "Learn with peers",
  },
  {
    icon: Clock,
    title: "Lifetime Access",
    description: "All materials forever",
  },
  {
    icon: CheckCircle,
    title: "Final Project",
    description: "Build your portfolio piece",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What You Will{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything included in your 30-day Python journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 border-border bg-card group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
