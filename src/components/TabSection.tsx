
import { useState } from "react";
import { MessageSquare, FileText, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatInterface from "./ChatInterface";
import DocumentDrafting from "./DocumentDrafting";
import LawyerConnection from "./LawyerConnection";
import { Tab } from "@/types";

const TabSection = () => {
  const tabs: Tab[] = [
    {
      id: "chat",
      label: "Chat with AI Assistant",
      icon: <MessageSquare size={18} />,
      content: <ChatInterface />,
    },
    {
      id: "documents",
      label: "Draft Legal Documents",
      icon: <FileText size={18} />,
      content: <DocumentDrafting />,
    },
    {
      id: "lawyers",
      label: "Connect with Lawyers",
      icon: <Users size={18} />,
      content: <LawyerConnection />,
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="border-b">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center py-4 px-6 gap-2 text-sm font-medium transition-colors",
                  activeTab === tab.id
                    ? "border-b-2 border-legal-600 text-legal-600"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="py-6">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default TabSection;
