
import { MessageSquare, FileText, Users, Settings } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-r from-legal-600 to-accent-600 flex items-center justify-center text-white font-bold">L</div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-legal-600 to-accent-600 bg-clip-text text-transparent">LegalVoice</h1>
        </div>
        
        <nav className="hidden md:flex gap-4">
          <Button variant="ghost" className="flex gap-2 items-center">
            <MessageSquare size={18} />
            <span>Chat</span>
          </Button>
          <Button variant="ghost" className="flex gap-2 items-center">
            <FileText size={18} />
            <span>Documents</span>
          </Button>
          <Button variant="ghost" className="flex gap-2 items-center">
            <Users size={18} />
            <span>Lawyers</span>
          </Button>
        </nav>
        
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <Settings size={18} />
          </Button>
          <Button className="bg-gradient-to-r from-legal-600 to-accent-600 hover:from-legal-700 hover:to-accent-700">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
