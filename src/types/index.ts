
export type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export type DocumentType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type Lawyer = {
  id: string;
  name: string;
  specialization: string;
  rating: number;
  location: string;
  imageUrl: string;
  initials: string;
  consultationFee: string;
  availability: string;
};

export type Tab = {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};
