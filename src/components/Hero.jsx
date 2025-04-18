
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-legal-50 to-accent-50 border-b">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Legal Help 
              <span className="bg-gradient-to-r from-legal-600 to-accent-600 bg-clip-text text-transparent"> 
                Accessible to Everyone
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Get AI-powered legal assistance, draft documents, and connect with qualified lawyers - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-legal-600 to-accent-600 hover:from-legal-700 hover:to-accent-700 text-white font-medium px-6 py-2">
                Try for Free
              </Button>
              <Button variant="outline" className="font-medium">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 border">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-md bg-legal-100 text-legal-600 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold">Legal AI Assistant</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3 text-gray-700">
                    What are my rights as a tenant if my landlord hasn't fixed a plumbing issue for weeks?
                  </div>
                  <div className="bg-legal-50 rounded-lg p-3 border-l-2 border-legal-600">
                    <p className="text-gray-700">
                      As a tenant, you generally have the right to a habitable living space. For persistent plumbing issues:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                      <li>Document all communication with your landlord</li>
                      <li>Send a formal written notice about the issue</li>
                      <li>In many jurisdictions, you may have "repair and deduct" rights</li>
                      <li>Check your local tenant protection laws for specific remedies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 h-20 w-20 bg-accent-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-3 -left-3 h-16 w-16 bg-legal-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
