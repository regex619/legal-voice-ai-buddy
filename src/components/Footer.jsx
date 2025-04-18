
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-legal-600 to-accent-600 flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-legal-600 to-accent-600 bg-clip-text text-transparent">
                LegalVoice
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Making legal help accessible for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-2">Product</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-legal-600">Features</a></li>
                <li><a href="#" className="hover:text-legal-600">Pricing</a></li>
                <li><a href="#" className="hover:text-legal-600">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-legal-600">Privacy</a></li>
                <li><a href="#" className="hover:text-legal-600">Terms</a></li>
                <li><a href="#" className="hover:text-legal-600">Disclaimer</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Company</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-legal-600">About</a></li>
                <li><a href="#" className="hover:text-legal-600">Blog</a></li>
                <li><a href="#" className="hover:text-legal-600">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 LegalVoice. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center mt-2 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> for justice
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
