import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

// Format human-friendly titles for media items
const formatTitle = (filename) => {
  const baseName = filename.replace(/\.[^/.]+$/, "");
  const photoMatch = baseName.match(/^photo(\d+)$/i);
  if (photoMatch) {
    return `Photo ${photoMatch[1]}`;
  }
  const videoMatch = baseName.match(/^(?:vedio|video)(\d+)$/i);
  if (videoMatch) {
    return `Activity Video ${videoMatch[1]}`;
  }
  if (baseName.toLowerCase() === 'visitingcard') {
    return 'Visiting Card & Information';
  }
  return baseName.replace(/([A-Z])/g, ' $1').trim();
};

// Auto-import all files from GalleryImages directory
const galleryFiles = import.meta.glob('../assets/GalleryImages/*.{jpg,jpeg,png,mp4,webm,JPG,JPEG,PNG,MP4,WEBM}', { eager: true });
const galleryItems = Object.entries(galleryFiles)
  .map(([path, module]) => {
    const isVideo = /\.(mp4|webm)$/i.test(path);
    const filename = path.split('/').pop() || '';
    return {
      id: filename,
      url: module.default,
      type: isVideo ? 'video' : 'image',
      category: isVideo ? 'videos' : 'photos',
      title: formatTitle(filename)
    };
  })
  .sort((a, b) => {
    // Photos first, then videos; then natural sort by filename
    if (a.type !== b.type) {
      return a.type === 'image' ? -1 : 1;
    }
    return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
  });

const CATEGORIES = ['all', 'photos', 'videos'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = galleryItems.filter(item => filter === 'all' || item.category === filter);
  const activeItem = lightboxIndex !== null && filteredItems[lightboxIndex] ? filteredItems[lightboxIndex] : null;

  const handleOpen = (index) => {
    setLightboxIndex(index);
  };

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex > 0 ? prevIndex - 1 : filteredItems.length - 1;
    });
  }, [filteredItems.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex < filteredItems.length - 1 ? prevIndex + 1 : 0;
    });
  }, [filteredItems.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

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
                onClick={() => {
                  setFilter(cat);
                  setLightboxIndex(null);
                }}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer",
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
                  onClick={() => handleOpen(index)}
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
                      <img src={item.url} alt={item.title} className="w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                        <ZoomIn className="w-12 h-12 text-white drop-shadow-lg" />
                      </div>
                    </>
                  )}

                  {/* Title overlay at the bottom of the card on hover */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-semibold tracking-wide drop-shadow-sm truncate">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal rendered via Portal to escape stacking context & transform bugs */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black/95 backdrop-blur-md select-none"
              onClick={handleClose}
              role="dialog"
              aria-modal="true"
              aria-label="Image modal view"
            >
              {/* Top Header Bar */}
              <div 
                className="relative z-20 flex items-center justify-between px-4 sm:px-6 py-4 bg-gradient-to-b from-black/80 to-transparent text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-600 text-white shadow-sm">
                    {activeItem.type === 'video' ? 'Video' : 'Photo'}
                  </span>
                  <span className="text-sm font-medium text-white/80">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden md:inline-block text-xs text-white/50 bg-white/10 px-2.5 py-1 rounded-md">
                    Esc to close
                  </span>
                  <button 
                    onClick={handleClose}
                    className="p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Main Media Area */}
              <div 
                className="relative flex-1 flex items-center justify-center px-4 sm:px-12 md:px-20 overflow-hidden"
                onClick={handleClose}
              >
                {/* Previous Button */}
                {filteredItems.length > 1 && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-2 sm:left-4 z-30 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                    aria-label="Previous item"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                  </button>
                )}

                {/* Media Container */}
                <motion.div 
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.25 }}
                  className="relative max-w-5xl max-h-[75vh] md:max-h-[80vh] flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {activeItem.type === 'video' ? (
                    <video 
                      src={activeItem.url} 
                      controls 
                      autoPlay 
                      playsInline
                      className="max-h-[75vh] md:max-h-[80vh] w-auto max-w-full rounded-2xl shadow-2xl bg-black border border-white/10" 
                    />
                  ) : (
                    <img 
                      src={activeItem.url} 
                      alt={activeItem.title} 
                      className="max-h-[75vh] md:max-h-[80vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10 select-none" 
                    />
                  )}
                </motion.div>

                {/* Next Button */}
                {filteredItems.length > 1 && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-2 sm:right-4 z-30 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                    aria-label="Next item"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
                  </button>
                )}
              </div>

              {/* Bottom Caption Bar */}
              <div 
                className="relative z-20 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 bg-gradient-to-t from-black/80 to-transparent text-white gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-white tracking-wide">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-white/60">
                    Dipa Old Age Home &amp; Welfare Society Gallery
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-4 text-xs text-white/60">
                  <span>← / → Navigate</span>
                  <span>•</span>
                  <span>Click outside to close</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </PageTransition>
  );
}

