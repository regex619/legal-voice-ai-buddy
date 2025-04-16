
import { Star, Phone, Video, Calendar, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const lawyers = [
  {
    id: "1",
    name: "Jessica A. Parker",
    specialization: "Family Law",
    rating: 4.8,
    location: "New York, NY",
    imageUrl: "",
    initials: "JP",
    consultationFee: "$120/hour",
    availability: "Available today",
  },
  {
    id: "2",
    name: "Michael B. Rodriguez",
    specialization: "Corporate Law",
    rating: 4.9,
    location: "Los Angeles, CA",
    imageUrl: "",
    initials: "MR",
    consultationFee: "$150/hour",
    availability: "Available tomorrow",
  },
  {
    id: "3",
    name: "Sarah C. Williams",
    specialization: "Civil Rights",
    rating: 4.7,
    location: "Chicago, IL",
    imageUrl: "",
    initials: "SW",
    consultationFee: "$110/hour",
    availability: "Available today",
  },
];

const LawyerConnection = () => {
  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Connect with a Lawyer</h2>
        <p className="text-muted-foreground">
          Schedule consultations with verified legal professionals
        </p>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lawyers.map((lawyer) => (
            <Card key={lawyer.id} className="overflow-hidden hover:shadow-md transition-all">
              <CardHeader className="pb-2 relative">
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                    {lawyer.rating}
                  </Badge>
                </div>
                <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
                  <AvatarImage src={lawyer.imageUrl} alt={lawyer.name} />
                  <AvatarFallback className="bg-accent-500 text-white">
                    {lawyer.initials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg mt-2">{lawyer.name}</CardTitle>
                <CardDescription className="flex items-center">
                  <Badge className="mr-2 bg-legal-100 text-legal-800 hover:bg-legal-200 border-0">
                    {lawyer.specialization}
                  </Badge>
                  <span className="flex items-center text-xs text-muted-foreground">
                    <MapPin size={12} className="mr-1" /> {lawyer.location}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Consultation Fee:</span>
                  <span className="font-medium">{lawyer.consultationFee}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-muted-foreground">Availability:</span>
                  <span className="font-medium text-green-600">{lawyer.availability}</span>
                </div>
              </CardContent>
              <CardFooter className="grid grid-cols-3 gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex items-center justify-center">
                  <Phone size={14} className="mr-1" /> Call
                </Button>
                <Button variant="outline" size="sm" className="flex items-center justify-center">
                  <Video size={14} className="mr-1" /> Video
                </Button>
                <Button variant="outline" size="sm" className="flex items-center justify-center">
                  <Calendar size={14} className="mr-1" /> Book
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <Button variant="outline" className="mr-2">View All Lawyers</Button>
          <Button className="bg-legal-600 hover:bg-legal-700">Find by Specialization</Button>
        </div>
      </div>
    </div>
  );
};

export default LawyerConnection;
