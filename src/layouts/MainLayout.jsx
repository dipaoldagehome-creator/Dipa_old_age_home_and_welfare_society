import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import { FloatingContactButtons } from '../components/common/FloatingContactButtons';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300 relative">
      <ScrollToTop />
      
      {/* Luxury Navigation Component */}
      <Navbar />

      {/* Main Content Area - pt-20 on mobile, pt-24 on tablet/desktop to match fixed navbar */}
      <main className="flex-1 w-full flex flex-col pt-20 sm:pt-24">
        <Outlet />
      </main>

      {/* Enterprise Footer */}
      <Footer />
      
      {/* Global Floating Actions */}
      <FloatingContactButtons />
    </div>
  );
};

export default MainLayout;
