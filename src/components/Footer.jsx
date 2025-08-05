import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import '../styles/Footer.css';
import logo from "../assets/logo5.png"
const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: {logo},
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div >
 <img 
              src={logo} 
              alt="Logo" 
              className="logo-img"
              style={{ width: '80px', height: '80px' ,borderRadius: '70%',marginLeft:"100px" }}
            />              </div>
              <div>
                {/* <h3 className="text-xl font-bold">Freelance Collective</h3> */}
                {/* <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mt-1"></div> */}
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Delivering exceptional freelance services with a focus on innovation, quality, and client satisfaction. Your success is our mission.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">yudevx@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">+91-63093 76010</span>
              </div>
              <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">Chennai (600125), Tamil Nadu,India</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6  relative" style={{marginRight:"140px"}}>
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400" style={{marginLeft:"40px"}}></div>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} 
                     className="text-slate-300 hover:text-white transition-all duration-300 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative text-left" style={{marginRight:"100px"}}>
              Our Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400" style={{marginLeft:"70px"}}></div>
            </h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile Applications',
                'UI/UX Design',
                'Digital Marketing',
                'Brand Strategy',
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-300 hover:text-white transition-all duration-300 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Stay Updated
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400" style={{marginLeft:"120px"}}></div>
            </h4>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Subscribe to our newsletter and get the latest updates on projects, tips, and industry insights.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                  required
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isSubscribed ? (
                  <>
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="border-t border-slate-700/50 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
                  { Icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/b-yuvaraj-1499a8284/', color: 'hover:bg-blue-700' },
                  { Icon: Instagram, href: 'https://www.instagram.com/freelancer_official_1?utm_source=qr&igsh=MTh0YTE4ejZkNjdyaA==', color: 'hover:bg-pink-600' }
                ].map(({ Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${color} group`}
                  >
                    <Icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-slate-300 text-sm mb-2">Trusted by 100+ clients worldwide</div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-r ${
                      i === 1 ? 'from-blue-400 to-blue-600' :
                      i === 2 ? 'from-purple-400 to-purple-600' :
                      i === 3 ? 'from-pink-400 to-pink-600' :
                      'from-green-400 to-green-600'
                    } border-2 border-slate-800`}></div>
                  ))}
                </div>
                <span className="text-slate-400 text-sm ml-2">+496 more</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} YuDevX. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
              <div className="flex items-center">
                {/* <span className="mr-2">Made with</span>
                <div className="w-4 h-4 bg-red-500 rounded-sm animate-pulse"></div>
                <span className="ml-2">in NYC</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;