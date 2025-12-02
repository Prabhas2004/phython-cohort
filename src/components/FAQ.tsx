import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "Is this beginner friendly?",
    answer:
      "Absolutely! This cohort is designed specifically for beginners with zero programming experience. We start from the basics and gradually build up your skills with daily lessons and practice.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! Upon successful completion of the 30-day cohort, you'll receive a certificate that you can add to your resume and LinkedIn profile.",
  },
  {
    question: "How do I receive daily lessons?",
    answer:
      "All lessons, notes, and assignments are shared daily through our WhatsApp or Telegram group. You'll get structured content every day along with video tutorials and practice problems.",
  },
  {
    question: "Do I need a laptop?",
    answer:
      "While a laptop is recommended for the best learning experience, you can start with a smartphone or tablet. However, for coding projects, a laptop or desktop will be necessary.",
  },
  {
    question: "Do I get lifetime access?",
    answer:
      "Yes! Once you enroll, you get lifetime access to all course materials, including videos, notes, assignments, and projects. Learn at your own pace even after the 30 days.",
  },
  {
    question: "What if I miss a day?",
    answer:
      "No worries! All materials are available in the group, so you can catch up anytime. The community is also there to help you if you need support.",
  },
  {
    question: "Is there any doubt support?",
    answer:
      "Yes! You'll have access to mentors and the community group where you can ask questions and get help whenever you're stuck.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6 lg:p-8 shadow-xl border-border bg-card">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;
