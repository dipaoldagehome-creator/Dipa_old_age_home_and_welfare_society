import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, ArrowUp, Send, ChevronRight
} from 'lucide-react';
import dipaLogo from '../../assets/Dipa_Logo.png';

// Custom SVG Icons for Socials since Lucide removed them
const Facebook = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Instagram = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Youtube = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const QUICK_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-primary-950 text-primary-50 relative pt-24 pb-10 border-t-[6px] border-primary-500 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-800/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-900/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 space-y-8">
            <div>
              <Link 
                to="/" 
                className="inline-flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-2xl shadow-md overflow-hidden mb-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 group"
                aria-label="Dipa Old Age Home"
              >
                <img 
                  src={dipaLogo} 
                  alt="Dipa Old Age Home & Welfare Society Logo" 
                  className="w-full h-full object-contain scale-[1.55] transition-transform duration-300 group-hover:scale-[1.62]"
                  loading="lazy"
                />
              </Link>
              <p className="text-primary-200 font-light text-sm leading-relaxed max-w-sm">
                Providing a compassionate, safe, and vibrant community for seniors to enjoy their golden years with dignity, respect, and joy.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Subscribe to Newsletter</h4>
              <form className="flex w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="newsletter" className="sr-only">Email address</label>
                <input 
                  id="newsletter"
                  type="email" 
                  required
                  placeholder="Enter your email" 
                  className="bg-primary-900 border border-primary-800 text-white px-5 py-3 rounded-l-xl outline-none focus:border-secondary-500 w-full transition-colors font-light"
                />
                <button type="submit" aria-label="Subscribe" className="bg-secondary-500 hover:bg-secondary-600 px-5 rounded-r-xl transition-colors flex items-center justify-center border border-secondary-500">
                  <Send className="w-5 h-5 text-white" />
                </button>
              </form>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook' }, 
                { icon: Twitter, label: 'Twitter' }, 
                { icon: Instagram, label: 'Instagram' }, 
                { icon: Youtube, label: 'Youtube' }
              ].map(({icon: Icon, label}, i) => (
                <a key={i} href="#" aria-label={"Follow us on " + label} className="w-10 h-10 rounded-full bg-primary-900 border border-primary-800 flex items-center justify-center text-primary-300 hover:bg-secondary-500 hover:border-secondary-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-6 border-b border-primary-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {QUICK_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="group flex items-center text-primary-200 hover:text-secondary-400 transition-colors text-sm font-medium">
                    <ChevronRight className="w-4 h-4 mr-2 text-primary-700 group-hover:text-secondary-400 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-white mb-6 border-b border-primary-800 pb-2 inline-block">Key Facilities</h4>
            <ul className="space-y-4">
              {[
                { name: '24/7 Ambulance Service', slug: 'ambulance-service' },
                { name: 'Dietary & Nutrition', slug: 'dietary-nutrition' },
                { name: 'Physiotherapy Center', slug: 'physiotherapy' },
                { name: 'Library & Reading Room', slug: 'library' },
                { name: 'Recreation & Arts', slug: 'recreation' },
                { name: 'Wheelchair Grounds', slug: 'accessible-grounds' }
              ].map(facility => (
                <li key={facility.name}>
                  <Link to={`/services/${facility.slug}`} className="group flex items-center text-primary-200 hover:text-secondary-400 transition-colors text-sm font-medium">
                    <ChevronRight className="w-4 h-4 mr-2 text-primary-700 group-hover:text-secondary-400 group-hover:translate-x-1 transition-all" />
                    {facility.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-white mb-6 border-b border-primary-800 pb-2 inline-block">Get In Touch</h4>
            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-3 text-primary-200 text-sm">
                <MapPin className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span className="leading-relaxed">2088 Nayabad Main Road, Nabamalancha Dreamland-1, Panchasayar, Kolkata, 700094</span>
              </li>
              <li className="flex items-center gap-3 text-primary-200 text-sm">
                <Phone className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span className="font-mono tracking-wider">+91 9831524258</span>
              </li>
              <li className="flex items-center gap-3 text-primary-200 text-sm">
                <Mail className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span>dipaoldagehome@gmail.com</span>
              </li>
            </ul>
            <div className="w-full h-40 md:h-48 lg:h-40 xl:h-48 rounded-xl overflow-hidden shadow-lg border border-primary-800 hover:border-secondary-500 transition-colors duration-300">
              <iframe 
                src="https://maps.google.com/maps?q=22.478256,88.4109247&hl=en&z=12&output=embed" 
                width="100%" height="100%" style={{ border: 0, filter: 'contrast(1.2)' }} 
                title="Dipa Old Age Home Location" loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <p className="text-primary-400 text-sm font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} Dipa Old Age Home & Welfare Society. Design & Developed by

            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service 
            </a>.


          </p>
          <div className="flex gap-6 text-sm text-primary-400 font-medium">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="hidden md:flex absolute right-0 top-6 w-12 h-12 bg-primary-800 hover:bg-secondary-500 text-white rounded-full items-center justify-center shadow-lg transform hover:-translate-y-2 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        <button 
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="md:hidden mt-8 mx-auto w-12 h-12 bg-primary-800 hover:bg-secondary-500 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
