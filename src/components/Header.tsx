import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-foreground">
            Python Cohort
          </span>
        </div>

        {/* 🔥 FIXED: scroll to #pricing instead of #register */}
        <Button
          variant="hero"
          size="lg"
          onClick={() => {
            const element = document.getElementById("pricing");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Join Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
