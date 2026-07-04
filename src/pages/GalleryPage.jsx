import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, PlayCircle } from 'lucide-react';
import { cn } from '../utils/cn';

// Auto-import all files from GalleryImages directory
const galleryFiles = import.meta.glob('../assets/GalleryImages/*.{jpg,jpeg,png,mp4,webm,JPG,JPEG,PNG,MP4,WEBM}', { eager: true });
const galleryItems = Object.entries(galleryFiles).map(([path, module]) => {
  const isVideo = path.match(/\.(mp4|webm)$/i);
  const filename = path.split('/').pop();
  return {
    id: filename,
    url: module.default,
    type: isVideo ? 'video' : 'image',
    category: isVideo ? 'videos' : 'photos'
  };
});

const CATEGORIES = ['all', 'photos', 'videos'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems = galleryItems.filter(item => filter === 'all' || item.category === filter);

  return (
    <PageTransition>
      <SEO 
        title="Gallery"
        description="Take a visual tour of Dipa Old Age Home. Explore our state-of-the-art facilities, daily activities, and the joyous moments of our residents."
      />

      <section className="pt-32 md:pt-40 pb-12 md:pb-20 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-secondary-50/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6"
          >
            A Glimpse of <span className="text-primary-500">Life.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground-muted font-light max-w-2xl mx-auto mb-12"
          >
            Experience the joy, care, and vibrant community living at Dipa Old Age Home.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300",
                  filter === cat 
                    ? "bg-primary-500 text-white shadow-md shadow-primary-500/20" 
                    : "bg-surface-muted text-foreground-muted hover:bg-primary-50 hover:text-primary-600"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-soft cursor-pointer bg-surface-muted border border-border"
                  onClick={() => setLightboxItem(item)}
                >
                  <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/30 transition-all duration-500 z-10" />
                  
                  {item.type === 'video' ? (
                    <>
                      <video src={item.url} className="w-full object-cover rounded-2xl" preload="metadata" />
                      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                        <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
                      </div>
                    </>
                  ) : (
                    <>
                      <img src={item.url} alt="Gallery item" className="w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                        <ZoomIn className="w-12 h-12 text-white drop-shadow-lg" />
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setLightboxItem(null)}
          >
            <button 
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-[110] p-2 bg-white/10 hover:bg-white/20 rounded-full"
              onClick={() => setLightboxItem(null)}
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxItem.type === 'video' ? (
                <video src={lightboxItem.url} controls autoPlay className="w-auto h-auto max-w-full max-h-[85vh] rounded-lg shadow-2xl" />
              ) : (
                <img src={lightboxItem.url} alt="Enlarged view" className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}

