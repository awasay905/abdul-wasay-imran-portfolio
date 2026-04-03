import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import portfolioData from "@/data/portfolio.json";
import { useTheme } from "@/components/theme-provider";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = isHome
    ? [
        { name: "Experience", id: "experience" },
        { name: "Projects", id: "projects" },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "All Projects", path: "/projects" },
      ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      {/* h-18 = 72px — bigger than default h-16 */}
      <div className="max-w-7xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-base font-bold tracking-tight text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {portfolioData.personalInfo.name}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            "id" in link ? (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            )
          )}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
              className="h-9 w-9"
            >
              {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
            </Button>
            <Button size="sm" className="h-9 px-5 text-sm font-semibold" asChild>
              <a
                href={portfolioData.personalInfo.website ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
            className="h-9 w-9"
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="h-9 w-9"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <Separator />
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) =>
                "id" in link ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-sm font-medium px-3 py-2.5 rounded-md text-foreground hover:bg-muted transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-medium px-3 py-2.5 rounded-md text-foreground hover:bg-muted transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="pt-2">
                <Button className="w-full h-10 text-sm font-semibold" asChild>
                  <a
                    href={portfolioData.personalInfo.website ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}