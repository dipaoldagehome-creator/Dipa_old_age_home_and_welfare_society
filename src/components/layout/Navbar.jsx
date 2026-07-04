import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { cn } from '../../utils/cn';
import dipaLogo from '../../assets/Dipa_Logo.png';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const isScrolled = useScrollPosition(50);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out',
        isScrolled 
          ? 'bg-surface/90 backdrop-blur-md shadow-soft border-b border-border' 
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-2 md:py-3">
        
        {/* Brand / Logo */}
        <Link 
          to="/" 
          className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg"
          aria-label="Dipa Old Age Home"
        >
          <img 
            src={dipaLogo} 
            alt="Dipa Old Age Home & Welfare Society Logo" 
            className="h-30 sm:h-20 md:h-[90px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation - Scroll Spy & Animated Underline */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "relative font-medium text-lg transition-colors duration-300 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md px-3 py-2",
                  isActive 
                    ? "text-primary-500" 
                    : isScrolled ? "text-foreground" : "text-primary-900"
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
                
                {/* Framer Motion Shared Layout Underline */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-primary-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <a 
            href="tel:+918777265019"
            className={cn(
              "flex items-center gap-2 font-medium text-base transition-colors duration-300 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg px-3 py-2 group",
              isScrolled ? "text-foreground-muted" : "text-primary-900/80"
            )}
            aria-label="Call Now"
          >
            <Phone className="h-5 w-5 group-hover:animate-pulse" />
            <span className="group-hover:text-primary-500 transition-colors">Call Now</span>
          </a>
          
          <button
            onClick={() => {
              const el = document.getElementById('donate');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else window.location.href = '/#donate';
            }}
            className="flex items-center gap-2 rounded-full bg-secondary-500 px-8 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary-600 hover:shadow-float focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500"
          >
            <Heart className="h-5 w-5" fill="currentColor" />
            <span>Donate</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className={cn(
            "lg:hidden p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg transition-colors",
            isScrolled ? "text-foreground" : "text-primary-900"
          )}
          onClick={() => setIsMobileOpen(true)}
          aria-expanded={isMobileOpen}
          aria-label="Open mobile menu"
        >
          <Menu className="h-9 w-9" />
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-[320px] bg-surface shadow-2xl flex flex-col lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-serif text-xl font-bold text-primary-500">Menu</span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-3 text-foreground-muted hover:text-foreground bg-surface-muted rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={cn(
                          "text-xl font-medium transition-colors py-4 px-5 rounded-xl",
                          isActive 
                            ? "bg-primary-50 text-primary-500" 
                            : "text-foreground hover:bg-surface-muted hover:text-primary-500"
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-8 flex flex-col gap-4">
                  <a 
                    href="tel:+918777265019"
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-surface-muted px-6 py-4 text-lg font-medium text-foreground transition-colors hover:border-primary-500 hover:text-primary-500"
                  >
                    <Phone className="h-6 w-6" />
                    <span>+91 8777265019</span>
                  </a>
                  
                  <button
                    onClick={() => {
                      const el = document.getElementById('donate');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                        setIsMobileOpen(false);
                      } else {
                        window.location.href = '/#donate';
                      }
                    }}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-secondary-500 px-6 py-4 text-lg font-semibold text-white shadow-soft transition-colors hover:bg-secondary-600"
                  >
                    <Heart className="h-6 w-6" fill="currentColor" />
                    <span>Make a Donation</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
