import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">30-Day Python Cohort</h3>
            <p className="text-background/80 mb-4">
              Learn Python from Zero to Hero in just 30 days with hands-on
              projects, daily lessons, and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#register" className="text-background/80 hover:text-accent transition-colors">
                  Register Now
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/80 hover:text-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#curriculum" className="text-background/80 hover:text-accent transition-colors">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-accent transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:contact@pythoncohort.com"
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  contact@pythoncohort.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-accent" />
                <a
                  href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:text-accent hover:bg-background/10"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:text-accent hover:bg-background/10"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:text-accent hover:bg-background/10"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:text-accent hover:bg-background/10"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} 30-Day Python Cohort. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
