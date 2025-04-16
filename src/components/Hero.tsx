
import { Sparkles, Shield, Headphones, Globe } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-legal-50 to-accent-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="block">Legal Help</span>
              <span className="bg-gradient-to-r from-legal-600 to-accent-600 bg-clip-text text-transparent">
                Accessible For Everyone
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 md:pr-10">
              Get AI-powered legal assistance, draft documents, and connect with verified lawyers - all in one platform.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-legal-600 hover:bg-legal-700 text-white px-6">
                Ask a Legal Question
              </Button>
              <Button variant="outline" className="border-legal-200 hover:bg-legal-50">
                Explore Documents
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="bg-legal-100 p-2 rounded-full">
                  <Sparkles size={16} className="text-legal-600" />
                </div>
                <span className="text-sm font-medium">AI-Powered Advice</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-legal-100 p-2 rounded-full">
                  <Shield size={16} className="text-legal-600" />
                </div>
                <span className="text-sm font-medium">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-legal-100 p-2 rounded-full">
                  <Headphones size={16} className="text-legal-600" />
                </div>
                <span className="text-sm font-medium">Voice Enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-legal-100 p-2 rounded-full">
                  <Globe size={16} className="text-legal-600" />
                </div>
                <span className="text-sm font-medium">Multiple Languages</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-accent-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-legal-200 rounded-full opacity-50"></div>
            <div className="relative glass-card rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <div className="bg-white p-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <div className="ml-2 text-sm font-medium">LegalVoice Assistant</div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="chat-bubble-bot mb-4">
                  <p>Hello! How can I help with your legal question today?</p>
                </div>
                <div className="chat-bubble-user ml-auto mb-4">
                  <p>I need help understanding my tenant rights.</p>
                </div>
                <div className="chat-bubble-bot">
                  <p>As a tenant, you have several important rights including...</p>
                </div>
                <div className="flex mt-4 bg-white p-2 rounded-lg border">
                  <div className="flex-1 text-sm text-gray-400">Ask a question...</div>
                  <div className="bg-legal-600 text-white p-1 rounded-md">
                    <Sparkles size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
