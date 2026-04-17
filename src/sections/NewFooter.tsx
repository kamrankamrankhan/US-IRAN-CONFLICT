import Link from 'next/link';
import { Twitter, Facebook, Linkedin, Youtube, Mail, Phone, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    coverage: [
      { label: 'Israel-Iran War', path: '/blog/israel-iran-war-2026-direct-confrontation' },
      { label: 'Hezbollah Front', path: '/blog/hezbollah-israel-war-2026-lebanon-front' },
      { label: 'Gaza Conflict', path: '/blog/gaza-war-2026-israel-hamas-humanitarian-crisis' },
      { label: 'Oil Markets', path: '/blogs' },
    ],
    analysis: [
      { label: 'Nuclear Program', path: '/blog/iran-nuclear-program-2026-update' },
      { label: 'Proxy Networks', path: '/blog/iran-proxy-network-hezbollah-hamas-houthis' },
      { label: 'Sanctions', path: '/blog/us-sanctions-iran-economic-impact' },
      { label: 'Strait of Hormuz', path: '/blog/strait-of-hormuz-crisis-oil-shipping-2026' },
    ],
    about: [
      { label: 'About Us', path: '/blogs' },
      { label: 'Contact', path: '/blogs' },
      { label: 'Privacy Policy', path: '/blogs' },
      { label: 'Terms of Use', path: '/blogs' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/usiranconflict' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/usiranconflict' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/usiranconflict' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@usiranconflict' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">UI</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">US-IRAN</span>
                <span className="text-red-500 font-bold text-xl"> CONFLICT</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Comprehensive coverage of US-Iran tensions, Middle East conflicts, and global 
              oil market impacts. In-depth analysis from the frontlines of geopolitical crisis.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Coverage column */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Coverage
            </h3>
            <ul className="space-y-3">
              {footerLinks.coverage.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Analysis column */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Analysis
            </h3>
            <ul className="space-y-3">
              {footerLinks.analysis.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-white hover:text-red-500 transition-colors break-all"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href={`tel:${siteConfig.contactPhone.replace(/\s/g, '')}`}
                    className="text-white hover:text-red-500 transition-colors"
                  >
                    {siteConfig.contactPhone}
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
                About Us
              </h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.path}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} US-Iran Conflict Coverage. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
