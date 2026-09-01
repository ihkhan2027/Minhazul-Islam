export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  thesis?: string;
  focus?: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  code: string;
  description: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone?: string;
  location: string;
  coordinates: string;
  linkedinUrl: string;
  githubUrl?: string;
}
