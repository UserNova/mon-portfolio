import { Outlet, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function RootLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/projects" },
    { name: "Parcours", href: "/experience" },
    { name: "Formations", href: "/education" },
    { name: "Certifications", href: "/certifications" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-x-hidden">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLink 
              to="/" 
              className="flex items-center space-x-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              <span>ZHIRI Rania</span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.slice(1).map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 dark:text-slate-300"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-col space-y-2">
                {navigation.slice(1).map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1 overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-x-hidden">
          <Outlet />
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm">© {new Date().getFullYear()} • ZHIRI Rania</footer>
    </div>
  );
}
