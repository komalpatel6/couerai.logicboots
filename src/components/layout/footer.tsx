import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Go to homepage">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                <img
                  src="/co-log.png"
                  className="h-8 w-8 object-contain"
                  alt="Coeur AI Logo"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight tracking-wide">Coeur AI</span>
                <span className="text-[8px] sm:text-[9px] font-['Arial',_sans-serif] font-medium text-muted-foreground uppercase tracking-[0.15em] leading-none mt-1 opacity-70">A product of LogicBoots</span>
              </div>
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://logicboots.com"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LogicBoots Private Limited. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/showcase/coeurai"
              aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
