import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B3D91] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-white mb-4">MA'AJO LAWASANJO</h3>
            <p className="text-sm text-blue-200">
              Leadership rooted in integrity. Governance driven by purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/vision" className="text-blue-200 hover:text-white transition-colors">Vision</Link></li>
              <li><Link to="/manifesto" className="text-blue-200 hover:text-white transition-colors">Manifesto</Link></li>
              <li><Link to="/track-record" className="text-blue-200 hover:text-white transition-colors">Track Record</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/join" className="text-blue-200 hover:text-white transition-colors">Join Campaign</Link></li>
              <li><Link to="/support" className="text-blue-200 hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/sponsors" className="text-blue-200 hover:text-white transition-colors">Supporters</Link></li>
              <li><Link to="/events" className="text-blue-200 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-sm text-center text-blue-200">
          <p className="mb-2">
            This website is the official campaign platform of MA'AJO LAWASANJO. All information published here represents the official views and positions of the campaign.
          </p>
          <p className="mb-2">
            Donations and personal data are handled in accordance with applicable laws and ethical standards.
          </p>
          <p className="mt-4">&copy; {currentYear} MA'AJO LAWASANJO Campaign. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}