export interface ModProject {
  id: string;
  title: string;
  subtitle: string;
  category: "Trade Wars" | "Galaxy In" | "Other Core Works";
  description: string;
  status: "Available Now" | "Upcoming / Expanded" | "Beta Access";
  creationsLink?: string;
  nexusLink?: string;
  features: string[];
  visualTheme: string; // Tailwind bg gradient or accent colors
  iconName: string; // Lucide icon identifier
}

export interface CYOAChoice {
  id: string;
  title: string;
  description: string;
  extraInfo?: string;
}

export interface BackstoryResult {
  logHeader: string;
  fullBackstory: string;
  redditReadyText: string;
  characterSummary: string;
}

export interface CYOAPayload {
  name: string;
  origin: string;
  trait: string;
  definingChoice: string;
  factionAlignment: string;
}
