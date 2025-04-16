
import { useState } from "react";
import { FileText, ChevronRight, FilePlus, FileCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const documentTypes = [
  {
    id: "contract",
    title: "Basic Contract",
    description: "Create a simple contract with customizable terms",
    icon: <FileText size={24} />,
  },
  {
    id: "complaint",
    title: "Legal Complaint",
    description: "Draft a formal legal complaint document",
    icon: <FilePlus size={24} />,
  },
  {
    id: "agreement",
    title: "Settlement Agreement",
    description: "Create an agreement to resolve a dispute",
    icon: <FileCheck size={24} />,
  },
];

const DocumentDrafting = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Document Drafting</h2>
        <p className="text-muted-foreground">Create professional legal documents in minutes</p>
      </div>
      
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documentTypes.map((doc) => (
          <Card 
            key={doc.id}
            className={`hover:shadow-md transition-all cursor-pointer border ${
              selectedDocument === doc.id ? "ring-2 ring-legal-600" : ""
            }`}
            onClick={() => setSelectedDocument(doc.id)}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className="p-2 rounded-md bg-legal-50 text-legal-600">
                  {doc.icon}
                </div>
                <ChevronRight size={16} className="text-muted-foreground" />
              </div>
              <CardTitle className="text-lg mt-2">{doc.title}</CardTitle>
              <CardDescription>{doc.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedDocument(doc.id);
                }}
              >
                Select Template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {selectedDocument && (
        <div className="p-6 bg-gray-50 border-t">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">
                Selected: {documentTypes.find(d => d.id === selectedDocument)?.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                Click continue to start drafting
              </p>
            </div>
            <Button className="bg-legal-600 hover:bg-legal-700">
              Continue <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentDrafting;
