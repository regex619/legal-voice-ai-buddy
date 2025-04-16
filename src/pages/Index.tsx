
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TabSection from "@/components/TabSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Hero />
      <main className="flex-grow">
        <TabSection />
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">How LegalVoice Helps You</h2>
              <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
                Our platform combines AI technology with legal expertise to provide accessible legal assistance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border">
                <div className="bg-legal-100 text-legal-600 p-3 inline-block rounded-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Legal Consultations</h3>
                <p className="text-gray-600">
                  Get instant answers to your legal questions through our AI-powered chatbot
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border">
                <div className="bg-legal-100 text-legal-600 p-3 inline-block rounded-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Document Generation</h3>
                <p className="text-gray-600">
                  Create legally sound documents tailored to your specific needs
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border">
                <div className="bg-legal-100 text-legal-600 p-3 inline-block rounded-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lawyer Connections</h3>
                <p className="text-gray-600">
                  Connect with experienced attorneys for personalized legal advice
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-r from-legal-50 to-accent-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">What Users Say</h2>
              <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
                Real experiences from people who have used LegalVoice
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-legal-200 flex items-center justify-center mr-3">
                    <span className="font-medium text-legal-700">JD</span>
                  </div>
                  <div>
                    <h4 className="font-medium">James Davis</h4>
                    <p className="text-sm text-gray-500">Small Business Owner</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "LegalVoice helped me draft a contract for my business in minutes. The AI guidance was surprisingly accurate and saved me thousands in legal fees."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-accent-200 flex items-center justify-center mr-3">
                    <span className="font-medium text-accent-700">MR</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Maria Rodriguez</h4>
                    <p className="text-sm text-gray-500">Tenant</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "When I had issues with my landlord, the advice I got through LegalVoice was clear and actionable. I was able to resolve my issue without going to court."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-legal-200 flex items-center justify-center mr-3">
                    <span className="font-medium text-legal-700">TK</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Thomas King</h4>
                    <p className="text-sm text-gray-500">Freelancer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The lawyer I connected with through LegalVoice helped me create a solid freelance contract. The whole process was seamless and affordable."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get legal help?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start using LegalVoice today and get the legal assistance you need without the high costs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-legal-600 hover:bg-legal-700 text-white font-medium rounded-lg">
                Start for Free
              </button>
              <button className="px-6 py-3 border border-legal-200 hover:bg-legal-50 font-medium rounded-lg">
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
