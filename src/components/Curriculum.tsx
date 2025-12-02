import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const curriculumWeeks = [
  {
    week: "Week 1: Fundamentals",
    days: [
      { day: 1, topic: "Introduction to Programming & Python Setup" },
      { day: 2, topic: "Variables, Data Types & Basic Operations" },
      { day: 3, topic: "Conditional Statements (if, elif, else)" },
      { day: 4, topic: "Loops - For and While" },
      { day: 5, topic: "Functions and Scope" },
      { day: 6, topic: "Lists and List Operations" },
      { day: 7, topic: "Tuples and Sets" },
    ],
  },
  {
    week: "Week 2: Data Structures",
    days: [
      { day: 8, topic: "Dictionaries and Dictionary Methods" },
      { day: 9, topic: "String Manipulation and Methods" },
      { day: 10, topic: "List Comprehensions" },
      { day: 11, topic: "File Handling - Read and Write" },
      { day: 12, topic: "Exception Handling and Error Management" },
      { day: 13, topic: "Modules and Packages" },
      { day: 14, topic: "Mini Project 1 - Build a Calculator" },
    ],
  },
  {
    week: "Week 3: Advanced Concepts",
    days: [
      { day: 15, topic: "Object-Oriented Programming - Classes" },
      { day: 16, topic: "OOP - Inheritance and Polymorphism" },
      { day: 17, topic: "Lambda Functions and Map/Filter/Reduce" },
      { day: 18, topic: "Decorators and Generators" },
      { day: 19, topic: "Working with JSON Data" },
      { day: 20, topic: "Regular Expressions (Regex)" },
      { day: 21, topic: "Mini Project 2 - Data Parser Application" },
    ],
  },
  {
    week: "Week 4: Final Project",
    days: [
      { day: 22, topic: "Working with APIs" },
      { day: 23, topic: "Database Basics - SQLite" },
      { day: 24, topic: "Web Scraping Introduction" },
      { day: 25, topic: "Final Project Planning and Setup" },
      { day: 26, topic: "Final Project Development - Day 1" },
      { day: 27, topic: "Final Project Development - Day 2" },
      { day: 28, topic: "Final Project Completion and Testing" },
      { day: 29, topic: "Code Review and Best Practices" },
      { day: 30, topic: "Certification and Next Steps" },
    ],
  },
];

const Curriculum = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            30-Day{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Curriculum
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete day-by-day breakdown of what you'll learn
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6 lg:p-8 shadow-xl border-border bg-card">
          <Accordion type="single" collapsible className="w-full">
            {curriculumWeeks.map((week, weekIndex) => (
              <AccordionItem key={weekIndex} value={`week-${weekIndex}`}>
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  {week.week}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-4">
                    {week.days.map((day) => (
                      <div
                        key={day.day}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex-shrink-0">
                          {day.day}
                        </div>
                        <p className="text-foreground pt-1">{day.topic}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default Curriculum;
