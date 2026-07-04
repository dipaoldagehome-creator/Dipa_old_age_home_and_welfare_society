import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
      <Loader2 className="h-12 w-12 animate-spin text-primary-500" />
      <p className="mt-4 text-lg font-medium text-foreground-muted">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
