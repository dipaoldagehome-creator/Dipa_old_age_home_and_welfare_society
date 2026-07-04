import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold font-serif text-primary-500">404</h1>
      <h2 className="mt-4 text-3xl font-semibold font-serif text-foreground">Page Not Found</h2>
      <p className="mt-4 max-w-md text-foreground-muted">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="mt-8 flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 font-medium text-white transition-transform hover:-translate-y-1 hover:shadow-float"
      >
        <Home className="h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
